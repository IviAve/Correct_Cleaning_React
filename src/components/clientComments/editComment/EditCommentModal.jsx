

import { useState } from "react";
import styles from "./EditCommentModal.module.css";

export default function EditCommentModal({ isOpen, editedText, setEditedText, onSave, onCancel }) {
  const [error, setError] = useState(""); 

  if (!isOpen) return null;

  
  const validateText = (text) => {
    if (text.length < 10) {
      setError("Comment must be at least 10 characters.");
      return false;
    }
    setError(""); 
    return true;
  };

  const handleSave = () => {
    
    if (validateText(editedText)) {
      onSave(); 
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>Edit Comment</h3>
        <textarea
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
        
        {error && <p className={styles.error}>{error}</p>} 

        <div className={styles.buttonGroup}>
          <button onClick={handleSave} className={styles.saveBtn}>Save</button>
          <button onClick={onCancel} className={styles.cancelBtn}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
