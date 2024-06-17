import styles from './ProjectsStyles.module.css';
import cryp_pro from '../../assets/Cryp-pro.png';
import portfolio from '../../assets/portfolio.jpg';
import car from '../../assets/car.png';
import games from '../../assets/games.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={cryp_pro}
          link="https://github.com/kartikey106/Cryp-pro"
          h3="Cryp-Pro(under progress)"
          p="Crypto-tracker WebApp"
        />
        <ProjectCard
          src={portfolio}
          link="https://github.com/kartikey106/Portfolio"
          h3="Portfolio"
          p="Website"
        />
        <ProjectCard
          src={car}
          link="https://youtu.be/UeK0XDNgYf8"
          h3="Car Parking System"
          p="using Arduino"
        />
        <ProjectCard
          src={games}
          link="https://github.com/kartikey106/Encryptix"
          h3="DSA Projects"
          p="Console based games"
        />
      </div>
    </section>
  );
}

export default Projects;