import { useState } from "react";
import "../styles/skills.scss";
import {
    SiReact,
    SiTypescript,
    SiNodedotjs,
    SiPostman,
    SiGithub,
    SiUbuntu,
    SiMongodb,
    SiDebian,
    SiGo,
    SiRedis,
    SiKotlin,
    SiSpigotmc,
    SiNextdotjs,
    SiFastify,
    SiSass,
    SiVite,
    SiWebstorm,
    SiIntellijidea,
    SiXcode,
    SiSwift, SiPostgresql,
} from "react-icons/si";

const skillsData = [
    { icon: <SiNodedotjs />, name: "Node.JS", color: "#43853d" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178c6" },
    { icon: <SiReact />, name: "React", color: "#61dafb" },
    { icon: <SiGithub />, name: "Git & GitHub", color: "#181717" },
    { icon: <SiUbuntu />, name: "Ubuntu", color: "#E95420" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiDebian />, name: "Debian", color: "#D70A53" },
    { icon: <SiPostgresql />, name: "SQL", color: "#4479A1" },
    { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
    { icon: <SiGo />, name: "Go", color: "#00ADD8" },
    { icon: <SiRedis />, name: "Redis", color: "#DC382D" },
    { icon: <SiKotlin />, name: "Kotlin", color: "#7F52FF" },
    { icon: <SiSpigotmc />, name: "Spigot", color: "#6699CC" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
    { icon: <SiFastify />, name: "Fastify", color: "#00b4a0" },
    { icon: <SiSass />, name: "SASS", color: "#CC6699" },
    { icon: <SiVite />, name: "Vite", color: "#646CFF" },
    { icon: <SiWebstorm />, name: "WebStorm", color: "#323330" },
    { icon: <SiIntellijidea />, name: "IntelliJ IDEA", color: "#000000" },
    { icon: <SiXcode />, name: "Xcode", color: "#007AFF" },
    { icon: <SiSwift />, name: "Swift", color: "#FA7343" },
];

const Skills = () => {
    const [showMore, setShowMore] = useState(false);
    const displayedSkills = showMore ? skillsData : skillsData.slice(0, 5);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <section className="skills">
            <h2>Skills</h2>
            <div className="skills-grid">
                {displayedSkills.map((skill, index) => (
                    <div key={index} className="skill">
                        <div className="skill-icon" style={{ color: skill.color }}>
                            {skill.icon}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
            {skillsData.length > 8 && (
                <div className="show-more">
                    <button onClick={toggleShowMore}>
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                </div>
            )}
        </section>
    );
};

export default Skills;
