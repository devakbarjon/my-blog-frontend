// src/pages/PostDetail.jsx
import React, { useEffect, useState } from 'react';
import { data, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { toast } from "react-toastify";
import { getAnonId } from "../utils/anonId";
import config from '../config';
import { Helmet } from 'react-helmet-async';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [commenterName, setCommenterName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  // Fetch the post data
  useEffect(() => {
    const anonId = getAnonId();
    const fetchPost = async () => {
      try {
        const response = await fetch(`${config.apiUrl}/posts/${id}`, {
          method: 'GET',
          headers: {
            'Conetent-Type': "application/json",
            "X-Anonymous-Id": anonId
          },
        });
        const data = await response.json();
        console.log(data.comments);
        setPost(data);
        setLikeCount(data.likes);
        setComments(data.comments || []); // Assuming the backend includes comments in the post data
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  // Handle like button click (PUT request to update like count)
  const handleLike = async () => {
    const anonId = getAnonId();
    try {
      const response = await fetch(`${config.apiUrl}/posts/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          "X-Anonymous-Id": anonId
        },
        body: JSON.stringify({ likes: likeCount + 1 }),
      });

      if (response.ok) {
        setLikeCount(likeCount + 1);
        toast.success("You liked the post!"); // Success
      } else {
        const data = await response.json();
        console.error('Failed to update like count');
        toast.error(`Failed to like the post: ${data.detail}`); // Error
      }
    } catch (error) {
      console.error('Error updating like:', error);
      toast.error("Failed to update likes."); // Error
    }
  };

  // Handle comment form submission (POST request to submit a new comment)
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (commenterName && commentText) {
      const newComment = {
        author: commenterName,
        content: commentText,
      };

      try {
        const response = await fetch(`${config.apiUrl}/posts/${id}/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newComment),
        });

        if (response.ok) {
          // Add the new comment to the state
          setComments([...comments, newComment]);
          setCommenterName('');
          setCommentText('');
          toast.success("Comment submitted successfully!"); // Success
        } else {
          console.error('Failed to submit comment');
          toast.error("Failed to submit comment"); // Error
        }
      } catch (error) {
        console.error('Error submitting comment:', error);
        toast.error("Failed to submit comment"); // Error
      }
    }
  };

  if (!post) return <Layout><p>Loading...</p></Layout>;

  return (
    <Layout>
      <Helmet>
        <title>Post Page</title>
      </Helmet>
      <section className="post-detail-section">
        <div className="post-detail-container">
          <h2 className="post-detail-title">{post.title}</h2>
          <img 
            src={post.photo}
            onError={(e) => { e.target.onerror = null; e.target.src = "https://"; }} 
            className="post-detail-img" 
            alt={post.title} 
          />
            <p className="post-detail-content">{post.content}</p>

          <div className="post-detail-meta">
            <span><i className="fas fa-thumbs-up"></i> <strong>Likes:</strong> {likeCount}</span>
            <span><i className="fas fa-eye"></i> <strong>Views:</strong> {post.views}</span>
            <span><i className="fas fa-comments"></i> <strong>Comments:</strong> {comments.length}</span>
          </div>
          
          <button className="like-button" onClick={handleLike}>
            <i className="fas fa-thumbs-up"></i> Like
          </button>

          {/* Comment Section */}
          <div className="comment-section">
            <h3 className="comment-title">Leave a Comment</h3>
            <form onSubmit={handleCommentSubmit} className="comment-form">
              <input
                type="text"
                placeholder="Your Name"
                value={commenterName}
                onChange={(e) => setCommenterName(e.target.value)}
                className="comment-input"
              />
              <textarea
                placeholder="Your Comment"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="comment-textarea"
              />
              <button type="submit" className="comment-submit-button">
                <i className="fas fa-paper-plane"></i> Submit Comment
              </button>
            </form>

            <div className="comments-list">
              {comments.map((comment, index) => (
                <div key={index} className="comment-item">
                  <div className="comment-author">
                    <i className="fas fa-user-circle"></i> <strong>{comment.author}</strong>
                  </div>
                  <p className="comment-text">{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PostDetail;