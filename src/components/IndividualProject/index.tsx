import React, { useState, useEffect, useRef } from 'react';
import { NavBar, Menu, Footer } from '@components';
import { FirstBanner, SecondBanner, ThirdBanner } from './elements';
import styles from './styles.module.scss';

const IndividualProject = ({content}) => {

  return (
    <div >
      <NavBar colorChange={false} />
      <Menu />
      <div className={styles._scrollingWrapper}>
        <div className={styles._cardCarrousel} >
        <FirstBanner/>
        </div>
        <div className={styles._cardCarrousel}  >
        <SecondBanner/>
        </div>
        <div className={styles._cardCarrousel}  >
        <ThirdBanner/>
        </div>
  
  
    </div>

    </div>
  )
}

export default IndividualProject;

