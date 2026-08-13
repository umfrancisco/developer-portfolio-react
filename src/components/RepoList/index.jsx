import { useEffect, useState } from "react";
import styles from './RepoList.module.css';

const RepoList = () => {

    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://staging-repo-projects-api-r77i.encr.app/projects`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setIsLoading(false);
                setRepos(resJson);
            }, 1000);
        })
    }, [])

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
            {isLoading ? (
                <p className={styles.title}>Loading...</p>
            ) : (
                <ul className={styles.list}>
                    {repos.projects.map(repository => (
                        <li className={styles.listItem} key={repository.id}>
                            <img className={styles.langIcon} src={getImgUrl(repository.language)} alt={repository.language} />
                            <div className={styles.repoContainer}>
                                <div className={styles.itemName}>
                                    <b>Name:</b>{repository.name}
                                </div>
                                <div className={styles.itemName}>
                                    <b>Description:</b>{repository.description}
                                </div>
                                <div className={styles.itemLanguage}>
                                    <b>Language:</b>{repository.language}
                                </div>
                            </div>
                            <div className={styles.linkContainer}>
                                <a className={styles.itemLink} href={repository.link}>Visit project</a>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default RepoList;