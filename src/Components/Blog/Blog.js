import React from 'react'
import { Button, Grid } from '@material-ui/core';

import BlogCard from './BlogCard'
import './Blog.css'

const blogs = [
    {
        id: 1,
        title: 'Instagram phishing using Hiddeneye',
        date: 'August 03, 2020',
        img: 'https://1.bp.blogspot.com/-EKJWTt3m85s/XygIrqmgKKI/AAAAAAAAB4g/pE3KwEQ2IlsmXeY78D3C1jWMAJ2mI53SgCNcBGAsYHQ/s640/logo.jpg',
        url: 'https://hackzism.blogspot.com/2020/08/instagram-phishing-using-hiddeneye.html'
    },
    {
        id: 2,
        title: 'FSOCIETY hacking tools from Mr. Robot',
        date: 'June 28, 2020',
        img: 'https://1.bp.blogspot.com/-7U2uaEBZA9Q/XviwXOzNEEI/AAAAAAAABWE/HKZU9SXfh2UrwA2gg3v9pgQGCmgV_anGQCK4BGAsYHg/w400-h200/fs.jpeg',
        url: 'https://hackzism.blogspot.com/2020/06/fsociety-hacking-tools-from-mr-robot.html',
    },
    {
        id: 3,
        title: 'See previously connected wifi passwords using cmd',
        date: 'June 09, 2020',
        img: 'https://1.bp.blogspot.com/-XfIGvvAYz2o/Xt9nH5C6VbI/AAAAAAAAAsc/C10sdA4Q0b4OJcnzyiv5JfSstbiXaGU-wCK4BGAsYHg/w640-h525/cmd1.PNG',
        url: 'https://hackzism.blogspot.com/2020/06/see-previously-connected-wifi-passwords.html'
    },

]

function Blog() {
    return (
        <div className="blog" id="blog">
            <h1>Recent Posts</h1>

            <Grid container direction="row" justify="center" alignItems="center" className="blogs_container">
                {blogs.map(blog => (
                    <BlogCard 
                        title={blog.title}
                        date={blog.date}
                        img={blog.img}
                        url={blog.url}
                    />
                ))}
            </Grid>

            <a href="https://hackzism.blogspot.com/" target="_blank" rel="noreferrer">
                <Button className="btn draw-border">Visit Blog</Button>
            </a>
        </div>
    )
}

export default Blog
