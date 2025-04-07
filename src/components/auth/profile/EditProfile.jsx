

import { useEditProfile } from "../../../hooks/useEditProfile";
import styles from "./EditProfile.module.css";
import { useError } from "../../../context/error/useError";

export default function EditProfile() {
    const { formData, loading, handleChange, handleSubmit: submitProfile } = useEditProfile();
    const { showError } = useError(); 

    if (loading) {
        return <div className={styles.loader}>
                <div className={styles.circle}></div>
              </div>
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (formData.username.trim().length < 3) {
            showError("Username must be at least 3 characters long.");
            return;
        }

        
        if (!formData.email.includes("@") || formData.email.length < 9) {
            showError("Email must include '@' and be at least 9 characters long.");
            return;
        }

        
        submitProfile(e);
    };

    return (
        <div className={styles.editProfileContainer}>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}
