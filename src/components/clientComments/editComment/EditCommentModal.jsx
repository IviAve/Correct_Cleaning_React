// export default function EditComment({ comment, isEditing, editedText, setEditedText, onSave, onCancel }) {
//     return (
//         <div>
//             {isEditing ? (
//                 <>
//                     <textarea 
//                         value={editedText} 
//                         onChange={(e) => setEditedText(e.target.value)}
//                     />
//                     <button onClick={onSave}>Save</button>
//                     <button onClick={onCancel}>Cancel</button>
//                 </>
//             ) : (
//                 <p>{comment.get("text")}</p>
//             )}
//         </div>
//     );
// }


import styles from "./EditCommentModal.module.css";

export default function EditCommentModal({ isOpen, editedText, setEditedText, onSave, onCancel }) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h3>Edit Comment</h3>
                <textarea
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                />
                <div className={styles.buttonGroup}>
                    <button onClick={onSave} className={styles.saveBtn}>Save</button>
                    <button onClick={onCancel} className={styles.cancelBtn}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
