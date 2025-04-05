const PEXELS_API_KEY = '';

export async function searchPexelsImage(query: string) {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }
    
    const data = await response.json();
    return data.photos[0]?.src?.large || null;
  } catch (error) {
    console.error('Error fetching Pexels image:', error);
    return null;
  }
} 