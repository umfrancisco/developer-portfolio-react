import styles from "./Profile.module.css";
import avavarImg from "../../assets/profile-linkedin.jpg";

function Profile({ githubUrl, linkedinUrl }) {
  return (
    <header className={styles["header"]}>
      <div className={styles["content"]}>
        <img className={styles["avatar"]} src={avavarImg}></img>
        <div>
          <h2>Francisco Guitler</h2>
          <h2>Full Stack Developer</h2>
          <h2>
            <a href={githubUrl}>Github</a>
          </h2>
          <h2 className={styles.title}>
            <a href={linkedinUrl}>Linkedin</a>
          </h2>
        </div>
      </div>
    </header>
  );
}

export default Profile;
