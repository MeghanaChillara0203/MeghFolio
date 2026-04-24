import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());

  const [, setChar] = useState<THREE.Object3D | null>(null);

  useEffect(() => {
    // Ensure page starts at top
    window.scrollTo(0, 0);
    if (canvasDiv.current) {
      const rect = canvasDiv.current.getBoundingClientRect();
      const container = { width: rect.width, height: rect.height };
      const aspect = container.width / container.height;
      const scene = sceneRef.current;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(container.width, container.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
      renderer.setClearColor(0x000000, 0);  // transparent background
      renderer.shadowMap.enabled = false;
      canvasDiv.current.appendChild(renderer.domElement);

      const camera = new THREE.PerspectiveCamera(20, aspect, 0.1, 1000);
      camera.position.set(0, 0.65, 2.5);   // close portrait (narrow FOV = no desk)
      const lookTarget = new THREE.Vector3(0, 0.6, 0);
      (window as any).__lookTarget = lookTarget;
      camera.lookAt(lookTarget);
      camera.updateProjectionMatrix();

      let headBone: THREE.Object3D | null = null;
      let mixer: THREE.AnimationMixer;

      const clock = new THREE.Clock();

      const light = setLighting(scene);
      const { loadCharacter } = setCharacter(renderer, scene, camera);

      // will be set once character loads
      let startSeatedAnims: (() => void) | null = null;
      let seatedStarted = false;

      loadCharacter().then((gltf) => {
        if (gltf) {
          const animations = setAnimations(gltf);
          startSeatedAnims = animations.startSeatedAnimations;

          if (hoverDivRef.current) {
            animations.hover(gltf, hoverDivRef.current);
          }
          mixer = animations.mixer;
          const character = gltf.scene;
          setChar(character);
          scene.add(character);

          // Identify and hide desk/environment meshes on landing
          const deskMeshes: THREE.Object3D[] = [];
          character.traverse((o: any) => {
            // Character mesh is SkinnedMesh (Mesh_0). Everything else is desk/env
            if (o.isMesh && !o.isSkinnedMesh && o.name !== "Mesh_0") {
              deskMeshes.push(o);
              o.visible = false;
            }
          });
          (window as any).__deskMeshes = deskMeshes;

          const toggleDesk = () => {
            const show = window.scrollY > 50;
            deskMeshes.forEach((m: any) => (m.visible = show));
          };
          window.addEventListener("scroll", toggleDesk);

          headBone = character.getObjectByName("mixamorigHead") || null;


          setTimeout(() => {
            light.turnOnLights();
            animations.startIntro();
          }, 300);

          window.addEventListener("resize", () =>
            handleResize(renderer, camera, canvasDiv, character)
          );
        }
      });

      // Kick off typing/idles when user first scrolls
      const onFirstScroll = () => {
        if (!seatedStarted && window.scrollY > 50 && startSeatedAnims) {
          seatedStarted = true;
          startSeatedAnims();
          window.removeEventListener("scroll", onFirstScroll);
        }
      };
      window.addEventListener("scroll", onFirstScroll);

      let mouse = { x: 0, y: 0 };
      let interpolation = { x: 0.1, y: 0.2 };

      const onMouseMove = (event: MouseEvent) => {
        handleMouseMove(event, (x, y) => (mouse = { x, y }));
      };

      let debounce: number | undefined;
      const onTouchStart = (event: TouchEvent) => {
        const element = event.target as HTMLElement;
        debounce = window.setTimeout(() => {
          element?.addEventListener("touchmove", (e: TouchEvent) =>
            handleTouchMove(e, (x, y) => (mouse = { x, y }))
          );
        }, 200);
      };

      const onTouchEnd = () => {
        handleTouchEnd((x, y, interpolationX, interpolationY) => {
          mouse = { x, y };
          interpolation = { x: interpolationX, y: interpolationY };
        });
      };

      document.addEventListener("mousemove", onMouseMove);
      const landingDiv = document.getElementById("landingDiv");
      if (landingDiv) {
        landingDiv.addEventListener("touchstart", onTouchStart);
        landingDiv.addEventListener("touchend", onTouchEnd);
      }

      const animate = () => {
        requestAnimationFrame(animate);
        if (headBone) {
          // Head locked forward — reset rotation every frame
          headBone.rotation.set(0, 0, 0);
        }
        const delta = clock.getDelta();
        if (mixer) {
          mixer.update(delta);
        }
        camera.lookAt(lookTarget);  // always look at character (dynamic)
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        clearTimeout(debounce);
        scene.clear();
        renderer.dispose();
        window.removeEventListener("resize", () =>
          handleResize(renderer, camera, canvasDiv, null!)
        );
        window.removeEventListener("scroll", onFirstScroll);
        if (canvasDiv.current) {
          canvasDiv.current.removeChild(renderer.domElement);
        }
        if (landingDiv) {
          document.removeEventListener("mousemove", onMouseMove);
          landingDiv.removeEventListener("touchstart", onTouchStart);
          landingDiv.removeEventListener("touchend", onTouchEnd);
        }
      };
    }


  }, []);

  return (
    <>
      <div className="character-container">
        <div className="character-model" ref={canvasDiv}>
          <div className="character-rim"></div>
          <div className="character-hover" ref={hoverDivRef}></div>
        </div>
      </div>
    </>
  );
};

export default Scene;