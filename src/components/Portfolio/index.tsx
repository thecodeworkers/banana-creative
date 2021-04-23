import React, { useState, useEffect, useRef } from 'react';
import { Welcome, NavBar, Menu  } from '@components';
import { Grid } from './elements'

const Portfolio = ({ content }) => {

  return (
    <div>
      <NavBar />
      <Menu />
      <Welcome title='About us' component={false} />
      <Grid />
    </div>
  )
}

export default Portfolio;

