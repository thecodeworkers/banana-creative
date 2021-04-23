import React, { useState, useEffect, useRef } from 'react';
import { Welcome } from '@components';
import { Grid } from './elements'

const Portfolio = ({ content }) => {

  return (
    <div>
      <Welcome title='About us' component={false} />
      <Grid />
    </div>
  )
}

export default Portfolio;

