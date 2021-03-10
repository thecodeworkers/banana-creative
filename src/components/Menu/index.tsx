import React, { useEffect } from "react";
import { ToggleButton } from './../../assets/img';
import { gsapMenuStart, gsapMenuEnd } from './gsap'
import './style.scss';
import { navigate } from "gatsby"
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { unfoldMenu, changeToggle } from '../../store/actions';

const Menu = (props) => {

	const { menu, action, reference } = props;

	useEffect(() => {
		if (menu.opened) gsapMenuStart();
	}, [menu]);

	const closeMenu = () => {
		gsapMenuEnd();
		action.unfoldMenu(false);
		action.changeToggle(1);
	}

	const navigation = (route) => {
		const path = window.location.href;
		const splitPath = path.split('/');
		navigate(route);
		if (`/${splitPath[3]}` != route) closeMenu();
		action.changeToggle(3);
	}

	const scrolling = (ref, path) => {
    if(ref) {
      const target = ref.current;
      window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
		}
		navigation(path);
  }

	return (
		<div className={'_sectionBlack'}>

			<div className='_mainDivContainer'>
				<div className={'_blackHeader'}>
					<div className={'_blackHeaderHover'}></div>
					<div>
						<p className={'_addressText'}>Torre Iasa</p>
						<p className={'_addressText'}>La Castellana</p>
						<p className={'_addressText'}>Oficina 802</p>
						<p className={'_addressText'}>Caracas 1060</p>
					</div>
					<div className={'_icon'} onClick={closeMenu}>
						<ToggleButton fill={'#fff'} />
					</div>
				</div>
				<div className={'_blackBody'}>

					{/* <span style={{marginRight:150}} className={'vertical'}> <p data-hover="PORTFOLIO" className={'_blackBodyText'}>PORTFOLIO</p> </span> */}

					<span style={{ marginRight: 75 }} className={'vertical'}> <p data-hover="ABOUT US" className={'_blackBodyText'} onClick={() => navigation('/about-us')}>
						ABOUT US </p>
					</span>
					<span style={{ marginRight: 55 }} className={'vertical'}> <p data-hover="RECAP" className={'_blackBodyText'}>RECAP</p> </span>
					<span style={{ marginRight: 40 }} className={'vertical'}> <p data-hover="RAW" className={'_blackBodyText'}>RAW</p> </span>


				</div>
				<div className={'_blackBodyFooter'} >
					<div className={'_linksContainer'} style={{ display: 'block', marginLeft: 'auto', position: 'relative' }}>
						<div className={'_blackBodyFooterHover'}></div>
						<ul style={{ width: '100%', listStyle: 'none', position: 'relative' }}>
							<li><a className={'_blackBodyFooterText'} onClick={() => scrolling(reference, '/')}>Proyectos Destacados</a></li>
							<li><a className={'_blackBodyFooterText'} >Marcas Asociadas</a></li>
							<li> <a className={'_blackBodyFooterText'} >Classroom</a></li>
						</ul>
					</div>
				</div>
				<div className={'_blackFooter'}>
					<div className='_blackFooterLine'> </div>
					<div className={'_blackFooterContainer'}>
						<div className={'_blackFooterHover'}>	</div>
						<div className={'_lh'} >
							<p className={'_blackFooterText'}>Contacto:</p>
							<p className={'_blackFooterText _mt '}>hello@bananadesign.io</p>
							<p className={'_blackFooterText '}>+58 412 222 2222</p>
						</div>
						<div className={'_lh'} >
							<p className={'_blackFooterText '}>Buscas trabajar con nosotros?</p>
							<p className={'_blackFooterText _mb'}>Escríbenos a:</p>
							<p className={'_blackFooterText _mt'}>work@bananadsg.com</p>
						</div >
						<div className={'_lh'} >
							<p className={'_blackFooterText '}>No te pierdas de nada,</p>
							<p className={'_blackFooterText _mb '}>síguenos en:</p>
							<p className={'_blackFooterText _mt'}>@bananadesign_</p>
						</div>
					</div>
				</div>
			</div>

			<div className={'_breadCrumbContainerOne'}>
				<p className='_breadCrumbtextOne'>Menu</p>
			</div>
		</div>
	)
}

const mapStateToProps = ({ menu }) => ({ menu });

const mapDispatchToProps = dispatch => {
	const actions = {
		unfoldMenu,
		changeToggle
	}

	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
