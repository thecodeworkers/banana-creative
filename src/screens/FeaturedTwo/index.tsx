import React, { useEffect, FC } from 'react';
import styles from './styles.module.scss';
import { Ai } from '../../components/Svg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeBreadcrumb, setTheme } from '../../store/actions';
import { propsType } from './interface';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const FeaturedTwo: FC<propsType> = ({ imageDescription, date, keywords, title, subtitle, description, descriptionTwo, descriptionThree, descriptionFour, number, image, action, transition = false, id, theme }) => {

	const texts: Array<any> = [
		{ class: '._textDescriptionOne', duration: 0.6, delay: 0.4 },
		{ class: '._textDescriptionTwo', duration: 0.6, delay: 0.6 },
		{ class: '._textDescriptionThree', duration: 0.6, delay: 0.8 },
		{ class: '._textDescriptionFour', duration: 0.6, delay: 1 },
		{ class: '._mineralsTwoTitle', duration: 0.3, delay: 0.9 },
		{ class: '._mineralsTwoSubTitle', duration: 0.3, delay: 0.9 },
		{ class: '._zeroTwo', duration: 0.3, delay: 0.9 }
	];

	gsap.registerPlugin(ScrollTrigger);

	const helvetica = 'HelveticaNeue';
	const helveticaBold = "HeltevicaNeueBold";
	const white = '#FFFFFF'


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
				.to(['._zeroTwo', '._mineralsTwoTitle', '._mineralsTwoSubTitle'], { opacity: 1 }, 0.4);
			texts.forEach(res => { timeline.to(res.class, res?.duration, { opacity: 1 }, res?.delay) })
		}
	}

	const enterSection = (tl: any) => {

		inAnimation(false);

		if (transition) {
			action.setTheme(true);
			tl.to(['._principal', '._featuredTwoChild'], { backgroundColor: '#2C292A' });
			setTimeout(() => {
				action.changeBreadcrumb({
					color: '#FFFFFF',
					text: 'Destacados',
				});
			}, 200);
		}
	}

	const outBackSection = (tl: any) => {

		inAnimation(true);
		if (transition) {
			action.setTheme(false);

			tl.to(['._principal', '._featuredTwoChild'], { backgroundColor: 'FFFFFF' });

			setTimeout(() => {
				action.changeBreadcrumb({
					color: '#000000',
					text: 'Welcome',
				});
			}, 200);
		}
	}

	const enterBackSection = (tl: any) => {
		tl.to(['._principal', '._featuredTwoChild'], { backgroundColor: '#2C292A' })
		inAnimation(false);
	}

	const outSection = () => {

		inAnimation(true);
	};

	const triggerAction = () => {
		;

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: `#${id}`,
				start: '-=300',
				end: 'bottom',
				onEnter: () => enterSection(tl),
				onEnterBack: () => enterBackSection(tl),
				onLeaveBack: () => outBackSection(tl),
				onLeave: () => outSection()
			}
		})

	}

	return (
		<div className='_principal' id={id}>
			<div className='_featuredTwoChild'>
				<div className={styles._leftDivFeatured}>
					<div className={styles._featuredToolsTwo}>
						<p> tools </p>
						<div className={styles._toolsParentTwo}>
							<Ai />
						</div>

						<div className={styles._toolsParentTwo}>
							<Ai />
						</div>
					</div>
					<div className={styles._imageDad}>
						{image}
						<div className={styles._keywordsTwo}>
							<p className={styles._caseOfStudyTwo}> {imageDescription} </p>
							<p className={styles._textDayTwo}> {date} </p>
							<p className={styles._keywordTextTwo}> {keywords} </p>
						</div>
						<div>
						</div>
					</div>
				</div>

				<div className={styles._rightDivContent}>
					<div className={styles._rightTextContent}>
						<div>
							<p className='_zeroTwo'> {number} </p>
							<p className='_mineralsTwoTitle'> {title}</p>
							<div className={styles._loremTextTwo}>
								<p className='_textDescriptionOne'> {description} </p>
								<p className='_textDescriptionTwo'> {descriptionTwo} </p>
								<p className='_textDescriptionThree'> {descriptionThree} </p>
								<p className='_textDescriptionFour'> {descriptionFour} </p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx> {`
			  ._zeroTwo {
				font-family: ${helvetica};
				color: ${white};
				font-size: 1.7rem;
				opacity: 0;
				  font-weight: 600;
			  }
			._mineralsTwoTitle {
				color: ${white};
				font-family: ${helveticaBold};
				font-weight: bold;
				font-size: 3.8rem;
				opacity: 0;
			}
			._mineralsTwoSubTitle {
				color: ${white};
				font-family: ${helveticaBold};
				font-weight: bold;
				font-size: 3.8rem;
				margin-left: 20%;
				margin-top: -0.8rem;
				opacity: 0;
			 	@include opacity;
			  }
			  ._textDescriptionOne, 
			  ._textDescriptionTwo,
			  ._textDescriptionThree,
			  ._textDescriptionFour {
				opacity: 0;
				font-family: ${helvetica};
			}
			._principal {
				background-color:${white};;
				width: 100%;
				height: 100vh;
				box-sizing: border-box;
			  }

			._featuredTwoChild {
				width: 95%;
				height: 100vh;
				margin: 0% 2.5%;
				display: flex;
				flex-direction: row;
				align-items: center;
				padding-top: 10vh;
				box-sizing: border-box;
				background-color: ${white};
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

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedTwo);
