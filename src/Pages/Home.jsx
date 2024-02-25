import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
        <Header />
        <div>
            <Blogs />
            <Pagination />
        </div>
    </div>
  )
}

export default Home