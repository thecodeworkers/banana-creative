import { gsap } from 'gsap';
import styles from './styles.module.scss';

export const gsapStart = ({ action }) => {
  gsap.timeline().delay(1)
		.from("._description, ._target, ._targetRightContainer, ._contact, ._arrow", { opacity: 0, ease: "back", duration: 2.5 })
		.from("._whiteBodyText", { opacity: 0, stagger: { each: 0.3, from: 3 } }, "-=0.8")
		.from("._separator", { scale: 0, duration: 0.8, height: 1.5 }, "-=0.8")
		.from("._arrow", { ease: "bounce.out", y: -150, duration: 1 }, ">")
		.eventCallback("onComplete", () => action)
}

export const gsapRetract = () => {
	gsap.timeline()
	/* .to("#one", { opacity: 0, y: 10, duration: 0.1 }) */
	.to("._separator", { width: '35%', duration: 0.4, height: 1.5})
	/* .to("#two", { opacity: 0, y: 10, duration: 0.1 }) */
	.to("#three", { opacity: 0, y: 10, duration: 0.1 })
	.to("._description, ._targetRightContainer, ._contactText, ._arrow, ._languageButton", { opacity: 0, duration: 0.2 })
	.to("._intermediate", { duration: 0.4, "--bottomPosition" : "20%"})
	.to("._smallBodyText", { opacity: 1, stagger: { each: 0.05 } }, "-=0.2" )
	.to("._moreInfo", { opacity: 1, "--bottomMoreInfoPosition": "4%", ease: "back", duration: 0.5 }, ">");
}

export const gsapExpand = (toggle) => {
	gsap.timeline().delay(1.5)
	.to("._intermediate", { duration: 1, "--bottomPosition" : "50%"}, ">")
	.to("._moreInfo", { opacity: 0, "--bottomMoreInfoPosition": "15%", ease: "back", duration: 1 }, "-=1")
	.to("._smallBodyText", { opacity: 0, duration: 0.05, stagger: { each: 0.05, from: 6 } }, "-=1")
	.to("._separator", { width: '100%', duration: 1.5, height: 1.5 })
	.to("._description, ._targetRightContainer, ._contactText, ._languageButton", { opacity: 1, duration: 0.6})
	.to("._arrow", { ease: "bounce.out", y: -150, duration: 1 }, ">")
	.to("._arrow", { opacity: 1, ease: "back", duration: 2.5, y: 0 })

 	/* .to("#one", { opacity: 1, y: 10, duration: 0.2 }, "-=1.5")
	.to("#two", { opacity: 1, y: 10, duration: 0.2 }, ">")  */
	.to("#three", { opacity: 1, y: 10, duration: 0.2 }, "-=1.5")

	.eventCallback("onComplete", () => toggle());
}
