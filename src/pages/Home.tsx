import DonationPopup from "../components/Popup.tsx";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer.tsx";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "./home.scss";

import {
    SiDebian, SiFastify, SiIntellijidea, SiKotlin, SiMongodb,
    SiMysql, SiNextdotjs, SiPostman, SiRedis, SiSass,
    SiSpigotmc, SiSwift, SiTypescript, SiUbuntu, SiVite,
    SiWebstorm, SiXcode, SiBluesky, SiDiscord, SiGithub,
    SiNodedotjs, SiReact
} from "react-icons/si";

interface User {
    followers: number;
}

function Home() {
    const [user, setUser] = useState<User | null>(null);
    const [repos, setRepos] = useState<never[]>([]);
    const [commits, setCommits] = useState<number>(0);

    useEffect(() => {
        const fetchGithubStats = async () => {
            try {
                const [userRes, reposRes, eventsRes] = await Promise.all([
                    fetch("https://api.github.com/users/gonzyui"),
                    fetch("https://api.github.com/users/gonzyui/repos"),
                    fetch("https://api.github.com/users/gonzyui/events"),
                ]);

                const [userData, reposData, eventsData] = await Promise.all([
                    userRes.json(), reposRes.json(), eventsRes.json(),
                ]);

                setUser(userData);
                setRepos(reposData);

                const commitCount = eventsData
                    .filter((event: { type: string }) => event.type === "PushEvent")
                    .reduce((total: number, event: { payload: { commits: string | never[] } }) => total + event.payload.commits.length, 0);

                setCommits(commitCount);
            } catch (error) {
                console.error("GitHub API Error:", error);
            }
        };

        fetchGithubStats();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div className="home-container">
            <section className="profile">
                <div className="profile-header">
                    <div className="profile-banner">
                        <img src="/banner.jpg" alt="Banner" className="banner-img" />
                    </div>
                    <div className="profile-pic-wrapper">
                        <img src="/bg.gif" alt="Gonzyui" className="profile-pic" />
                    </div>
                    <div className="profile-info">
                        <h1>Gonzyui</h1>
                        <p className="bio">22yo, passionate developer | Learning is life</p>
                        <div className="socials">
                            <a href="https://github.com/gonzyui" target="_blank"><SiGithub /></a>
                            <a href="https://bsky.app/profile/gonzyuidev.xyz" target="_blank"><SiBluesky /></a>
                            <a href="https://discord.com/channels/users/1313488187330531399" target="_blank"><SiDiscord /></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="stats">
                {[
                    { label: "Repositories", value: repos.length },
                    { label: "Commits", value: commits },
                    { label: "Followers", value: user?.followers },
                ].map(({ label, value }) => (
                    <div className="stat-box" key={label}>
                        <h3>{value ?? "GitHub API Error"}</h3>
                        <p>{label}</p>
                    </div>
                ))}
            </section>

            <section className="skills">
                <h2>Skills</h2>
                <Slider {...settings}>
                    {[
                        { icon: <SiNodedotjs />, name: "Node.JS" },
                        { icon: <SiTypescript />, name: "TypeScript" },
                        { icon: <SiReact />, name: "React" },
                        { icon: <SiGithub />, name: "Git & GitHub" },
                        { icon: <SiUbuntu />, name: "Ubuntu" },
                        { icon: <SiMongodb />, name: "MongoDB" },
                        { icon: <SiDebian />, name: "Debian" },
                        { icon: <SiMysql />, name: "SQL" },
                        { icon: <SiPostman />, name: "Postman" },
                        { icon: <SiRedis />, name: "Redis" },
                        { icon: <SiKotlin />, name: "Kotlin" },
                        { icon: <SiSpigotmc />, name: "Spigot" },
                        { icon: <SiNextdotjs />, name: "Next.js" },
                        { icon: <SiFastify />, name: "Fastify" },
                        { icon: <SiSass />, name: "SASS" },
                        { icon: <SiVite />, name: "Vite" },
                        { icon: <SiWebstorm />, name: "WebStorm" },
                        { icon: <SiIntellijidea />, name: "IntelliJ IDEA" },
                        { icon: <SiXcode />, name: "Xcode" },
                        { icon: <SiSwift />, name: "Swift" },
                        { name: "Java" },
                    ].map(({ icon, name }) => (
                        <div className="skill" key={name}>{icon} {name}</div>
                    ))}
                </Slider>
            </section>

            <section className="projects">
                <h2>Projects</h2>
                <div className="projects-container">
                    {[
                        {
                            name: "Niji-Chan",
                            description: "Niji-Chan is a discord bot that sends alerts on episode hiring.",
                            link: "https://nijichan.xyz",
                            languages: ["Typescript", "Redis", "MongoDB"],
                        },
                        {
                            name: "Portfolio",
                            description: "My portfolio made using React with Vite. Simple one-page, maybe more soon.",
                            link: "https://gonzyuidev.xyz",
                            languages: ["TypeScript", "Vite", "React", "Sass"],
                        },
                        {
                            name: "Dofus API Wrapper",
                            description: "An easy-to-use wrapper for the Dofus API.",
                            link: "https://github.com/gonzyui/dofus-api-wrapper",
                            languages: ["TypeScript"],
                        },
                        {
                            name: "Nova-API",
                            description: "Nova is an unofficial Anilist API.",
                            link: "https://github.com/gonzyui/nova-api",
                            languages: ["Go", "Redis"],
                        }
                    ].map(({ name, description, link, languages }) => (
                        <div className="project-card" key={name}>
                            <div className="project-languages">
                                {languages.map((lang) => <span className="lang" key={lang}>{lang}</span>)}
                            </div>
                            <h3>{name}</h3>
                            <p>{description}</p>
                            <a href={link} target="_blank" className="project-link">View Project</a>
                        </div>
                    ))}
                </div>
            </section>

            <DonationPopup />
            <Footer />
        </div>
    );
}

export default Home;
