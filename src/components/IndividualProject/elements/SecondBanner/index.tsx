import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { gsapSecondStart } from './gsap'
import { useSelector, useDispatch } from 'react-redux'

const SecondBanner = () => {

  const { loader: { loader }, theme: {theme} } = useSelector((state: any) => state)

  const [showCircle, setShowCircle] = useState(false)
  const helveticaLight = "Heltevicalight";
  const helveticaMedium = "HeltevicaNeueMedium";
  const white = '#FFFFFF'
  const black = '#2C292A'
  const circleStatus = () => {
    setShowCircle(showCircle => !showCircle)
  }

  useEffect(() => {
    if (loader) gsapSecondStart();
  }, [loader]);

  return (
    <div className='_father' >

      <div className='_fatherContainer'>
        <div className={styles._parent} >
          <div className={styles._leftDivFeatured} >


            <div className={styles._imageDad} onMouseEnter={circleStatus} onMouseLeave={circleStatus}>
              <img src={'../../images/featured/rancho-pirata.png'} className='_image'></img>
            </div>
            <p className='_leftText'>Rancho pirata Palettes </p>
          </div>

          <div className={styles._rightDivContent}>

            <div className={styles._imageDad}>
              <img src={'../../images/featured/rancho-pirata.png'} className='_image'></img>
            </div>
            <p className='_rightText'>Modelados en 3D para la campaña de la colección
              Upside Down de la diseñadora Mayela Sain. Introducción
              de piezas y modelos en una animación tridimensional. </p>
          </div>
        </div>

      </div>
      <style jsx> {`
       
      ._father {
        background-color:${black};
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        }
 
      ._fatherContainer {
        width: 95%;
        height: 85vh;
        margin: 0% 2.5%;
        padding-top: 10vh;
        box-sizing: border-box;
        display: flex;
        align-items:center;
        background-color: ${black};
				z-index: 999;
      }
			
			._image {
				width:100%;
        height:100%;
        opacity:0;
        transform: scale(0);
			}

      ._rightText{
        margin-top: 1rem;
        margin-right: 0.5rem;
        font-family: ${helveticaMedium};
        color: ${white};
        font-size: 0.563rem;
        text-align: right;
        opacity: 0;
      }

      ._leftText{
        margin-top: 1rem;
        font-family: ${helveticaLight};
        color: ${white};
        font-size: 0.75rem;
        opacity: 0;
      }

			`
      }</style>
    </div>
  )
}

export default SecondBanner;
