import { useEffect, useState } from "react";
import styles from "./RepoList.module.css";
import { projects } from "../../data";

const RepoList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;
  const selectByLanguage = filter === "" ? data.projects : data.projects.filter(s => s.language === filter);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  function getImgUrl(language) {
    if (language === "Java") {
      return "https://raw.githubusercontent.com/umfrancisco/developer-portfolio-react/refs/heads/main/src/assets/java-icon.svg";
    }
    if (language === "JavaScript") {
      return "https://raw.githubusercontent.com/umfrancisco/developer-portfolio-react/refs/heads/main/src/assets/javascript-icon.svg";
    }
    if (language === "Go") {
      return "https://raw.githubusercontent.com/umfrancisco/developer-portfolio-react/refs/heads/main/src/assets/go-icon.svg";
    }
    if (language === "TypeScript") {
      return "https://raw.githubusercontent.com/umfrancisco/developer-portfolio-react/refs/heads/main/src/assets/typescript-icon.svg";
    }
    return "unknown";
  }

  if (loading) {
    return (
      <div className="container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className={styles.menu}>
        <h4 className={styles.title}>Selected Projects</h4>
        <div>
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="">All languages</option>
            <option value="Go">Go</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="TypeScript">TypeScript</option>
          </select>
        </div>
      </div>
      <ul className={styles.list}>
        {selectByLanguage.map((project) => (
          <li className={styles.listItem} key={project.name}>
            <img
              className={styles.langIcon}
              src={getImgUrl(project.language)}
              alt={project.language}
            />
            <div className={styles.repoContainer}>
              <div className={styles.itemName}>
                <b>Name:</b>
                {project.name}
              </div>
              <div className={styles.itemName}>
                <b>Description:</b>
                {project.description}
              </div>
              <div className={styles.itemLanguage}>
                <b>Language:</b>
                {project.language}
              </div>
            </div>
            <div className={styles.linkContainer}>
              <a className={styles.itemLink} href={project.link}>
                Visit project
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
