

// import { Link } from "react-router-dom";
// import { useProfile } from "../../../hooks/useProfile";
// import styles from "./MyProfile.module.css";
// import { useNavigate } from "react-router";

// function MyProfile() {
//     const { user, photos, comments } = useProfile();
//     const navigate = useNavigate ();

//     return (
//         <div className={styles.profileContainer}>
//             {user ? (
//                 <div className={styles.profileCard}>
//                     <h2>Profile</h2>
//                     <p><strong>Username:</strong> {user.username}</p>
//                     <p><strong>Email:</strong> {user.email}</p>
//                     <button className={styles.editButton} onClick={() => navigate("/EditProfile")}>
//                         Edit
//                     </button>
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}

//             <div className={styles.section}>
//                 <h3>My Photos</h3>
//                 <div className={styles.photoGrid}>
//                     {photos.length > 0 ? (
//                         photos.map(photo => (
//                             <Link key={photo.id} to={`/photo-details/${photo.id}`} className={styles.photoCard}>
//                                 <img src={photo.imageUrl} alt="User's photo" />
//                                 <p>{photo.service}</p>
//                             </Link>
//                         ))
//                     ) : (
//                         <p>No photos uploaded.</p>
//                     )}
//                 </div>
//             </div>

//             <div className={styles.section}>
//                 <h3>My Comments</h3>
//                 <ul className={styles.commentList}>
//                     {comments.length > 0 ? (
//                         comments.map(comment => (
//                             <li key={comment.id}>
//                                 <Link to={`/photo/${comment.photoId}`}>{comment.text}</Link>
//                             </li>
//                         ))
//                     ) : (
//                         <p>No comments yet.</p>
//                     )}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default MyProfile;


import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useProfile } from "../../../hooks/useProfile";
import EditCommentModal from "../../../components/clientComments/EditCommentModal";
import { Parse } from "../../../services/parse";
import styles from "./MyProfile.module.css";

function MyProfile() {
    const { user, photos, comments, setComments } = useProfile();
    const navigate = useNavigate();

    // 🔹 Състояния за модала
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editedText, setEditedText] = useState("");

    
    const handleEditClick = (comment) => {
        setEditingCommentId(comment.id);
        setEditedText(comment.text);
        setIsModalOpen(true);
    };

    
    const handleSaveEdit = async () => {
        try {
            const Comment = Parse.Object.extend("Comments");
            const query = new Parse.Query(Comment);
            const commentToUpdate = await query.get(editingCommentId);

            commentToUpdate.set("text", editedText);
            await commentToUpdate.save();

            setIsModalOpen(false);

            
            const updatedComments = comments.map(comment =>
                comment.id === editingCommentId ? { ...comment, text: editedText } : comment
            );
            setComments(updatedComments);
        } catch (error) {
            console.error("Error updating comment:", error);
        }
    };

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
                <p>Loading...</p>
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
                            <li key={comment.id} onClick={() => handleEditClick(comment)} className={styles.commentItem}>
                                {comment.text}
                            </li>
                        ))
                    ) : (
                        <p>No comments yet.</p>
                    )}
                </ul>
            </div>

        
            <EditCommentModal
                isOpen={isModalOpen}
                editedText={editedText}
                setEditedText={setEditedText}
                onSave={handleSaveEdit}
                onCancel={() => setIsModalOpen(false)}
            />
        </div>
    );
}

export default MyProfile;
