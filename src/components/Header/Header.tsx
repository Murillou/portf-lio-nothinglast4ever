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

  const closeMenu = () => {
    setIsOpen(false);
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
          <button className={styles.closeButton} onClick={closeMenu}>
            &times;
          </button>
          <li>
            <img
              src={posterArtImg}
              alt="Poster Art"
              className={styles.imgPosterArt}
            />
          </li>
          <li>
            <img
              src={merchDesignImg}
              alt="Merch Design"
              className={styles.imgMerchDesign}
            />
          </li>
          <li>
            <img
              src={albumArtworkImg}
              alt="Album Artwork"
              className={styles.imgAlbumArtwork}
            />
          </li>
          <li>
            <img src={abooutMeImg} alt="About Me" className={styles.imgAbout} />
          </li>
          <li>
            <img src={contactImg} alt="Contact" className={styles.imgContact} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
