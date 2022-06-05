import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/posts";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


import './comment.css';


const CommentSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const [comments, setComments] = useState(post?.comments);
  const commentsRef = useRef();
    
  // handling new comments
  const handleComment = async () => {
    const newComments = await dispatch(
      commentPost(`${user?.result?.name}: ${comment}`, post._id)
    );

    setComment("");
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };



  // JSX code
  return (
    <div>

      <div className="add-comment">
          <TextField
            fullWidth
            rows={2}
            variant="filled"
            label="Comment"
            placeholder="Write a comment"
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            style={{ marginTop: "10px" }}
            disabled={!comment.length}
            color="primary"
            variant="contained"
            onClick={handleComment}
          >
            Comment
          </Button>
          </div>
          <div className="commentHeader" >
          <br/>
        <Typography gutterBottom variant="h6" >
            Comments
          </Typography>
          </div>

      <div>
        <br/>
          <Box className="commentBox">
            DaveXo9:Ovo je probni komentar.
            <br/>
            <br/>
            <br/>
            <br/>
            Johnny: Cool post dudee
            <br/>
            <br/>
            <br/>
            <br/>

            Idiot: Niceeee post maaan
          </Box>
 


        </div>
        
    </div>
   
  );
};

export default CommentSection;
