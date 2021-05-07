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

  const { menu, action, reference, resource: { general } } = props;

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
    if (router.pathname != '/about-us') router.push('/about-us');
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
            {general?.generals?.address.split(',').map((textAddress, index) => <p key={index} className={styles._addressText}>{textAddress}</p>)}
          </div>
          <div className={styles._icon} onClick={closeMenu}>
            <ToggleButton fill={'#fff'} />
          </div>
        </div>
        <div className={'_blackBody'}>
          {(general?.generals?.navigations) ? general.generals.navigations.slice(0, 3).map((nav, index) => {
            return (
              <span className={styles.vertical} key={index}>
                <p data-hover={nav.route} className={styles._blackBodyText} onClick={() => navigation(`/${nav.route.toLowerCase().replaceAll(' ', '-')}`)}>
                  {nav.route}
                </p>
              </span>
            )
          }) : null}
        </div>
        <div className={styles._blackBodyFooter} >
          <div className={styles._linksContainer}>
            <div className={'_blackBodyFooterHover'}></div>
            <ul className={styles._blackBodyList}>
              {(general?.generals?.navigations) ? general.generals.navigations.slice(3, 6).map((nav, index) =>
              (
                <li key={index}>
                  <a className={styles._blackBodyFooterText} onClick={() => scrolling(reference, '/')}>
                    {nav.route}
                  </a>
                </li>
              )) : null
              }
            </ul>
          </div>
        </div>
        <div className={styles._blackFooter}>
          <div className={'_blackFooterLine'}> </div>
          <div className={styles._blackFooterContainer}>
            <div className={'_blackFooterHover'}>   </div>
            <div className={styles._lh} >
              <p className={styles._blackFooterText}>Contacto:</p>
              <p className={`${styles._blackFooterText}`} >{general?.generals?.email}</p>
              <p className={styles._blackFooterText}>{general?.generals?.phoneOne}</p>
              <p className={styles._blackFooterText}>{general?.generals?.phoneTwo}</p>
            </div>
            <div className={styles._lh} >
              <p className={styles._blackFooterText}>Buscas trabajar con nosotros?</p>
              <p className={`${styles._blackFooterText} ${styles._mb}`}>Escríbenos a:</p>
              <p className={`${styles._blackFooterText} ${styles._mt}`}>{general?.generals?.email}</p>
            </div >
            <div className={styles._lh} >
              <p className={styles._blackFooterText}>No te pierdas de nada,</p>
              <p className={`${styles._blackFooterText} ${styles._mb}`}>síguenos en:</p>
              <p className={`${styles._blackFooterText} ${styles._mt}`}>{general?.generals?.insta}</p>
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

const mapStateToProps = ({ menu, resource }) => ({ menu, resource });

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
