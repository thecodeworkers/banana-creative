import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { Ai } from '../../components/Svg';
import { changeBreadcrumb, setTheme } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { propsType } from './types';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const texts: Array<any> = [
	{ class: '._textDescription1', duration: 0.6, delay: 0.4 },
	{ class: '._textDescription2', duration: 0.6, delay: 0.6 },
	{ class: '._textDescription3', duration: 0.6, delay: 0.8 },
	{ class: '._textDescription4', duration: 0.6, delay: 1 },
	{ class: '._zeroOne', duration: 0.3, delay: 0.7 },
	{ class: '._mineralsTitle', duration: 0.3, delay: 0.9 },
	{ class: '._mineralsSubTitle', duration: 0.3, delay: 0.9 },
];

const white = '#FFFFFF'
const helvetica = 'HelveticaNeue';
const helveticaBold = "HeltevicaNeueBold";

const Featured = (props: propsType) => {

	const { imageDescription, date, keywords, title, subtitle, description, descriptionTwo, descriptionThree, descriptionFour, number, image, id } = props;

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		triggerAction();
	}, []);

	const inAnimation = (param) => {
		let timeline = gsap.timeline();

		if (param) {
			timeline.play()
			texts.forEach(res => { timeline.to(res.class, 0.1, { opacity: 0 }, 0.1) })
		}

		if (!param) {
			timeline.play()
				.to(['._zeroOne', '._mineralsTitle', '._mineralsSubTitle'], { opacity: 1 }, 0.4);
			texts.forEach(res => { timeline.to(res.class, res?.duration, { opacity: 1 }, res?.delay) })
		}
	}

	const enterBackSection = () => inAnimation(false);
	const outSection = () => inAnimation(true);
	const enterSection = () => inAnimation(false);
	const outBackSection = () => inAnimation(true);

	const triggerAction = () => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: `#${id}`,
				start: '-=300',
				end: 'bottom',
				onEnter: () => enterSection(),
				onEnterBack: () => enterBackSection(),
				onLeaveBack: () => outBackSection(),
				onLeave: () => outSection()
			}
		})
	}

	return (
		<div className={styles._main} id={id}>
			<div className={styles._featuredContent}>
				<div className={styles._leftFeaturedContent}>
					<div className={styles._leftDescription}>
						<div>
							<p className='_zeroOne'> {number} </p>
							<p className='_mineralsTitle'> {title} </p>
							<p className='_mineralsSubTitle'> {subtitle} </p>
							<div className={styles._loremText}>
								<p className='_textDescription1'> {description} </p>
								<p className='_textDescription2'> {descriptionTwo} </p>
								<p className='_textDescription3'> {descriptionThree} </p>
								<p className='_textDescription4'> {descriptionFour} </p>
							</div>
						</div>
					</div>
				</div>

				<div className={styles._rightFeaturedContent}>

					<div className={styles._featuredTools}>
						<p className={styles._toolsText}> tools </p>
						<div className={styles._toolsParent}>
							<Ai />
						</div>

						<div className={styles._toolsParent}>
							<Ai />
						</div>
					</div>
					<div className={styles._imgParent}>
						{image}
						<div className={styles._keywords}>
							<p className={styles._caseOfStudy}> {imageDescription} </p>
							<p className={styles._textDay}> {date} </p>
							<p className={styles._keywordText}> {keywords} </p>
						</div>
					</div>
					<div>
					</div>
				</div>
			</div>
			<style jsx> {`
			._zeroOne {
				font-family: ${helvetica};
				color: ${white};
				font-weight: 600;
				font-size: 1.7rem;
				opacity: 0;
			  }
			._mineralsTitle {
				color: ${white};
				font-family: ${helveticaBold};
				font-weight: bold;
				font-size: 4rem;
				opacity: 0;
			  }
			  ._mineralsSubTitle {
				color: ${white};
				font-family: ${helveticaBold};
				font-weight: bold;
				font-size: 4rem;
				margin-left: 23.5%;
				margin-top: -0.8rem;
				opacity: 0;
			  }
			  ._textDescription1,
			  ._textDescription2,
			  ._textDescription3,
			  ._textDescription4 {
				opacity: 0;
				font-family: ${helvetica};
			}
			
			}`
			}</style>
		</div>
	)
}

const mapStateToProps = ({ breadcrumb, theme }) => ({ breadcrumb, theme });

const mapDispatchToProps = dispatch => {
	const actions = {
		changeBreadcrumb,
		setTheme
	}

	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Featured);

