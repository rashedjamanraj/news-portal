"use client"

import { fetchNews } from '@/lib/fetchNews';
import { Product } from '@/types/news';
import React, { useEffect, useState } from 'react'

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

  
  return (
    <div>
      News List
    </div>
  )
}

export default NewsesList
