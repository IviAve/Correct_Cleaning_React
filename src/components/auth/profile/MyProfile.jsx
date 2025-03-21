import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Parse from "parse";
import styles from "./MyProfile.module.css"; 

function MyProfile() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = Parse.User.current();
        if (!currentUser) {
            navigate("/login"); 
            return;
        }

        setUser({
            username: currentUser.get("username"),
            email: currentUser.get("email"),
        });
    }, [navigate]);

    return (
        <div className={styles.profileContainer}>
            {user ? (
                <div className={styles.profileCard}>
                    <h2>Profile</h2>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <button 
                        className={styles.editButton}
                        onClick={() => navigate("/edit-profile")}
                    >
                        Edit
                    </button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default MyProfile;
