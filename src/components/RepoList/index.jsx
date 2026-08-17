import { useEffect, useState } from "react";
import styles from './RepoList.module.css';
import { projects } from "../../data";

const RepoList = () => {

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

    return (
        <div className="container">
            <h4 className={styles.title}>Selected Projects</h4>
            <ul className={styles.list}>
                {projects.map(project => (
                    <li className={styles.listItem} key={project.id}>
                        <img className={styles.langIcon} src={getImgUrl(project.language)} alt={project.language} />
                        <div className={styles.repoContainer}>
                            <div className={styles.itemName}>
                                <b>Name:</b>{project.name}
                            </div>
                            <div className={styles.itemName}>
                                <b>Description:</b>{project.description}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Language:</b>{project.language}
                            </div>
                        </div>
                        <div className={styles.linkContainer}>
                            <a className={styles.itemLink} href={project.link}>Visit project</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RepoList;