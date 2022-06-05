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
    
  // handling new comments
  const handleComment = async () => {
    const newComments = await dispatch(
      commentPost(`${user?.result?.username}: ${comment}`, post._id)
    );

    setComment("");
    setComments(newComments);
    console.log(comment);

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
          </div>
          <Button
            style={{ marginTop: "10px", marginLeft: "28px", backgroundColor:"#152e5588", color:"#f3f5f8" }}
            disabled={!comment.length}
            color="primary"
            variant="contained"
            onClick={handleComment}
          >
            Comment
          </Button>
          <div className="commentHeader" >
          <br/>
        <Typography gutterBottom variant="h6" >
            Comments
          </Typography>
          </div>

      <div>
        <br/>
          <Box className="commentBox">
          {comments?.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              {/* <strong>{c.split(": ")[0]}</strong>
              {c.split(":")[1]} */}
              {c}
            </Typography>
          ))}
          </Box>
 


        </div>
        
    </div>
   
  );
};

export default CommentSection;
