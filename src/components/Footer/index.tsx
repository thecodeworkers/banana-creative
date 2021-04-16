import React from 'react';
import styles from './styles.module.scss';
import { Logo } from '@images/components';

const Footer = () => {

    return (
        <div className={styles._footerContainer}>
            <div className={styles._footerContent}>
                <div className={styles._logoParent}>
                    <Logo firstColor='#FFFFFF' secondColor='#FFFFFF' />
                </div>

                <div className={styles._sectionsContainer}>

                    <div className={styles._sectionLeftContainer}>
                        <p>PORTFOLIO</p>
                        <p>ABOUT US</p>
                        <p>RECAP</p>
                        <p>RAW</p>
                    </div>

                    <div className={styles._sectionsRightContainer}>
                        <p style={{ marginBottom: 4 }}>Proyectos destacados</p>
                        <p style={{ marginBottom: 4 }} >Marcas Asociadas</p>
                        <p style={{ marginBottom: 4 }} >Classroom</p>
                    </div>
                </div>

                <div className={styles._footerLine}> </div>

                <div className={styles._footerTextContainer}>
                    <div className={styles._lh} >
                        <p className={styles._blackFooterText}>Contacto:</p>
                        <p className={`${styles._blackFooterText} ${styles._mt}`}>contact@bananadsg.com</p>
                        <p className={styles._blackFooterText}>+58 412 222 2222</p>
                    </div>
                    <div className={styles._lh} >
                        <p className={styles._blackFooterText}>Buscas trabajar con nosotros?</p>
                        <p className={`${styles._blackFooterText} ${styles._mb}`}>Escríbenos a:</p>
                        <p className={`${styles._blackFooterText} ${styles._mt}`}>work@bananadsg.com</p>
                    </div >
                    <div className={styles._lh} >
                        <p className={styles._blackFooterText}>No te pierdas de nada,</p>
                        <p className={`${styles._blackFooterText} ${styles._mb}`}>síguenos en:</p>
                        <p className={`${styles._blackFooterText} ${styles._mt}`}>@bananadesign_</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
