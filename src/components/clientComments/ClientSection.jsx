



// import { useEffect, useState } from "react";
// import { Parse } from "../../services/parse"; 

// export default function ClientSection() {
//     const [comments, setComments] = useState([]);

//     useEffect(() => {
//         const fetchComments = async () => {
//             try {
//                 const Comment = Parse.Object.extend("Comments");
//                 const query = new Parse.Query(Comment);
//                 query.descending("createdAt"); 
//                 const results = await query.find();
//                 setComments(results);
//             } catch (error) {
//                 console.error("Error fetching comments:", error);
//             }
//         };

//         fetchComments();
//     }, []);

//     return (
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
//     );
// }





import { useEffect, useState } from "react";
import { Parse } from "../../services/parse";
import EditCommentModal from "../../components/clientComments/EditCommentModal";
import { useCommentActions } from "../../hooks/useCommentActions";

export default function ClientSection() {
    const [comments, setComments] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    const {
        editingCommentId,
        editedText,
        setEditedText,
        handleEdit,
        handleCancelEdit,
        handleSaveEdit,
        handleDelete
    } = useCommentActions(fetchComments);

    const currentUser = Parse.User.current();

    return (
        <section className="client_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-10 mx-auto">
                        <div className="heading_container">
                            <h2>What Our Clients Say</h2>
                        </div>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                {comments.length > 0 ? (
                                    comments.map((comment, index) => (
                                        <div key={comment.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                            <div className="detail-box">
                                                <h4>{comment.get("added_by")}</h4>
                                                <p>{comment.get("text")}</p>
                                                <img src="images/quote.png" alt="" />
                                                {currentUser && currentUser.id === comment.get("ownerId") && (
                                                    <div className="comment-buttons">
                                                        <button className="button primary"  onClick={() => { handleEdit(comment); setIsModalOpen(true); }}>Edit</button>
                                                        <button className="button secondary" onClick={() => handleDelete(comment.id)}>Delete</button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="carousel-item active">
                                        <div className="detail-box">
                                            <h4>No Comments Yet</h4>
                                            <p>Be the first to leave a comment!</p>
                                            <img src="images/quote.png" alt="" />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Модал за редактиране */}
            <EditCommentModal
                isOpen={isModalOpen}
                editedText={editedText}
                setEditedText={setEditedText}
                onSave={() => {
                    handleSaveEdit(editingCommentId);
                    setIsModalOpen(false);
                }}
                onCancel={() => {
                    handleCancelEdit();
                    setIsModalOpen(false);
                }}
            />
        </section>
    );
}
