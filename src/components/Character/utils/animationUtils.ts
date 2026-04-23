import * as THREE from "three";
import { GLTF } from "three-stdlib";

const setAnimations = (gltf: GLTF) => {
  const character = gltf.scene;
  const mixer = new THREE.AnimationMixer(character);

  if (gltf.animations) {
    // Intro animation: plays once, clamps at final seated pose
    const introClip = gltf.animations.find(
      (clip) => clip.name === "introAnimation"
    );
    if (introClip) {
      const introAction = mixer.clipAction(introClip);
      introAction.setLoop(THREE.LoopOnce, 1);
      introAction.clampWhenFinished = true;
      introAction.play();
    }

    // Seated idle loops: play on top of each other, blend together
    const idleNames = ["key1", "key2"];
    idleNames.forEach((name) => {
      const clip = THREE.AnimationClip.findByName(gltf.animations, name);
      if (clip) {
        const action = mixer.clipAction(clip);
        action.play();
        action.timeScale = 1.0;
        action.setEffectiveWeight(0.3); // subtle idle, don't overpower
      } else {
        console.warn(`Animation "${name}" not found`);
      }
    });

    // Typing animation: plays as the main body action
    const typingClip = THREE.AnimationClip.findByName(gltf.animations, "typing");
    if (typingClip) {
      const typingAction = mixer.clipAction(typingClip);
      typingAction.play();
      typingAction.timeScale = 1.0;
    }
  }

  function startIntro() {
    const introClip = gltf.animations.find(
      (clip) => clip.name === "introAnimation"
    );
    if (introClip) {
      const introAction = mixer.clipAction(introClip);
      introAction.clampWhenFinished = true;
      introAction.reset().play();
    }
  }

  // Hover stub: your model doesn't have face bones, so this is a no-op.
  // Scene.tsx still calls this, so we need to return it — but it does nothing.
  function hover(_gltf: GLTF, _hoverDiv: HTMLDivElement) {
    return () => { };
  }

  return { mixer, startIntro, hover };
};

export default setAnimations;