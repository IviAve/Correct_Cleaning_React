


import { useState } from "react";
import { Parse } from "../../services/parse"; 
import { useNavigate } from 'react-router';
import { useError } from "../../context/error/useError"; 
import styles from "../auth/Forms.module.css";

function CreateComment() {
  const [commentText, setCommentText] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showError, showSuccess } = useError(); 

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!commentText) {
      showError('Please enter a comment.');
      return;
    }
    if (commentText.length < 10) {
      showError("Comment must be min 10 characters.");
      return;
    }

    setLoading(true);

    try {
      const currentUser = Parse.User.current();
      if (!currentUser) {
        showError("You must be logged in to post comments.");
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
      acl.setPublicWriteAccess(true);
      acl.setWriteAccess(currentUser, true); 
      newComment.setACL(acl);

      await newComment.save();

      setCommentText('');
      showSuccess("Comment is post successfully");
      navigate('/allComments');
      
    } catch (error) {
      showError("Error posting comment:", error);
    }
    setLoading(false);
  };

  const isCommentValid = commentText.length >= 10;

  return (
    <div className={styles.addcomm}>
    <div className={styles.logincenter}>
      <form className={styles.login} onSubmit={handleCommentSubmit}>
        <div className={styles.field}>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write your comment..."
            required
            className={isCommentValid ? styles.validComment : ""}
          ></textarea>
          <span className={styles.helpinfo}>Comment must be at least 10 characters</span>
        </div>
        
        
        {loading ? (
          <div className={styles.loader}>
            <div className={styles.circle}></div>
          </div>
        ) : (
          <button
            type="submit"
            className={`${styles.btnreglog} ${isCommentValid ? styles.btnValid : styles.btnDisabled}`}
            disabled={loading || !isCommentValid}
          >
            {loading ? "Posting..." : "Post Comment"}
          </button>
        )}
      </form>
    </div>
    </div>
  );
}

export default CreateComment;
