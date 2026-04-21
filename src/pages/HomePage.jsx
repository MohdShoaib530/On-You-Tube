import { useEffect, useState } from "react";
import { fetchVideos } from "../services/api.js";
import { categories } from "../constants/categories.js";

function HomePage() {
  const [videos, setVideos] = useState([]);
  const [category, setCategory] = useState(null);
  const [language, setLanguage] = useState(null);
  const [orderBy, setOrderBy] = useState(null);
  const [publishedAtYear, setPublishedAtYear] = useState(null);
  const [channels, setChannels] = useState(["UCkuZJIhMYCnOa0dnWeHuN2w", "UCMgapddJymOC6MBOiOqia1A"]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const videos = await fetchVideos({
          categoryId: category,
          channels: channels,
          language: language,
          orderBy: orderBy,
          publishedAtYear: publishedAtYear,
        });
        
        setVideos(videos);
        console.log("videos", videos);
      } catch (error) {
        console.log("error",error);
      }
    };

    fetchData();
  }, [category, language, orderBy, publishedAtYear, channels]);

  return (
    <div className="page flex flex-col">
      {/* Header */}
      <div className="header flex flex-row w-full justify-center">
        <h1 className="text-6xl">On YouTube</h1>

        <div className="lang-filter flex flex-row">
          <button onClick={() => setLanguage(null)}>ALL</button>
          <button onClick={() => setLanguage(1)}>ENG</button>
          <button onClick={() => setLanguage(2)}>हिंदी</button>
        </div>
      </div>

      {/* Categories */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat.label}
            className={category === cat.value ? "active" : ""}
            onClick={() => setCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={category === cat.value ? "active" : ""}
            onClick={() => setCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      {/* <div className="grid">
        {videos.slice(0, 50).map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div> */}
    </div>
  );
}

export default HomePage;
