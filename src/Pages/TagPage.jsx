import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);

    return (
        <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
            <Header />
            <div>
                <div>
                    <button onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2>
                    Blog Tagged <span>#{tag}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}

export default TagPage