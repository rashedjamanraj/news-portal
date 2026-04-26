import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import newsImage from "@/assests/banner.jpg"
import { Button } from '@/components/ui/button'
import { NewsCardProps } from '@/types/news'


const NewsCard = ({products}: NewsCardProps) => {
  return (
    <div className='px-1 md:px-20"'>
      <div className=' border p-4 rounded-md shadow-md'>
      <Link href={`/news/${products?.id}`}>
        <Image 
  src={products?.thumbnail || products?.images?.[0]} 
  alt={products?.title || "Product image"} 
  width={500} 
  height={300} 
  className="mb-5 md:h-56 rounded hover:scale-104 cursor-pointer transition-all duration-200"
/>
      </Link>

      <div>
        <h2 className='truncate text-xl font-semibold my-3'> {products?.title} </h2>
        <p className='mb-4 line-clamp-4'>{products?.description}</p>
        <Link href={"/"}>
          <Button variant="default">Read More</Button>
        </Link>
      </div>
      </div>

    </div>
  )
}

export default NewsCard
