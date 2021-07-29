import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import verticalBreadcrumbProps from './interface';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { gsap } from 'gsap';
import { useSelector } from 'react-redux'

const VerticalBreadcrumb: React.FC<verticalBreadcrumbProps> = () => {

  const { breadcrumb } = useSelector((state: any) => state)
  const { text, color } = breadcrumb;

	const tl = gsap.timeline();

	const blue = '#0853DC'
	const helvetica = 'HelveticaNeue';

	useEffect(() => {
		tl.play();
		tl.to('._breadCrumbtext', 1, { color: color });
	}, [breadcrumb])

	return (
		<>
			<div className={styles._breadCrumbContainer}>
				<p className='_breadCrumbtext'>{text}</p>
			</div>
			<style jsx> {`
			._breadCrumbtext{
				font-family: ${helvetica};
				transform: rotate(-180deg);
				writing-mode: vertical-lr;
				margin-bottom: 30px;
				margin-right: 30px;
				color: ${blue};
				position: fixed;
				position: fixed;
				right: 0;
				z-index: 998;
				bottom: 1vh;
				font-weight: 600;
			}
						
			}`
			}</style>
		</>
	)
}

export default VerticalBreadcrumb