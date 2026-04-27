
export const fetchNews = async (category: string ="", search: string ="") => {
  try {
    const url = search
      ? `https://dummyjson.com/products/search?q=${search}`
      : category
      ? `https://dummyjson.com/products/category/${category}`
      : `https://dummyjson.com/products`;

    const response = await fetch(url);
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error("Error fetching news data", error);
    return[]
  }
}