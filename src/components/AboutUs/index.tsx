import React, { useState, useEffect, useRef } from 'react';
import { NavBar, Menu, Welcome, Gallery, Footer } from '@components';

const AboutUs = ({content}) => {

  return (
    <div >
      <NavBar colorChange={false} />
      <Menu />
      <Welcome title='About us' component={false} background={'#231F20'} />
      <Gallery />
      <Footer />
    </div>
  )
}

export default AboutUs;

