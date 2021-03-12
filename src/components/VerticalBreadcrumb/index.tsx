import React, { useEffect } from "react";
import styles from './styles.module.scss';
import verticalBreadcrumbProps from './interface';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { gsap } from 'gsap';


const VerticalBreadcrumb: React.FC<verticalBreadcrumbProps> = ({ breadcrumb }) => {

	// const {text, color } = breadcrumb;
	const tl = gsap.timeline();

	// useEffect(() => {
	// 	tl.play();
	// 	tl.to('._breadCrumbtext', 1, { color });
	// }, [breadcrumb])

	return (
		<div className={styles._breadCrumbContainer}>
			<p className={styles._breadCrumbtext}>{'text'}</p>
		</div>
	)
}

const mapStateToProps = ({ breadcrumb }) => ({ breadcrumb });

const mapDispatchToProps = dispatch => {
	const actions = {
	}

	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(VerticalBreadcrumb);
