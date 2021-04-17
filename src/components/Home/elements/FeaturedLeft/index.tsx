import React, { useEffect, FC, useState } from 'react';
import styles from './styles.module.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeBreadcrumb, setTheme } from '@store/actions';
import { propsType } from './interface';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const FeaturedTwo = ({ otheimage, imageDescription, date, keywords, title, subtitle, image, action, transition = false, id, theme }) => {

	gsap.registerPlugin(ScrollTrigger);

	const [ currentImage, setCurrentImage ] = useState(image)

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
			.to(['._parragraphParentOne', '._titleOne'], 1, { opacity: 0 }, 0.1)
			return;
		}

		timeline.play()
		.to(['._parragraphParentOne', '._titleOne'], 1, { opacity: 1 }, 0.1)
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

			tl.to(['._principal', '._featuredTwoChild'], { backgroundColor: '#FFFFFF' });

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

	const outSection = () => inAnimation(true);

	const triggerAction = () => {

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: `#${id}`,
				start: '-=30',
				end: 'center',
				onEnter: () => enterSection(tl),
				onEnterBack: () => enterBackSection(tl),
				onLeaveBack: () => outBackSection(tl),
				onLeave: () => outSection()
			}
		})
	}

	const changeImage = (param) => {
		setCurrentImage(param)
	}

	return (
		<div className='_principal' id={id}>
			<div className='_featuredTwoChild'>

				<div className={styles._parent}>
					<div className={styles._leftDivFeatured}>
						<div className={styles._imageDad}>
							<img src={currentImage} width='100%' ></img>
							<div className={styles._keywordsTwo}>
								<p className={styles._caseOfStudyTwo}> {imageDescription} </p>
								<p className={styles._textDayTwo}> {date} </p>

								<div className={styles._logosParent}>
									<img src='images/logos/ps.png' alt='ps' width='30px' />
									<img src='images/logos/ps.png' alt='ps' width='30px' />
									<img src='images/logos/ps.png' alt='ps' width='30px' />
								</div>
							</div>
							<div>
							</div>
						</div>
					</div>

					<div className={styles._rightDivContent}>
						<div className={styles._rightTextContent}>
							<h2 className='_titleOne'> Rancho Pirata</h2>

							<div className='_parragraphParentOne'>
								<p> 2021 </p>
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
        padding-top: 10vh;
        box-sizing: border-box;
        display: flex;
        align-items:center;
        background-color: ${white};
      }
			
			._parragraphParentOne {
				margin-bottom: 3rem;
				opacity: 0;
			}

			._titleOne {
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

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedTwo);