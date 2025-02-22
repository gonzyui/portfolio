import { useState, useEffect } from "react";
import "../styles/pinnedProjects.scss";

interface Repo {
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
}

const languageColors: { [key: string]: string } = {
    JavaScript: "#f1e05a",
    TypeScript: "#2b7489",
};

const PinnedProjects = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const username = "gonzyui";
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const pinnedRepoNames = ["Actunime-RPC", "portfolio", "Discord-Template-V14", "Anime8-AI];

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                if (!response.ok) {
                    new Error("Error when trying to fetch repos.");
                }
                const data = await response.json();
                const pinnedRepos = data.filter((repo: Repo) =>
                    pinnedRepoNames.includes(repo.name)
                );
                setRepos(pinnedRepos);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchRepos();
    }, [pinnedRepoNames, username]);

    return (
        <section className="profile-content">
            <div className="pinned-repos">
                <h2>Pinned Projects</h2>
                <div className="repo-cards">
                    {repos.map((repo, index) => (
                        <div key={index} className="repo-card">
                            <a href={`https://github.com/gonzyuI/${repo.name}`} target="_blank">
                                <h3>{repo.name.toUpperCase()}</h3>
                            </a>
                            <p>{repo.description}</p>
                            <div className="repo-info">
                                {repo.language && (
                                    <span className="language">
                    <span
                        className="language-color"
                        style={{
                            backgroundColor: languageColors[repo.language] || "#000",
                        }}
                    ></span>
                                        {repo.language}
                  </span>
                                )}
                                <span className="stars">⭐ {repo.stargazers_count}</span>
                                <span className="forks">🍴 {repo.forks_count}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PinnedProjects;
