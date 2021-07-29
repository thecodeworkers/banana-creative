import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { gsapThirdStart } from './gsap'
import { useSelector, useDispatch } from 'react-redux'

const ThirdBanner = () => {

  const { loader: { loader }, theme: {theme} } = useSelector((state: any) => state)
  const [showCircle, setShowCircle] = useState(false)
  const black = '#2C292A'

  useEffect(() => {
    if (loader) gsapThirdStart();
  }, [loader]);

  const circleStatus = () => {
    setShowCircle(showCircle => !showCircle)
  }

  return (
    <div className='_mainContainer' >

      <div className='_mainContent'>
        <div className={styles._parent} >
          <div className={styles._leftDivFeatured} >

            <div className={styles._imageDad} onMouseEnter={circleStatus} onMouseLeave={circleStatus}>
              <img src={'../../images/featured/rancho-pirata.png'} className='_images'></img>
            </div>
        
          </div>

          <div className={styles._rightDivContent}>

              <div className={styles._imgLeft}>
                <img src={'../../images/featured/rancho-pirata.png'} className='_images'></img>
              </div>
    
          </div>
        </div>

      </div>
      <style jsx> {`

      ._mainContainer {
        background-color:${black};
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        }
 
      ._mainContent {
        width: 95%;
        height: 100vh;
        margin-left: 0;
        margin-right: 2.5%;
        padding-top: 10vh;
        box-sizing: border-box;
        display: flex;
        align-items:center;
        background-color: ${black};
				z-index: 999;
      }
			
      ._images{
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

export default ThirdBanner;
