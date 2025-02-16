import ProfileSidebar from "../components/ProfileSidebar";
import PinnedProjects from "../components/PinnedProjects";
import Skills from "../components/Skills.tsx";
import Anime from "../components/Anime.tsx";
import Footer from "../components/Footer";
import "../styles/home.scss";
import Popup from "../components/Popup.tsx";

const Home = () => {
    return (
        <div className="github-profile">
            <div className="profile-main">
                <ProfileSidebar />
                <div className="main-content">
                    <PinnedProjects />
                </div>
            </div>
            <Skills />
            <Anime />
            <Popup />
            <Footer />
        </div>
    );
};

export default Home;
