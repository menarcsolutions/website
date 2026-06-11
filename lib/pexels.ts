export async function getPexelsImage(query: string): Promise<string> {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) {
    console.warn("PEXELS_API_KEY is not defined in environment variables. Falling back to default images.");
    return "";
  }

  try {
    // Fetch a single landscape orientation image matching the query
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
      {
        headers: {
          Authorization: apiKey,
        },
        next: { revalidate: 86400 }, // Cache the fetch for 24 hours
      }
    );

    if (!res.ok) {
      console.warn(`Pexels API responded with status ${res.status} for query: ${query}`);
      return "";
    }

    const data = await res.json();
    if (data.photos && data.photos.length > 0) {
      // Return a large version suitable for backdrops
      return data.photos[0].src.large2x || data.photos[0].src.large || "";
    }
  } catch (error) {
    console.error(`Error fetching image from Pexels for query "${query}":`, error);
  }

  return "";
}
