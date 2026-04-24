import * as THREE from "three";
import gsap from "gsap";

export function setCharTimeline(
  character: THREE.Object3D<THREE.Object3DEventMap> | null,
  camera: THREE.PerspectiveCamera
) {
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "center 55%",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".whatIDO",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  // Neck bone for the "looking at monitor" lean — Mixamo uses mixamorigNeck
  const neckBone = character?.getObjectByName("mixamorigNeck");

  if (window.innerWidth > 1024) {
    if (character) {
      const deskMeshes = (window as any).__deskMeshes;
      const lookTarget = (window as any).__lookTarget;

      tl1
        // About Me framing: 3/4 left view, character small in bottom-left
        .to(camera.position, { x: -1.5, y: 0.3, z: 3.0, duration: 1 }, 0)
        .to(camera as any, {
          fov: 22,
          duration: 1,
          onUpdate: () => camera.updateProjectionMatrix(),
        }, 0)
        // lookTarget shifted up + right → character appears down + left in frame
        .to(lookTarget, { x: 1.0, y: 0.8, z: 0, duration: 1 }, 0)
        .to(".landing-container", { opacity: 0, duration: 1 }, 0)
        .to(".landing-container", { y: "40%", duration: 1 }, 0)
        .fromTo(".about-me", { y: "-50%" }, { y: "0%", duration: 1 }, 0);

      tl2
        // What I Do: full body, 3/4 left, bottom center
        .to(camera as any, {
          fov: 30,
          duration: 6,
          delay: 2,
          ease: "power3.inOut",
          onUpdate: () => camera.updateProjectionMatrix(),
        }, 0)
        .to(
          camera.position,
          { x: -3.5, y: 1.2, z: 5.0, duration: 6, delay: 2, ease: "power3.inOut" },
          0
        )
        // lookTarget high → character sits at BOTTOM of frame, centered horizontally (x=0)
        .to(
          lookTarget,
          { x: 0, y: 1.3, duration: 6, delay: 2, ease: "power3.inOut" },
          0
        )
        .to(".about-section", { y: "30%", duration: 6 }, 0)
        .to(".about-section", { opacity: 0, delay: 3, duration: 2 }, 0)
        .fromTo(
          ".character-model",
          { pointerEvents: "inherit" },
          { pointerEvents: "none", x: "-12%", delay: 2, duration: 5 },
          0
        )
        //.to(character.rotation, { y: 0.6, x: 0.08, delay: 3, duration: 3 }, 0)
        .fromTo(
          ".what-box-in",
          { display: "none" },
          { display: "flex", duration: 0.1, delay: 6 },
          0
        )
        .fromTo(
          ".character-rim",
          { opacity: 1, scaleX: 1.4 },
          { opacity: 0, scale: 0, y: "-70%", duration: 5, delay: 2 },
          0.3
        );

      //if (neckBone) {
      //  tl2.to(neckBone.rotation, { x: 0.3, delay: 2, duration: 3 }, 0);
      //}

      tl3
        .fromTo(
          ".character-model",
          { y: "0%" },
          { y: "-100%", duration: 4, ease: "none", delay: 1 },
          0
        )
        .fromTo(".whatIDO", { y: 0 }, { y: "15%", duration: 2 }, 0)
        .to(character.rotation, { x: -0.04, duration: 2, delay: 1 }, 0);
    }
  } else {
    if (character) {
      const tM2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".what-box-in",
          start: "top 70%",
          end: "bottom top",
        },
      });
      tM2.to(".what-box-in", { display: "flex", duration: 0.1, delay: 0 }, 0);
    }
  }
}

export function setAllTimeline() {
  const careerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".career-section",
      start: "top 30%",
      end: "100% center",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  careerTimeline
    .fromTo(
      ".career-timeline",
      { maxHeight: "10%" },
      { maxHeight: "100%", duration: 0.5 },
      0
    )
    .fromTo(
      ".career-timeline",
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      0
    )
    .fromTo(
      ".career-info-box",
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 0.5 },
      0
    )
    .fromTo(
      ".career-dot",
      { animationIterationCount: "infinite" },
      {
        animationIterationCount: "1",
        delay: 0.3,
        duration: 0.1,
      },
      0
    );

  if (window.innerWidth > 1024) {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: "20%", duration: 0.5, delay: 0.2 },
      0
    );
  } else {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: 0, duration: 0.5, delay: 0.2 },
      0
    );
  }
}