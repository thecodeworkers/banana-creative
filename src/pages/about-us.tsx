import React from 'react';
import { Welcome } from '../screens';
import { NavBar, Menu, Gallery } from '../components';

const AboutUs = () => {
	return (
		<>
		<NavBar colorChange={false}/>
		<Menu />
		
		<Welcome title='About us' component={false}/>
		<Gallery />
		{/* <Footer />  */}
		</>
	)
};

export default AboutUs;