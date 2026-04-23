import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>((resolve, reject) => {
      loader.load(
        "/models/character_final.glb",
        async (gltf) => {
          const character = gltf.scene;
          await renderer.compileAsync(character, camera, scene);

          character.traverse((child: any) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              child.frustumCulled = true;
            }
          });

          resolve(gltf);
          setCharTimeline(character, camera);
          setAllTimeline();
          dracoLoader.dispose();
        },
        undefined,
        (error) => {
          console.error("Error loading GLTF model:", error);
          reject(error);
        }
      );
    });
  };

  return { loadCharacter };
};

export default setCharacter;