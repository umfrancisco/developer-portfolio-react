import { useEffect, useState } from "react";
import styles from './RepoList.module.css';

const RepoList = ({ username }) => {

    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.github.com/users/${username}/starred`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setIsLoading(false);
                setRepos(resJson);
            }, 1000);
        })
    }, [username])

    function getImgUrl(language) {
        if (language === "Java") {
            return "./src/assets/java-icon.svg";
        } else if (language === "JavaScript") {
            return "./src/assets/javascript-icon.svg";
        } else if (language === "Go") {
            return "./src/assets/go-icon.svg";
        } else {
            return "unknown";
        }
    }

    return (
        <div className="container">
            <h4 className={styles.title}>Selected Projects</h4>
            {isLoading ? (
                <h4 className={styles.title}>Loading...</h4>
            ) : (
                <ul className={styles.list}>
                    {repos.map(repository => (
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
                                <a className={styles.itemLink} target="_blank" href={repository.html_url}>Visit project</a>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default RepoList;