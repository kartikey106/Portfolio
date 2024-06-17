import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; Made by Kartikey Singhal in 2024. <br />
        Thanks for making it till last.
      </p>
    </section>
  );
}

export default Footer;