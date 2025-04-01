


// import { useLikeComment } from "../../../hooks/useLikeComments";
// import styles from "./AllComments.module.css";

// export default function CommentItem({ comment, userId }) {
//     const { likes, hasLiked, toggleLike } = useLikeComment(comment.id, userId);

//     return (
//         <div className={styles.commentbox}>
//             <div className={styles.commentheader}>
//                 <div className={styles.avatar}></div>
//                 <h4 className={styles.commentauthor}>{comment.get("added_by")}</h4>
//             </div>
//             <p className={styles.commenttext}>{comment.get("text")}</p>
//             <div className={styles.likeSection}>
//                 <span className={styles.likeCount}>👍 {likes}</span>
//                 {userId && (
//                     <button 
//                         onClick={toggleLike} 
//                         className={`${styles.likeButton} ${hasLiked ? styles.unlike : styles.like}`}
//                     >
//                         {hasLiked ? "Unlike" : "Like"}
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// }


import { useLikeComment } from "../../../hooks/useLikeComments";
import styles from "./AllComments.module.css";

export default function CommentItem({ comment, userId }) {
    const { likes, hasLiked, toggleLike } = useLikeComment(comment.id, userId);

    return (
        <div className={styles.commentbox}>
            <div className={styles.commentheader}>
                <div className={styles.avatar}></div>
                <h4 className={styles.commentauthor}>{comment.get("added_by")}</h4>
            </div>
            <p className={styles.commenttext}>{comment.get("text")}</p>
            <div className={styles.likeSection}>
                <span className={styles.likeCount}>👍 {likes}</span>
                {userId && (
                    <button
                        onClick={toggleLike}
                        className={`${styles.likeButton} ${hasLiked ? styles.unlike : styles.like}`}
                    >
                        {hasLiked ? "Unlike" : "Like"}
                    </button>
                )}
            </div>
        </div>
    );
}
