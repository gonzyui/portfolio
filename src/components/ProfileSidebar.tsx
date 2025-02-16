import { SiGithub, SiBluesky, SiDiscord } from "react-icons/si";
import { useState, useEffect } from "react";
import "../styles/profileSidebar.scss";

interface GitHubUser {
    public_repos: number;
    followers: number;
    following: number;
}

const ProfileSidebar = () => {
    const [githubStats, setGithubStats] = useState<GitHubUser | null>(null);

    useEffect(() => {
        const fetchGithubStats = async () => {
            try {
                const response = await fetch("https://api.github.com/users/gonzyui");
                const data = await response.json();
                setGithubStats(data);
            } catch (error) {
                console.error("Error fetching GitHub stats:", error);
            }
        };

        fetchGithubStats();
    }, []);

    return (
        <aside className="profile-sidebar">
            <div className="profile-card">
                <img src="/bg.gif" alt="Avatar" className="avatar" />
                <h1>Gonzyui</h1>
                <p className="bio">
                    22yo, dev passionate | Always learning, always coding.
                </p>
                <ul className="profile-stats">
                    <li>
            <span className="stat-number">
              {githubStats ? githubStats.public_repos : "…"}
            </span>
                        <span className="stat-label">Repos</span>
                    </li>
                    <li>
            <span className="stat-number">
              {githubStats ? githubStats.followers : "…"}
            </span>
                        <span className="stat-label">Followers</span>
                    </li>
                    <li>
            <span className="stat-number">
              {githubStats ? githubStats.following : "…"}
            </span>
                        <span className="stat-label">Following</span>
                    </li>
                </ul>
                <div className="profile-links">
                    <a
                        href="https://github.com/gonzyui"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiGithub size={20} />
                    </a>
                    <a
                        href="https://bsky.app/profile/gonzyuidev.xyz"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiBluesky size={20} />
                    </a>
                    <a
                        href="https://discord.com/channels/users/1313488187330531399"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiDiscord size={20} />
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default ProfileSidebar;