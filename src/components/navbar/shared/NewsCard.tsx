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
      <Link href={"/"}>
        <Image src={newsImage} alt='news image' className=' mb-5 md:h-56 rounded hover:scale-104 cursor-pointer transition-all duration-200'/>
      </Link>

      <div>
        <h2 className=' text-xl font-semibold my-3'>Provide energy for the body. There are three kinds of carbohydrates: sugar, starch, and fibre.</h2>
        <p className='mb-4'>Iodine is for the thyroid gland (in the neck area), which regulates growth and many body functions</p>
        <Link href={"/"}>
          <Button variant="default">Read More</Button>
        </Link>
      </div>
      </div>

    </div>
  )
}

export default NewsCard
