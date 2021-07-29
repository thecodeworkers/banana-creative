import { gsap } from 'gsap';

export const gsapThirdStart = () => {

  const timeline = gsap.timeline({ paused: true });

  timeline
    .play()
    .to("._images", 1, {scale: 1,  opacity: 1 }, 0.5)
  
}

