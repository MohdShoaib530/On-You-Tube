import { useEffect, useState } from "react";
import { fetchVideos } from "../services/api.js";
import { categories } from "../constants/categories.js";
import Categories from "../components/Categories.jsx";
import Filters from "../components/Filters.jsx";
import VideoCard from "../components/VideoCard.jsx";

function HomePage() {
  const [videos, setVideos] = useState([]);
  const [category, setCategory] = useState(null);
  const [language, setLanguage] = useState(null);
  const [orderBy, setOrderBy] = useState("3");
  const [publishedAtYear, setPublishedAtYear] = useState(null);
  const [channels, setChannels] = useState([
    "UCkuZJIhMYCnOa0dnWeHuN2w",
    "UCMgapddJymOC6MBOiOqia1A",
  ]);
  const languagesButton = [
    { label: "ALL", value: null },
    { label: "ENG", value: 1 },
    { label: "हिन्दी", value: 2 },
  ];
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
        console.log("error", error);
      }
    };

    fetchData();
  }, [category, language, orderBy, publishedAtYear, channels]);

  return (
    <div className="page flex flex-col mt-5">
      {/* Header */}
      <div className="flex items-center justify-between px-18 py-4 ">
        {/* Left Title */}
        <h1 className="text-3xl font-bold text-gray-800">On YouTube</h1>

        {/* Right Language Filters */}
        <div className="flex border rounded overflow-hidden">
          {languagesButton.map((lang, i) => (
            <button
              key={i}
              onClick={() => setLanguage(lang.value)}
              className={`px-4 py-2 text-sm font-medium cursor-pointer ${
                i !== 0 ? "border-l" : ""
              } ${
                language === lang.value
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <Categories
          categories={categories}
          category={category}
          setCategory={setCategory}
        />
      </div>

      {/* Filters */}
      <div>
        <Filters
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          setChannel={setChannels}
          setYear={setPublishedAtYear}
          year={publishedAtYear}
        />
      </div>

      {/* Video Grid */}
      <div
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 px-18"
      >
        {videos.slice(0, 50).map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
