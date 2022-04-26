import React from 'react';
import Grid from '@mui/material/Grid';
import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import './posts.css';
import Content from './Content/Content';

const Posts = ({setCurrentId}) => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid container direction="column" className="polozaj" alignItems="stretch"  justifyContent="space-evenly" spacing={96}>
        {posts.map((post) => (
          <Grid  key={post._id} item xs={12} sm={6} md={6}>
            <Content  post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;