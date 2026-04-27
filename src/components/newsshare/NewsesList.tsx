import { Product } from '@/types/news';
import React, { useEffect, useState } from 'react'

const NewsesList = () => {
  const [news, setNews] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");


  useEffect(() => {
    
  }, [])
  return (
    <div>
      News List
    </div>
  )
}

export default NewsesList
