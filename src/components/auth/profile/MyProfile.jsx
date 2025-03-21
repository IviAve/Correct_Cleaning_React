// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Parse from "parse";
// import styles from "./MyProfile.module.css"; 

// function MyProfile() {
//     const [user, setUser] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const currentUser = Parse.User.current();
//         if (!currentUser) {
//             navigate("/login"); 
//             return;
//         }

//         setUser({
//             username: currentUser.get("username"),
//             email: currentUser.get("email"),
//         });
//     }, [navigate]);

//     return (
//         <div className={styles.profileContainer}>
//             {user ? (
//                 <div className={styles.profileCard}>
//                     <h2>Profile</h2>
//                     <p><strong>Username:</strong> {user.username}</p>
//                     <p><strong>Email:</strong> {user.email}</p>
//                     <button 
//                         className={styles.editButton}
//                         onClick={() => navigate("/edit-profile")}
//                     >
//                         Edit
//                     </button>
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// }

// export default MyProfile;


import { Link } from "react-router-dom";
import { useProfile } from "../../../hooks/useProfile";
import styles from "./MyProfile.module.css";
import { useNavigate } from "react-router";

function MyProfile() {
    const { user, photos, comments } = useProfile();
    const navigate = useNavigate ();

    return (
        <div className={styles.profileContainer}>
            {user ? (
                <div className={styles.profileCard}>
                    <h2>Profile</h2>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <button className={styles.editButton} onClick={() => navigate("/edit-profile")}>
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
                            <Link key={photo.id} to={`/photo/${photo.id}`} className={styles.photoCard}>
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
                            <li key={comment.id}>
                                <Link to={`/photo/${comment.photoId}`}>{comment.text}</Link>
                            </li>
                        ))
                    ) : (
                        <p>No comments yet.</p>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default MyProfile;
