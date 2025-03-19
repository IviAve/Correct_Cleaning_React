import { useState } from "react";
import { Parse } from "../../services/parse"; 
import { useNavigate } from 'react-router';

import styles from "../auth/Forms.module.css";

function CreateComment() {
  const [commentText, setCommentText] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText) {
      alert('Please enter a comment.');
      return;
    }

    setLoading(true);

    try {
      const currentUser = Parse.User.current();
      if (!currentUser) {
        alert("You must be logged in to post comments.");
        setLoading(false);
        return;
      }

      const Comment = Parse.Object.extend("Comments");
      const newComment = new Comment();
      newComment.set("text", commentText);
      newComment.set("ownerId", currentUser.id); 
      newComment.set("added_by", currentUser.get("username")); 

      
      const acl = new Parse.ACL();
      acl.setPublicReadAccess(true); 
      acl.setWriteAccess(currentUser, true); 
      newComment.setACL(acl);

      await newComment.save();

      
      setCommentText('');
      navigate('/');
      
    } catch (error) {
      console.error("Error posting comment:", error);
    }
    setLoading(false);
  };

  return (
    <div className={styles.logincenter}>
    <form className={styles.login} onSubmit={handleCommentSubmit}>
      <div className={styles.field}>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Write your comment..."
        required
      ></textarea>
      </div>
      <button className={styles.btnreglog} type="submit" disabled={loading}>
        {loading ? "Posting..." : "Post Comment"}
      </button>
    </form>
    </div>
  );
}

export default CreateComment;
