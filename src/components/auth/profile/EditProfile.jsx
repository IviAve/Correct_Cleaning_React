import { useEditProfile } from "../../../hooks/useEditProfile";
import styles from "./EditProfile.module.css";

export default function EditProfile() {
    const { formData, loading, handleChange, handleSubmit } = useEditProfile();

    if (loading) {
        return <p>Loading...</p>;
    }

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
