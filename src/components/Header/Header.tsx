import { useState } from 'react';
import Modal from 'react-modal';
import posterArtImg from '../../assets/POSTER-BOTAO.png';
import merchDesignImg from '../../assets/MERCH-BOTAO.png';
import albumArtworkImg from '../../assets/BOTOES.png';
import aboutMeImg from '../../assets/ABOUT-BOTAO.png';
import contactImg from '../../assets/CONTACT-BOTAO.png';
import styles from './Header.module.css';

Modal.setAppElement('#root');

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openModal = (modalName: string) => {
    setActiveModal(modalName);
    closeMenu();
  };

  const closeModal = () => {
    setActiveModal(null);
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
          <li onClick={() => openModal('posterArt')}>
            <img
              src={posterArtImg}
              alt="Poster Art"
              className={styles.imgPosterArt}
            />
          </li>
          <li onClick={() => openModal('merchDesign')}>
            <img
              src={merchDesignImg}
              alt="Merch Design"
              className={styles.imgMerchDesign}
            />
          </li>
          <li onClick={() => openModal('albumArtwork')}>
            <img
              src={albumArtworkImg}
              alt="Album Artwork"
              className={styles.imgAlbumArtwork}
            />
          </li>
          <li onClick={() => openModal('aboutMe')}>
            <img src={aboutMeImg} alt="About Me" className={styles.imgAbout} />
          </li>
          <li onClick={() => openModal('contact')}>
            <img src={contactImg} alt="Contact" className={styles.imgContact} />
          </li>
        </ul>
      </nav>

      <Modal
        isOpen={activeModal === 'posterArt'}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <button className={styles.modalCloseButton} onClick={closeModal}>
          &times;
        </button>
        <h2>POSTER ART</h2>
      </Modal>

      <Modal
        isOpen={activeModal === 'merchDesign'}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <button className={styles.modalCloseButton} onClick={closeModal}>
          &times;
        </button>
        <h2>MERCH DESIGN</h2>
      </Modal>

      <Modal
        isOpen={activeModal === 'albumArtwork'}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <button className={styles.modalCloseButton} onClick={closeModal}>
          &times;
        </button>
        <h2>ALBUM ARTWORK</h2>
        <p>Lorem Impsum</p>
      </Modal>

      <Modal
        isOpen={activeModal === 'aboutMe'}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <button className={styles.modalCloseButton} onClick={closeModal}>
          &times;
        </button>
        <h2>ABOUT ME</h2>
        <p>Lorem Impsum</p>
      </Modal>

      <Modal
        isOpen={activeModal === 'contact'}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <button className={styles.modalCloseButton} onClick={closeModal}>
          &times;
        </button>
        <h2>CONTACT</h2>
        <p>Lorem Impsum</p>
      </Modal>
    </header>
  );
}
