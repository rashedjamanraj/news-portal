import { Product } from '@/types/news';
import React, { useState } from 'react'

const NewsesList = () => {
  const [news, setNews] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  return (
    <div>
      News List
    </div>
  )
}

export default NewsesList
