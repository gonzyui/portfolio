import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "../styles/anime.scss";

interface AnimeEntry {
    id: number;
    title: {
        romaji: string;
        english?: string;
    };
    coverImage: {
        large: string;
    };
    episodes?: number;
}

interface MediaListEntry {
    updatedAt: number;
    progress: number;
    media: AnimeEntry;
}

const Anime = () => {
    const [animeEntries, setAnimeEntries] = useState<MediaListEntry[]>([]);
    const username = "gonzyui";

    useEffect(() => {
        const fetchAnime = async () => {
            const query = `
        query ($userName: String) {
          MediaListCollection(userName: $userName, type: ANIME, status_in: [CURRENT, COMPLETED]) {
            lists {
              entries {
                updatedAt
                progress
                media {
                  id
                  title {
                    romaji
                    english
                  }
                  coverImage {
                    large
                  }
                  episodes
                }
              }
            }
          }
        }
      `;
            const variables = { userName: username };

            try {
                const response = await fetch("https://graphql.anilist.co", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({ query, variables }),
                });
                const json = await response.json();
                if (json.data && json.data.MediaListCollection) {
                    const lists = json.data.MediaListCollection.lists;
                    let entries: MediaListEntry[] = [];
                    lists.forEach((list: { entries: ConcatArray<MediaListEntry>; }) => {
                        entries = entries.concat(list.entries);
                    });
                    entries.sort((a, b) => b.updatedAt - a.updatedAt);
                    setAnimeEntries(entries.slice(0, 5));
                }
            } catch (error) {
                console.error("Error fetching data from Anilist:", error);
            }
        };

        fetchAnime();
    }, [username]);

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section className="anime">
            <h2>Latest Episodes Watched</h2>
            <Slider {...settings}>
                {animeEntries.map((entry) => (
                    <div key={entry.media.id} className="anime-card">
                        <img
                            src={entry.media.coverImage.large}
                            alt={entry.media.title.romaji}
                        />
                        <div className="anime-info">
                            <h3>{entry.media.title.romaji}</h3>
                            <p>
                                Episode {entry.progress}
                                {entry.media.episodes ? ` / ${entry.media.episodes}` : ""}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Anime;