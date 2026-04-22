import config from '../config/config.js'
export const fetchVideos = async (params) => {
  const query = new URLSearchParams();

  if (params.categoryId) query.append("categoryId", params.categoryId);
  if (params.language) query.append("language", params.language);
  if (params.orderBy) query.append("orderBy", params.orderBy);
  if (params.publishedAtYear)
    query.append("publishedAtYear", params.publishedAtYear);

  params.channels?.forEach((ch) => query.append("channels", ch));

  const res = await fetch(
    `${config.backendUrl}?${query.toString()}`,

  );

  const data = await res.json();
  return data;
};
