



// import { useEffect, useState } from "react";
// import { Parse } from "../../../services/parse";


// export default function AllComments() {
//     const [comments, setComments] = useState([]);
    
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
//         } catch (error) {
//             console.error("Error fetching comments:", error);
//         }
//     };

   

//     return (
//         <>
//         <section className="client_section layout_padding">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-9 col-md-10 mx-auto">
//                         <div className="heading_container">
//                             <h2>What Our Clients Say</h2>
//                         </div>
//                         <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
//                             <div className="carousel-inner">
//                                 {comments.length > 0 ? (
//                                     comments.map((comment, index) => (
//                                         <div key={comment.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
//                                             <div className="detail-box">
//                                                 <h4>{comment.get("added_by")}</h4>
//                                                 <p>{comment.get("text")}</p>
//                                                 <img src="images/quote.png" alt="" />
//                                                 {/* {currentUser && currentUser.id === comment.get("ownerId") && (
//                                                     // <div className="comment-buttons">
//                                                     //     <button className="button primary"  onClick={() => { handleEdit(comment); setIsModalOpen(true); }}>Edit</button>
//                                                     //     <button className="button secondary" onClick={() => handleDelete(comment.id)}>Delete</button>
//                                                     // </div>
//                                                 )} */}
//                                             </div>
//                                         </div>
//                                     ))
//                                 ) : (
//                                     <div className="carousel-item active">
//                                         <div className="detail-box">
//                                             <h4>No Comments Yet</h4>
//                                             <p>Be the first to leave a comment!</p>
//                                             <img src="images/quote.png" alt="" />
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                             <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//                                 <span className="sr-only">Previous</span>
//                             </a>
//                             <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//                                 <span className="sr-only">Next</span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>

           
//         </section>
//         </>
//     );
// }



import { useEffect, useState } from "react";
import { Parse } from "../../../services/parse";

import styles from "./AllComments.module.css"


export default function AllComments() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    
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
                            <div key={comment.id} className={styles.commentbox}>
                                <div className={styles.commentheader}>
                                    <div className={styles.avatar}></div>
                                    <h4 className={styles.commentauthor}>{comment.get("added_by")}</h4>
                                </div>
                                <p className={styles.commenttext}>{comment.get("text")}</p>
                            </div>
                        ))
                    ) : (
                        <p className={styles.nocomments}>No Comments Yet. Be the first to leave a comment!</p>
                    )}
                </div>
            </div>
        </section>
    );
}
