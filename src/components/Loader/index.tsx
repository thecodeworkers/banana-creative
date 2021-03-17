import React, { useEffect, createRef, useState } from 'react';
import styles from './styles.module.scss';
import lottie from 'lottie-web';
import animation from '../../../public/animations/BANANA_CREATIVE.json';
import { setLoader } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Props } from './type';

const Loader = ({ children, loader, action }: Props) => {

	const animationContainer: any = createRef();

	const [show, setShow] = useState(false);
	const [loaderClass, setloaderClass] = useState(styles._showLoader);
	const [hiddenClass] = useState(!loader.loader ? styles._hidden : styles._invisible);

	useEffect(() => {
		if (!loader.loader) {
			const anim = lottie.loadAnimation({
				container: animationContainer.current,
				renderer: "svg",
				loop: false,
				autoplay: true,
				animationData: animation
			});

			anim.addEventListener('complete', () => showContent());
			return () => anim.destroy();
		}

	}, []);

	const showContent = () => {
		setShow(true);
		setloaderClass(styles._hiddenLoader);
		action.setLoader(true);
	}

	return (
		<div>
			<div className={!show && !loader.loader ? styles._loading : hiddenClass}>
				<div className={!show && !loader.loader ? styles._lottie : hiddenClass}>
					<div className={`animation-container ${loaderClass}`} ref={animationContainer} ></div>
				</div>
			</div>
			{children}
		</div>
	)
}

const mapStateToProps = ({ loader }) => ({ loader });

const mapDispatchToProps = dispatch => {
	const actions = {
		setLoader
	}

	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);


