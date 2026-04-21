export default function VideoCard({ video }) {
  return (
    <div className="card">
      
      {/* Thumbnail */}
      <div className="thumbnail">
        <img src={video.thumbnail} alt={video.title} />
        
        {/* Duration */}
        <span className="duration">{video.duration}</span>
      </div>

      {/* Content */}
      <div className="content">
        <h3 className="title">{video.title}</h3>

        <p className="meta">
          {video.channelTitle}
        </p>

        <p className="meta">
          {video.views} views • {video.publishedTime}
        </p>

        {/* Tags */}
        <div className="tags">
          {video.tags?.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}