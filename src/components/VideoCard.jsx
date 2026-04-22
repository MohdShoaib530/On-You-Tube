export default function VideoCard({ video }) {
  return (
    <div className="w-full">
      {/* 🔥 Mobile Layout (< md) */}
      <div className="flex gap-3 md:hidden">
        {/* Thumbnail */}
        <div className="relative w-40 h-24 shrink-0 overflow-hidden rounded-md">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />

          <span className="absolute bottom-1 right-1 bg-black/80 text-gray-300 text-xs px-1 py-0.5 rounded">
            {video.duration}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-medium leading-snug line-clamp-2">
              {video.title}
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              {video.channel}
            </p>

            <p className="text-xs text-gray-500">
              {video.views} • {video.timeAgo}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-1">
            {video.tags?.slice(0, 2).map((tag, i) => (
              <span
                key={i}
                className="text-[10px] bg-[#eceff1] px-1.5 py-0.5 rounded text-[#797677]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 🔥 Desktop Layout (≥ md) */}
      <div className="hidden md:block">
        {/* Thumbnail */}
        <div className="relative w-full aspect-video overflow-hidden rounded-lg">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />

          <span className="text-sm font-semibold absolute bottom-1 right-1 bg-black/80 text-gray-300 px-1.5 py-0.5 rounded">
            {video.duration}
          </span>
        </div>

        {/* Content */}
        <div className="mt-2 space-y-1">
          <h3 className="text-base font-medium leading-snug line-clamp-2">
            {video.title}
          </h3>

          <p className="text-sm text-gray-500">{video.channel}</p>

          <p className="text-[13px] text-gray-500">
            {video.views} • {video.timeAgo}
          </p>

          <div className="flex flex-wrap gap-1 mt-1">
            {video.tags?.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-[#eceff1] px-2 py-0.5 rounded text-[#797677]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}