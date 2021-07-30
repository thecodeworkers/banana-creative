import React, { useEffect, FC, useState } from 'react';
import styles from './styles.module.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeBreadcrumb, setTheme } from '@store/actions';
import { propsType } from './interface';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useSelector, useDispatch } from 'react-redux'

const FeaturedTwo = ({ otheimage, imageDescription, date, keywords, title, subtitle, image, transition = false, id }) => {

	gsap.registerPlugin(ScrollTrigger)

  const dispatch = useDispatch()

  const { breadcrumb, theme } = useSelector((state: any) => state)

	const [ currentImage, setCurrentImage ] = useState(image)

	const [ xPosition, setXPosition] = useState(0)
	const [ yPosition, setYPosition] = useState(0)
	const [ showCircle, setShowCircle ] = useState(false)

	const helvetica = 'HelveticaNeue';
	const helveticaBold = "HeltevicaNeueBold";
	const white = '#FFFFFF'

	useEffect(() => {
		triggerAction();
	}, []);

	useEffect(() => {
		 document.addEventListener('mousemove', moveCircle);

		 if(!showCircle) {
			 
		 const timeline = gsap.timeline();
			timeline.play()

			.to('._circle', 0.6, { width: '0px', height: '0px'}, 0.1)
			.to(['._text', '._circle'], 0.3, { css: { scale: 0 }})
		 }

		 if(showCircle) {
			 
		 const timeline = gsap.timeline();
			timeline.play()
			
			.to('._circle', 0.6, { width: '90px', height: '90px' }, 0.1)
			.to(['._text', '._circle'], 0.6, { css: { scale: 1}})
		 }

	}, [showCircle])

	const moveCircle = (event) => {
		const timeline = gsap.timeline();
		let x = event.clientX;
		let y = event.clientY;

		timeline.play()
		// .to('._circle', 1, { x, y });
	}

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

		inAnimation(false)
		if (transition) {
			dispatch(setTheme(true))
			tl.to(['._principal', '._featuredTwoChild'], { backgroundColor: '#2C292A' });
			setTimeout(() => {
				dispatch(changeBreadcrumb({
					color: '#FFFFFF',
					text: 'Destacados',
				}));
			}, 200);
		}
	}

	const outBackSection = (tl: any) => {

		inAnimation(true);
		if (transition) {
			dispatch(setTheme(false))

			tl.to(['._principal', '._featuredTwoChild'], { backgroundColor: '#FFFFFF' });

			setTimeout(() => {
				dispatch(changeBreadcrumb({
					color: '#000000',
					text: 'Welcome',
				}));
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

	const circleStatus = () => {
		setShowCircle(showCircle => !showCircle)

	}

	return (
		<div className='_principal' id={id}>
			
			<div className='_featuredTwoChild'>
				<div className={styles._parent} >
					<div className={styles._leftDivFeatured} >
						<div>
						<div className='_circle'>
						<p className='_text'> View </p>
					</div>
						</div>
				
						<div className={styles._imageDad} onMouseEnter={circleStatus} onMouseLeave={circleStatus}>
							<img src={currentImage} width='100%'></img>
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
        background-color:${white};
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
				z-index: 999;
      }
			
			._parragraphParentOne {
				margin-bottom: 3rem;
				opacity: 0;
			}

			._titleOne {
				opacity: 0;
			}

			._circle {
				width: 90px;
				height: 90px;
				background-color: #231F20;
				position: fixed;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				top: 0px;
				left: 0px;
				transform: scale(0);
				z-index: 2
			}

			._text {
				transform: scale(0);
				font-family: ${helvetica};
				color: ${white};
			}

			`
			}</style>
		</div>
	)
}

export default FeaturedTwo;