

import { useEffect, useState } from "react";
import { Parse } from "../../../services/parse";
import CommentItem from "./CommentItem";

import styles from "./AllComments.module.css";

export default function AllComments() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const currentUser = Parse.User.current();

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const Comment = Parse.Object.extend("Comments");
            const query = new Parse.Query(Comment);
            query.descending("createdAt");
            const results = await query.find();
            setComments(results);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching comments:", error);
            setLoading(false);
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
                            <CommentItem key={comment.id} comment={comment} userId={currentUser?.id} />
                        ))
                    ) : (
                        <p className={styles.nocomments}>No Comments Yet. Be the first to leave a comment!</p>
                    )}
                </div>
            </div>
        </section>
    );
}
