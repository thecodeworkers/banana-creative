import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { Ai } from '@images/svg';
import { changeBreadcrumb, setTheme } from '@store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { propsType } from './types';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const white = '#FFFFFF'
const helvetica = 'HelveticaNeue';
const helveticaBold = 'HeltevicaNeueBold';

const FeaturedRight = (props: propsType) => {

	const { imageDescription, date, keywords, title, subtitle, description, descriptionTwo, descriptionThree, descriptionFour, number, image, id } = props;

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		triggerAction();
	}, []);

	const inAnimation = (param) => {
		let timeline = gsap.timeline();

		if (param) {
			timeline.play()
			.to(['._parragraphParent', '._title'], 1, { opacity: 0 }, 0.1)
			return;
		}

		timeline.play()
		.to(['._parragraphParent', '._title'], 1, { opacity: 1 }, 0.1)
	}

	const enterBackSection = () => inAnimation(false);
	const outSection = () => inAnimation(true);
	const enterSection = () => inAnimation(false);
	const outBackSection = () => inAnimation(true);

	const triggerAction = () => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: `#${id}`,
				start: '-=30',
				end: 'center',
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
				<div className={styles._parent}>
					<div className={styles._leftFeaturedContent}>
						<div className={styles._leftDescription}>
							<h2 className='_title'> Rancho Pirata</h2>
							<div className='_parragraphParent'>
								<p > 2021 </p>
								<p>
									Branding para compañía de turismo en Los Roques, que nace de una
									casa construida con materiales 100% reciclados y busca ser una vivienda
									sustentable y eco amigable donde reine el sentimiento de comunidad.
	 							</p>
								<p>
									El branding se construyó a partir de un lettering bucanero que le diera ese
									estilo caribeño y a la vez gotico, pero manifestando elegancia y
									modernismo al mismo tiempo. Acompañado por una paleta de colores
									que invita a la aventura y al disfrute del mar.
	 							</p>
							</div>
						</div>
					</div>

					<div className={styles._rightFeaturedContent}>
						<div className={styles._imgParent}>
							<img src={image} width='100%'></img>
							<div className={styles._keywords}>
								<p className={styles._caseOfStudy}> {imageDescription} </p>
								<p className={styles._textDay}> {date} </p>
								<div className={styles._logosParent}>
									<img src='images/logos/ps.png' alt='ps' width='30px' />
									<img src='images/logos/ps.png' alt='ps' width='30px' />
									<img src='images/logos/ps.png' alt='ps' width='30px' />
								</div>
							</div>
						</div>
						<div>
						</div>
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

				._parragraphParent {
					margin-bottom: 3rem;
					opacity: 0;
				}

				._title { 
					opacity: 0;
				}
			`
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

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedRight);

