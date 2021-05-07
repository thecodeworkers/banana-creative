import React from 'react';
import { NavBar, Menu, Welcome, Gallery, Footer } from '@components';

const AboutUs = () => {

  return (
    <div >
      <NavBar colorChange={false} />
      <Menu />
      <Welcome title='About us' component={false} />
      <Gallery />
      <Footer />
    </div>
  )
}

export default AboutUs;

