import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Typography, TextField, Button } from "@material-ui/core/";
import { commentPost } from "../../actions/posts";
import useStyles from "./styles";

const CommentSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const [comments, setComments] = useState(post?.comments);
  const classes = useStyles();
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

      </div>
   
  );
};

export default CommentSection;
