import { gsap } from 'gsap';

export const gsapSecondStart = () => {

  const timeline = gsap.timeline({ paused: true });

  timeline
    .play()
    .to("._image", 1, {scale: 1,  opacity: 1 }, 0.5)
    .to(["._rightText", "._leftText"], 1, { opacity: 1 }, 0.8) 
}

