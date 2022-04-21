import React from 'react';
import Grid from '@mui/material/Grid';
import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import Content from './Content/Content';

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Content post={post}/>
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;