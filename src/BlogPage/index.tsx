import React from 'react'
import BlogCard from '../BlogCard'
import './index.css'
export default function Blog() {
    return (
        <div className="">
            <div className="left__section">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
            <div className="right__section disable_on_small">
                Hallo World
            </div>
        </div>

    )
}
