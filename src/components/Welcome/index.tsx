import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { gsapStart, gsapRetract, gsapExpand } from './gsap';
import { Arrow } from '@images/svg';
import { changeToggle, setAnimationState, changeLanguage } from '@store/actions';
import { useTranslation } from 'react-i18next';
import { withTrans } from '../../i18n/withTrans';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux'

const gray = '#929497';
const pureBlack = '#000000';
const thunder = '#231F20'
const helvetica = 'HelveticaNeue';
const helveticaNormalBold = 'HeltevicaBold';
const helveticaBold = 'HeltevicaNeueBold';
const helveticaMedium = 'HelveticaNeueMedium';
const white = '#FFFFFF'

const Welcome = (props) => {

  const dispatch = useDispatch()
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');
  const { t, title, component  } = props;

  const { loader, menu, toggle, page: { welcomePage } } = useSelector((state: any) => state)

  useEffect(() => {
    if (loader.loader && !loader.animation) gsapStart(dispatch(setAnimationState(true)));
  }, [loader]);

  useEffect(() => {
    if (loader.loader) {
      if (!menu.opened && toggle.toggle == 3) return;
      menu.opened ? gsapRetract() : gsapExpand(toggleDispatch);
    }
  }, [menu]);

  const toggleDispatch = () => dispatch(changeToggle(2))

  const scrollToNextSection = () => {
    var i = 10;
    var int = setInterval(function () {
      window.scrollTo(0, i);
      i += 10;
      if (i >= document.documentElement.clientHeight) clearInterval(int);
    }, 20);
  }

  const changeLang = async (event: any) => {
    const lang = event.target.value;
    let text = '';
    if (lang == 'en') {
      setLanguage('es');
      text = 'es';
    }

    if (lang == 'es') {
      setLanguage('en');
      text = 'en';
    }

    await dispatch(changeLanguage(lang.toUpperCase()))

    i18n.changeLanguage(text);
  }

  return (
    <>
      <div className={styles._principalContainer}>
        <div className={styles._container}>
          <section className='_concept'>
            {/* <div className='_whiteBodyText' id='one'> {t("concept&purpose")} </div>
					<div className='_whiteBodyText' id='two'> {t("beauty&function")} </div> */}
            {
              component
                ? <div className={styles._logoParentWelcome} id='three'>{title}</div>
                : <div className='_whiteBodyText' id='three'> {t(title)} </div>
            }

          </section>
          <ul className={styles._list} id='list'>
            <li className='_smallBodyText' id='text-3'>{t("beauty")}</li>
            <li className='_smallBodyText' id='text-4'>{t("function")}</li>
            <li className='_smallBodyText' id='text-5'>{t("creation")}</li>
            <li className='_smallBodyText' id='text-1'>{t("concept")} </li>
            <li className='_smallBodyText' id='text-2'>{t("purpose")}</li>
            <li className='_smallBodyText' id='text-6'>{t("innovation")}</li>
          </ul>
          <section className='_intermediate'>
            <div className='_target'>{welcomePage?.welcome?.subtitle}</div>
            <div className='_targetRightContainer'>
              <div className='_targetRight'>{welcomePage?.welcome?.secondSubtitle}</div>
              <a href={welcomePage?.welcome?.recap?.link} className={styles._downloadLink}><div className='_targetRight _targetDownload'>{welcomePage?.welcome?.recap?.title} <span className='_targetSpan'>*</span></div></a>
            </div>
            <div className='_separator'></div>
          </section>
          <section className='_contact'>
            <button className='_languageButton' onClick={changeLang} value={language} >
              {(language == 'en' ? 'Español' : 'English')}
            </button>
            <div className='_contactText'>hello@bananadesign.io</div>
            <div className='_contactText'>+58 424 187 2382</div>
            <div className='_contactText'>+58 424 837 8858</div>
            <p className='_moreInfo'>
              {welcomePage?.welcome?.moreInfo}
            </p>
          </section>
          <div className='_arrow' onClick={scrollToNextSection}>
            <Arrow />
          </div>
          <section className='_description'>
            <div className='_descriptionText'>
              {welcomePage?.welcome?.content}
            </div>
            <div className='_descriptionTextRigth'>
              <div className='_contactRightText'>@_bananacreative</div>
            </div>
          </section>
        </div>
      </div>

      <style jsx> {`
			._description {
			background-color: #FFFFFF;
			width: 50%;
			font-family: ${helvetica};
			font-weight: 900;
			font-size: 22px;
			line-height: 1.2;
			color: ${pureBlack};
			display:flex;
			justify-content: space-between;
			flex-direction: column;
		}

		._descriptionText {
			padding: 0 0 10% 15%;
			background-color: #FFFFFF;
		}
		._descriptionTextRigth {
			padding: 0 0 0 15%;
			background-color: #FFFFFF;
		}

		._target {
			font-family: ${helveticaBold};
			width: 50%;
			background-color: #FFFFFF;
			font-size: 1rem;
			font-weight: 700
		}

		._targetRightContainer {
			display: flex;
			justify-content: space-between;
			width: 50%;
			background-color: #FFFFFF;	
		}

		._targetRight {
			font-family: ${helvetica};
      align-self: center;
			color: $gray;
			background-color: #FFFFFF;
		}

    ._targetDownload {
			font-family: ${helvetica};
			color: #FF004E;
			background-color: #FFFFFF;
      font-weight: bolder;
      display: flex;
      align-items: center
		}

		._targetSpan{
			display: block;
			font-size: 4rem;
			height: 2rem;
		}

		._targetRight:first-child {
			padding-left: 15%;
		}

		._contact {
			width: 50%;
			display: flex;
			align-items: flex-end;
			background-color: #FFFFFF;
		}

		._contactText {
			font-family: ${helveticaMedium};
			font-size: 12px;
			margin-right: 10%;
			background-color: #FFFFFF;
			font-weight: 900
		}
		._contactRightText {
			font-family: ${helveticaMedium};
			font-size: 12px;
			background-color: #FFFFFF;
			font-weight: 900
			padding: 0 0 10% 15%;
		}


		._contactText::after {
			display: block;
			content: '';
			border-bottom: solid 1px ${pureBlack};
			transform: scaleX(0);
			transition: transform 250ms ease-in-out;
		}

		._contactText:hover::after {
			transform: scaleX(1);
		}

		._moreInfo {
			opacity: 0;
			position: absolute;
			bottom: 15%;
			color: ${gray};
			width: 30%;
			background-color: #FFFFFF;
			font-family: ${helvetica};
		}

		._arrow {
			position: absolute;
			bottom: 5%;
			right: 50%;
			z-index: 2;
		}
		
		._whiteBodyText{
			color: ${pureBlack};
			font-family: ${helveticaBold};
			font-weight: bold;
			line-height: 1.2;
			opacity: 1;
			font-size: 5rem;
			background-color: #FFFFFF;
		}

		._concept {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			width: 100%;
			height: 40%;
			background-color: #FFFFFF;
		}

		._separator {
			width: 100%;
			border: 0;
			background-color: ${gray};
			height: 3px;
		}

		._intermediate {
			display: flex;
      align-items: center;
			flex-wrap: wrap;
			margin-top: 1.4%;
			z-index: 2;
			position: absolute;
			bottom: 50%;
			width: 95%;
		}

		._languageButton {
			font-family: ${helveticaMedium};
			font-size: 12px;
			background-color: ${pureBlack};
			color: ${white};
			border: none;
			width: 70px;
			margin-right: 50px;
			padding: 5px 0 3px 0;
			border-radius: 2px;
			cursor: none;
			font-weight: 200;
		}

		._smallBodyText {
			opacity: 0;
			font-size: 1.75rem;
			z-index: 2;
			font-family: ${helveticaNormalBold};
			line-height: 1.2;
			font-weight: 900;
			color: ${thunder};
			padding-bottom: 0.625rem;
		}
		
		@media (max-width: 1400px) {
			._moreInfo{
				font-size: 0.8rem !important;
				bottom: 7% !important;
			}
		
			._target{
				font-size: 0.75rem !important;
			}
		
			._list{
				top: 32% !important;
			}
		
			._smallBodyText{
				font-size:1.20rem !important;
			}
		
			._descriptionText{
				font-size: 1.1rem !important
			}
		
			._whiteBodyText{
				font-size: 2.5rem !important;
			}
		}

		@media(max-width: 1200px) {
			._moreInfo{
				font-size: 0.8rem !important;
				bottom: 5% !important;
			}
		
			._target{
				font-size: 0.75rem !important;
			}
		
			._list{
				top: 26% !important;
			}
		
			._smallBodyText{
				font-size:1.10rem !important;
			}
			._descriptionText{
				font-size: 0.95rem !important
			}
			._whiteBodyText{
				font-size: 2.2rem !important;
			}
		}`
      }</style>
    </>
  );
}

export default withTrans(Welcome)