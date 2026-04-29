"use client"

import { fetchNews } from '@/lib/fetchNews';
import React, { useEffect, useState } from 'react'
import { Product } from './../../types/news';
import NewsCard from '../navbar/shared/NewsCard';

const NewsesList = () => {
  const [news, setNews] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");


  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews(category, search);
      setNews(data);
    }
    getNews();
  }, [category, search])

  console.log(news)
  return (
    <div>
      

      {/* News Card */}
      <div className=' grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {
          news.map((product) => (
            <NewsCard key={product.id} products={product}/>
          ))
        }
      </div>
    </div>
  )
}

export default NewsesList
