export default function VideoCard({ video }) {
  return (
    <div className="w-full max-w-sm">
      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />

        {/* Duration */}
        <span className="text-sm font-semibold absolute bottom-1 right-1 bg-black/80 text-gray-300  px-1.5 py-0.5 rounded">
          {video.duration}
        </span>
      </div>

      {/* Content */}
      <div className="mt-2 space-y-1.2">
        {/* Title */}
        <h3 className="text-base font-medium leading-snug line-clamp-2">
          {video.title}
        </h3>

        {/* Channel */}
        <p className="text-sm text-gray-500">{video.channel}</p>

        {/* Views + Time */}
        <p className="text-[13px]  text-gray-500 ">
          {video.views} • {video.timeAgo}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-1">
          {video.tags?.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="font-semibold text-xs bg-[#eceff1] px-2 py-0.5 rounded text-[#797677]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
