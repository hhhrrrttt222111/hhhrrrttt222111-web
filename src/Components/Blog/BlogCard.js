import React from 'react'
import { Button, Grid } from '@material-ui/core'

import './Blog.css'


function BlogCard({ title, date, img, url }) {
    return (
        <Grid className="blogCard">
            <a href={url} target="_blank" rel="noreferrer">
                <img src={img} alt="" />
                <h2>{title}</h2>
                <span>{date}</span>
            </a>
        </Grid>
    )
}

export default BlogCard
