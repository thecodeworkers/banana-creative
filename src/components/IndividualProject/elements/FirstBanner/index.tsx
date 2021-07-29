import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { gsapFirstStart } from './gsap'
import { useSelector, useDispatch } from 'react-redux'


const FirstBanner = (props) => {

  const { loader: { loader }, theme: {theme} } = useSelector((state: any) => state)
  const [showCircle, setShowCircle] = useState(false)
  const black = '#2C292A'

 
 useEffect(() => {
  if (loader) gsapFirstStart();
}, [loader]);

  return (
    <div className='_main' >

      <div className='_container'>
        <div className={styles._parent} >
          <div className={styles._leftDivFeatured} >
            <div>

            </div>

            <div className={styles._imageDad} >
              <img src={'../../images/featured/rancho-pirata.png'} className='_img'></img>
            

            </div>
          </div>

          <div className={styles._rightDivContent}>
            <div className={styles._rightTextContent}>
              <h2 className='_title'> Rancho Pirata</h2>

              <div className='_content'>
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
      
      ._main {
        background-color:${black};
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
        }
 
      ._container {
        width: 95%;
        height: 100vh;
        margin: 0% 2.5%;
        padding-top: 10vh;
        box-sizing: border-box;
        display: flex;
        align-items:center;
        background-color: ${black};
				z-index: 999;
      }
			
			._content {
				margin-bottom: 2rem;
				opacity: 0;
			}

			._title {
				opacity: 0;
			}
      
      ._img{
        width:100%;
        height: 100%;
        opacity:0;
        transform: scale(0);
      }
      
			`
      }</style>
    </div>
  )
}

export default FirstBanner;
