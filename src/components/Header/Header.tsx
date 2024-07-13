import posterArtImg from '../../assets/POSTER-BOTAO.png';
import merchDesignImg from '../../assets/MERCH-BOTAO.png';
import albumArtworkImg from '../../assets/BOTOES.png';
import abooutMeImg from '../../assets/ABOUT-BOTAO.png';
import contactImg from '../../assets/CONTACT-BOTAO.png';

import { useState } from 'react';
import styles from './Header.module.css';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <div className={`${styles.bar} ${isOpen ? styles.open : ''}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.open : ''}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.open : ''}`}></div>
        </div>
        <ul
          className={`${styles.menu} ${
            isOpen ? styles.openMenu : styles.closeMenu
          }`}
        >
          <li>
            <img src={posterArtImg} alt="" className={styles.imgMenu} />
          </li>
          <li>
            <img src={merchDesignImg} alt="" className={styles.imgMenu} />
          </li>
          <li>
            <img src={albumArtworkImg} alt="" className={styles.imgMenu} />
          </li>
          <li>
            <img src={abooutMeImg} alt="" className={styles.imgMenu} />
          </li>
          <li>
            <img src={contactImg} alt="" className={styles.imgMenu} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
