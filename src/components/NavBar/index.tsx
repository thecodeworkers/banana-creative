import React, { useState, useEffect, useRef } from 'react'
import { Logo, ToggleButton, BananaLogo } from '@images/components';
import navBarProps from './interface';
import { gsapMenuStart } from '../Menu/gsap';
import styles from './styles.module.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { unfoldMenu, changeToggle } from '@store/actions';
import { gsap } from 'gsap';
import { useRouter } from 'next/router';
import { parseHour, caracasParseHour } from '@utils';

const NavBar: React.FC<navBarProps> = (props) => {
  
	const router = useRouter();

	const { reference, action, toggle, theme, colorChange } = props;
	const [isDark, setIsDark] = useState(false);
  const [ currentHour, setCurrentHour ] = useState(caracasParseHour())

	const openMenu = () => {
		intToggle();
		gsapMenuStart();
		action.unfoldMenu(true);
	}

	useEffect(() => {
		if (toggle.toggle === 1) {
			gsap.timeline()
				.to(['#svg > g > path:nth-of-type(3)', '#svg > g > path:nth-of-type(2)', '#svg > g > path:nth-of-type(1)'], 0.5, { transform: 'scaleX(0)' })
		}

		if (toggle.toggle === 2) {
			gsap.timeline()
				.to('#svg > g > path:nth-of-type(1)', 0.3, { transform: 'scaleX(1)' })
				.to('#svg > g > path:nth-of-type(2)', 0.2, { transform: 'scaleX(1)' })
				.to('#svg > g > path:nth-of-type(3)', 0.1, { transform: 'scaleX(1)' })
		}

	}, [toggle.toggle])

	const outToggle = () => {
		gsap.timeline()
			.to('#svg > g > path:nth-of-type(3)', 0.3, { transform: 'scaleX(0)' })
			.to('#svg > g > path:nth-of-type(2)', 0.2, { transform: 'scaleX(0)' })
			.to('#svg > g > path:nth-of-type(1)', 0.1, { transform: 'scaleX(0)' })
			.eventCallback("onComplete", openMenu);
	}

	const intToggle = () => {
		gsap.timeline()
			.to(['#svg > g > path:nth-of-type(3)', '#svg > g > path:nth-of-type(2)', '#svg > g > path:nth-of-type(1)'], 0, { transform: 'scaleX(1)' }, 0.5)
	}

	const navigateToHome = () => {
		if (router.pathname != '/') router.push('/');
		action.unfoldMenu(false);
		action.changeToggle(3);
	};

  useEffect(() => {
    let interval = setInterval(getCurrentHour, 1000);

    return () => clearInterval(interval)
  }, [])

  const getCurrentHour = () => {
    const date = new Date();
    const timeZone =  date.toLocaleString('en-US', { timeZone: 'America/Caracas' })
    const caracasDate = new Date(timeZone)
    const parseDate = parseHour(caracasDate)
    setCurrentHour(parseDate)
  }

	return (
		<div className={`${styles._navBar} ${theme.theme && colorChange ? styles._dark : styles._ligth}`}>
			<div className={styles._rightContainer} >
				<div className={styles._logoParent} onClick={navigateToHome}>

					{
						!theme.theme
							? <BananaLogo />
							: <Logo firstColor={colorChange ? '#FFFFFF' : null} secondColor={colorChange ? '#FFFFFF' : null} />
					}

				</div>

			</div>


			<div className={styles._leftContainer} >
				<div className={styles._timeContainer} >

					<p className={styles._time}>Caracas</p>
					<p className={styles._time}>{currentHour}</p>
				</div>
				<div className={styles._navBarToggleWrapper} onClick={outToggle}>
					<ToggleButton className={styles._navBarToggle} />
				</div>

			</div>
		</div>
	)
}

const mapStateToProps = ({ menu, toggle, theme }) => ({ menu, toggle, theme });

const mapDispatchToProps = dispatch => {
	const actions = {
		unfoldMenu,
		changeToggle
	}

	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
