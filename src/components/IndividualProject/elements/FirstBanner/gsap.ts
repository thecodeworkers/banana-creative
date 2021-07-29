import { gsap } from 'gsap';

export const gsapFirstStart = () => {

  const timeline = gsap.timeline({ paused: true });

  timeline
    .play()
    .to("._img", 1, {scale: 1,  opacity: 1 }, 0.8)
    .to(["._title", "._content"], 1, { opacity: 1 }, 0.8)
   
}

