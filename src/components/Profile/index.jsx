import styles from "./Profile.module.css";
import avavarImg from "../../assets/profile-linkedin.jpg";

function Profile({ githubUrl, linkedinUrl }) {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.avatar} src={avavarImg}></img>
        <h2 className={styles.title}>Francisco Guitler</h2>
        <h2 className={styles.title}>Full Stack Developer</h2>
        <h2 className={styles.title}>
          <a href={githubUrl}>Github</a>
        </h2>
        <h2 className={styles.title}>
          <a href={linkedinUrl}>Linkedin</a>
        </h2>
      </div>
    </header>
  );
}

export default Profile;
