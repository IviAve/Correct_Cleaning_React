


import {  useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useProfile } from "../../../hooks/useProfile";
import { useCommentActions } from "../../../hooks/useCommentActions";
import EditCommentModal from "../../clientComments/editComment/EditCommentModal";
import styles from "./MyProfile.module.css";

function MyProfile() {
    const { user, photos, comments, setComments } = useProfile();
    const navigate = useNavigate();
    
    
    const {
        editingCommentId,
        editedText,
        setEditedText,
        handleEdit,
        handleCancelEdit,
        handleSaveEdit,
        handleDelete,
        fetchComments
    } = useCommentActions(setComments);

    
    useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    return (
        <div className={styles.profileContainer}>
            {user ? (
                <div className={styles.profileCard}>
                    <h2>Profile</h2>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <button className={styles.editButton} onClick={() => navigate("/EditProfile")}>
                        Edit
                    </button>
                </div>
            ) : (
               <div className={styles.loader}>
                               <div className={styles.circle}></div>
                             </div>
            )}

            <div className={styles.section}>
                <h3>My Photos</h3>
                <div className={styles.photoGrid}>
                    {photos.length > 0 ? (
                        photos.map(photo => (
                            <Link key={photo.id} to={`/photo-details/${photo.id}`} className={styles.photoCard}>
                                <img src={photo.imageUrl} alt="User's photo" />
                                <p>{photo.service}</p>
                            </Link>
                        ))
                    ) : (
                        <p>No photos uploaded.</p>
                    )}
                </div>
            </div>

            <div className={styles.section}>
                <h3>My Comments</h3>
                <ul className={styles.commentList}>
                    {comments.length > 0 ? (
                        comments.map(comment => (
                            <li key={comment.id} className={styles.commentItem}>
                                {comment.text}
                                <div className="profile-btns">
                                    <button id="btn-profile1" onClick={() => handleEdit(comment)}>Edit</button>
                                    <button className="btn-profile2" onClick={() => handleDelete(comment.id)}>Delete</button>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p>No comments yet.</p>
                    )}
                </ul>
            </div>

            <EditCommentModal
                isOpen={editingCommentId !== null}
                editedText={editedText}
                setEditedText={setEditedText}
                onSave={handleSaveEdit}
                onCancel={handleCancelEdit}
            />
        </div>
    );
}

export default MyProfile;
