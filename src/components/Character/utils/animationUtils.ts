import * as THREE from "three";
import { GLTF } from "three-stdlib";

const setAnimations = (gltf: GLTF) => {
  const character = gltf.scene;
  const mixer = new THREE.AnimationMixer(character);

  if (gltf.animations) {
    // Intro animation: prepared but NOT played yet.
    // It'll be triggered by startIntro() after loading finishes.
    const introClip = gltf.animations.find(
      (clip) => clip.name === "introAnimation"
    );
    if (introClip) {
      const introAction = mixer.clipAction(introClip);
      introAction.setLoop(THREE.LoopOnce, 1);
      introAction.clampWhenFinished = true;
      // note: no .play() here — startIntro() handles that
    }

    // Seated idle loops + typing: prepared but NOT playing at start.
    // They start when the user scrolls (triggered from Scene.tsx).
    const idleNames = ["key1", "key2"];
    idleNames.forEach((name, idx) => {
      const clip = THREE.AnimationClip.findByName(gltf.animations, name);
      if (clip) {
        // Strip head + neck tracks to prevent tilt
        clip.tracks = clip.tracks.filter(
          (t) => !t.name.includes("Head") && !t.name.includes("Neck")
        );
        const action = mixer.clipAction(clip);
        action.timeScale = 1.0;
        // Play key1 FROZEN at frame 0 so she poses without panting
        if (idx === 0) {
          action.setEffectiveWeight(1.0);
          action.play();
          action.paused = true;  // freeze animation at current frame
          action.time = 0;        // hold at frame 0
        } else {
          action.setEffectiveWeight(0.3);
        }
      } else {
        console.warn(`Animation "${name}" not found`);
      }
    });

    const typingClip = THREE.AnimationClip.findByName(gltf.animations, "typing");
    if (typingClip) {
      // Strip out head + neck tracks so her head stays locked forward
      typingClip.tracks = typingClip.tracks.filter(
        (t) => !t.name.includes("Head") && !t.name.includes("Neck")
      );
      const typingAction = mixer.clipAction(typingClip);
      typingAction.timeScale = 1.0;
      // NOT playing yet — will start on scroll
    }
  }

  // Called when user starts scrolling — kicks off typing + idles
  function startSeatedAnimations() {
    const toPlay = ["typing", "key1", "key2"];
    toPlay.forEach((name) => {
      const clip = THREE.AnimationClip.findByName(gltf.animations, name);
      if (clip) {
        const action = mixer.clipAction(clip);
        action.paused = false;  // unfreeze
        if (!action.isRunning()) {
          action.reset().play();
        }
      }
    });
  }

  function startIntro() {
    const introClip = gltf.animations.find(
      (clip) => clip.name === "introAnimation"
    );
    if (introClip) {
      // Strip head + neck tracks so her head stays locked forward
      introClip.tracks = introClip.tracks.filter(
        (t) => !t.name.includes("Head") && !t.name.includes("Neck")
      );
      const introAction = mixer.clipAction(introClip);
      introAction.setLoop(THREE.LoopOnce, 1);
      introAction.clampWhenFinished = true;
      // note: no .play() here — startIntro() handles that
    }
  }

  // Hover stub: your model doesn't have face bones, so this is a no-op.
  // Scene.tsx still calls this, so we need to return it — but it does nothing.
  function hover(_gltf: GLTF, _hoverDiv: HTMLDivElement) {
    return () => { };
  }

  return { mixer, startIntro, hover, startSeatedAnimations };
};

export default setAnimations;