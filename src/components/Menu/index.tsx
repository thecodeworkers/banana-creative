import React, { useEffect } from 'react';
import { ToggleButton } from '@images/components';
import { gsapMenuStart, gsapMenuEnd } from './gsap'
import styles from './styles.module.scss';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { unfoldMenu, changeToggle } from '@store/actions';
import menuProps from './interface';
import { useRouter } from 'next/router';

const Menu: React.FC<menuProps> = (props) => {

    const { menu, action, reference } = props;
    const router = useRouter();

    const white = '#FFFFFF'
    const helvetica = 'HelveticaNeue';
    const blackie = '#323031'

    useEffect(() => {
        if (menu.opened) gsapMenuStart();
    }, [menu]);

    const closeMenu = () => {
        gsapMenuEnd();
        action.unfoldMenu(false);
        action.changeToggle(1);
    }

    const navigation = (route) => {
        if(router.pathname != '/about-us') router.push('/about-us');
        closeMenu();
        action.changeToggle(3);
        
    }

    const scrolling = (ref, path) => {
        if (ref) {
            const target = ref.current;
            window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
        }
        navigation(path);
    }

    return (
        <div className={'_sectionBlack'}>

            <div className={styles._mainDivContainer}>
                <div className={styles._blackHeader}>
                    <div className={'_blackHeaderHover'}></div>
                    <div>
                        <p className={styles._addressText}>Torre Iasa</p>
                        <p className={styles._addressText}>La Castellana</p>
                        <p className={styles._addressText}>Oficina 802</p>
                        <p className={styles._addressText}>Caracas 1060</p>
                    </div>
                    <div className={styles._icon} onClick={closeMenu}>
                        <ToggleButton fill={'#fff'} />
                    </div>
                </div>
                <div className={'_blackBody'}>
                    <span className={styles.vertical}> <p data-hover="Portfolio" className={styles._blackBodyText} onClick={() => navigation('/about-us')}>
                    Portfolio</p>
                    </span>
                    <span className={styles.vertical}> <p data-hover="About us" className={styles._blackBodyText}>About us</p> </span>
                    <span className={styles.vertical}> <p data-hover="Recap" className={styles._blackBodyText}>Recap</p> </span>


                </div>
                <div className={styles._blackBodyFooter} >
                    <div className={styles._linksContainer}>
                        <div className={'_blackBodyFooterHover'}></div>
                        <ul className={styles._blackBodyList}>
                            <li><a className={styles._blackBodyFooterText} onClick={() => scrolling(reference, '/')}>Proyectos Destacados</a></li>
                            <li><a className={styles._blackBodyFooterText}>Marcas Asociadas</a></li>
                            <li> <a className={styles._blackBodyFooterText}>Classroom</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles._blackFooter}>
                    <div className={'_blackFooterLine'}> </div>
                    <div className={styles._blackFooterContainer}>
                        <div className={'_blackFooterHover'}>   </div>
                        <div className={styles._lh} >
                            <p className={styles._blackFooterText}>Contacto:</p>
                            <p className={`${styles._blackFooterText}`} >hello@bananadesign.io</p>
                            <p className={styles._blackFooterText}>+58 424 187 2382</p>
                            <p className={styles._blackFooterText}>+58 423 837 8853</p>
                        </div>
                        <div className={styles._lh} >
                            <p className={styles._blackFooterText}>Buscas trabajar con nosotros?</p>
                            <p className={`${styles._blackFooterText} ${styles._mb}`}>Escríbenos a:</p>
                            <p className={`${styles._blackFooterText} ${styles._mt}`}>hello@bananacreative.io</p>
                        </div >
                        <div className={styles._lh} >
                            <p className={styles._blackFooterText}>No te pierdas de nada,</p>
                            <p className={`${styles._blackFooterText} ${styles._mb}`}>síguenos en:</p>
                            <p className={`${styles._blackFooterText} ${styles._mt}`}>@_bananacreative</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles._breadCrumbContainerOne}>
                <p className={'_breadCrumbtextOne'}>Menu</p>
            </div>

            <style jsx>{`
            ._sectionBlack {
            background-color: ${blackie};
            width: 60%;
            transform: translateX(100%);
            height: 100%;
            position: fixed;
            right: 0;
            top: 0;
            z-index: 999;
            display: flex;
            flex-direction: row;
            }

            ._breadCrumbtextOne{
            font-family: ${helvetica};
            writing-mode: vertical-lr;
            margin-bottom: 30px;
            margin-right: 30px;
            color: ${white};
            opacity: 0;
            transform: translate(30px) rotate(-180deg);
            }

            ._blackFooterLine {
            width: 0%;
            height: 1.5px;
            background-color: ${white};
            position: absolute;
            bottom: 20%;
            }

            ._blackFooterHover {
            position: absolute;
            background-color: ${blackie};
            width: 100%;
            height: 160%;
            z-index: 1;
            bottom: 0%;
            }

            ._blackHeaderHover {
            position: absolute;
            background-color: ${blackie};
            width: 100%;
            height: 10vh;
            z-index: 1;
            }

            ._blackBodyFooterHover {
            position: absolute;
            background-color: ${blackie};
            width: 100%;
            height: 100%;
            z-index: 1;
            }

            ._blackBody {
            height: 45%;
            flex-direction: column;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            color: ${white};
            opacity: 0;
            margin-right: 5%;
            }  
        `}</style>
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
