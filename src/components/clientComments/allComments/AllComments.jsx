

// import { useEffect, useState } from "react";
// import { Parse } from "../../../services/parse";
// import CommentItem from "./CommentItem";

// import styles from "./AllComments.module.css";

// export default function AllComments() {
//     const [comments, setComments] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const currentUser = Parse.User.current();

//     useEffect(() => {
//         fetchComments();
//     }, []);

//     const fetchComments = async () => {
//         try {
//             const Comment = Parse.Object.extend("Comments");
//             const query = new Parse.Query(Comment);
//             query.descending("createdAt");
//             const results = await query.find();
//             setComments(results);
//             setLoading(false);
//         } catch (error) {
//             console.error("Error fetching comments:", error);
//             setLoading(false);
//         }
//     };

//     return (
//         <section className={styles.commentssection}>
//             <div className={styles.containercomm}>
//                 <h2 className={styles.commentstitle}>What Our Clients Say</h2>
//                 <div className={styles.commentsgrid}>
//                      {loading ? (
//                         <div className={styles.loader}>
//                             <div className={styles.circle}></div>
//                         </div>
//                     ) : comments.length > 0 ? (
//                         comments.map((comment) => (
//                             <CommentItem key={comment.id} comment={comment} userId={currentUser?.id} />
//                         ))
//                     ) : (
//                         <p className={styles.nocomments}>No Comments Yet. Be the first to leave a comment!</p>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// }


import { useEffect, useState } from "react";
import { Parse } from "../../../services/parse";
import CommentItem from "./CommentItem";

import styles from "./AllComments.module.css";

export default function AllComments() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const currentUser = Parse.User.current();

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const Comment = Parse.Object.extend("Comments");
                const query = new Parse.Query(Comment);
                query.descending("createdAt");
                const results = await query.find();

                const commentsWithLikes = results.map(comment => {
                    const likesArray = comment.get("likes") || [];
                    const hasUserLiked = likesArray.includes(currentUser?.id);
                    return {
                        id: comment.id,
                        text: comment.get("text"),
                        added_by: comment.get("added_by"),
                        likes: likesArray.length,
                        hasLiked: hasUserLiked,
                    };
                });

                setComments(commentsWithLikes);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching comments:", error);
                setLoading(false);
            }
        };

        fetchComments();
    }, [currentUser?.id]); // добавяме ID като зависимост за безопасност

    const toggleLike = async (commentId) => {
        const Comment = new Parse.Object("Comments");
        Comment.set("objectId", commentId);

        try {
            const currentComment = await Comment.fetch();
            let likes = currentComment.get("likes") || [];

            if (likes.includes(currentUser.id)) {
                likes = likes.filter(id => id !== currentUser.id);
            } else {
                likes.push(currentUser.id);
            }

            currentComment.set("likes", likes);
            await currentComment.save();

            // Обновяваме коментарите
            const updatedComments = comments.map(c =>
                c.id === commentId
                    ? {
                        ...c,
                        likes: likes.length,
                        hasLiked: likes.includes(currentUser.id),
                    }
                    : c
            );
            setComments(updatedComments);
        } catch (err) {
            console.error("Error toggling like:", err);
        }
    };

    return (
        <section className={styles.commentssection}>
            <div className={styles.containercomm}>
                <h2 className={styles.commentstitle}>What Our Clients Say</h2>
                <div className={styles.commentsgrid}>
                    {loading ? (
                        <div className={styles.loader}>
                            <div className={styles.circle}></div>
                        </div>
                    ) : comments.length > 0 ? (
                        comments.map((comment) => (
                            <CommentItem
                                key={comment.id}
                                comment={comment}
                                userId={currentUser?.id}
                                onToggleLike={toggleLike}
                            />
                        ))
                    ) : (
                        <p className={styles.nocomments}>No Comments Yet. Be the first to leave a comment!</p>
                    )}
                </div>
            </div>
        </section>
    );
}
