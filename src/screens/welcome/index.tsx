import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { gsapStart, gsapRetract, gsapExpand } from './gsap';
import { Arrow } from '../../components/Svg';
import { changeToggle, setAnimationState } from '../../store/actions';
import { useTranslation } from 'react-i18next';
import { withTrans } from '../../i18n/withTrans';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InlineStyles from './inline-styles';

const Welcome = (props) => {

	const { i18n } = useTranslation();
	const [language, setLanguage] = useState('en');
	const { loader, menu, t, action, title, toggle, component } = props;

	useEffect(() => {
		if (loader.loader && !loader.animation) gsapStart(action.setAnimationState(true));
	}, [loader]);

	useEffect(() => {
		if (loader.loader) {
			if (!menu.opened && toggle.toggle == 3) return;
			menu.opened ? gsapRetract() : gsapExpand(toggleDispatch);
		}
	}, [menu]);

	const toggleDispatch = () => action.changeToggle(2)

	const scrollToNextSection = () => {
		var i = 10;
		var int = setInterval(function () {
			window.scrollTo(0, i);
			i += 10;
			if (i >= document.documentElement.clientHeight) clearInterval(int);
		}, 20);
	}

	const changeLang = (event: any) => {
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
						<li className='_smallBodyText' id='text-1'>{t("concept")} </li>
						<li className='_smallBodyText' id='text-2'>{t("purpose")}</li>
						<li className='_smallBodyText' id='text-3'>{t("beauty")}</li>
						<li className='_smallBodyText' id='text-4'>{t("function")}</li>
						<li className='_smallBodyText' id='text-5'>{t("creation")}</li>
						<li className='_smallBodyText' id='text-6'>{t("innovation")}</li>
					</ul>
					<section className='_intermediate'>
						<div className='_target'>BRAND, MOGRAPH, MEDIA, SOCIAL PRODUCTIONS, PROTOTYPE</div>
						<div className='_targetRightContainer'>
							<div className='_targetRight'>Lorem ipsum serif avec iditium</div>
							<div className='_targetRight'>est. 17’</div>
						</div>
						<div className='_separator'></div>
					</section>
					<section className='_contact'>
						<button className='_languageButton' onClick={changeLang} value={language} >
							{(language == 'en' ? 'Español' : 'English')}
						</button>
						<div className='_contactText'>hello@bananadesign.io</div>
						<div className='_contactText'>+58 412 222 2222</div>
						<p className='_moreInfo'>
							Somos un estudio creativo enfocado en ofrecer soluciones de diseño a nivel de Branding, Diseño Web,
							Modelado 3D y Social Media. Trabajamos con innovadores que buscan mejorar el mundo a través de sus ideas y servicios.
					</p>
					</section>
					<div className='_arrow' onClick={scrollToNextSection}>
						<Arrow />
					</div>
					<section className='_description'>
						<div className='_descriptionText'>
							BananaDesign es un studio creative enfocado en generar soluciones de diseño lorem ipsum dolor sit amet,
							con sectetuer adipiscing elit. Aenean ligula eget dolor pretium, dolor sit.
          </div>
					</section>
				</div>
			</div>
			<InlineStyles />
		</>
	);
}

const mapStateToProps = ({ loader, menu, toggle }) => ({ loader, menu, toggle });

const mapDispatchToProps = dispatch => {
	const actions = {
		changeToggle,
		setAnimationState
	}

	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTrans(Welcome));
