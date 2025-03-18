// export default function ClientSection() {
//     return (
//         <section className="client_section layout_padding">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-9 col-md-10 mx-auto">
//                         <div className="heading_container">
//                             <h2>
//                             What Our Clients Say
//                             </h2>
//                         </div>
//                         <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
//                             <div className="carousel-inner">
//                                 <div className="carousel-item active">
//                                     <div className="detail-box">
//                                         <h4>
//                                             Ivan Ivanov
//                                         </h4>
//                                         <p>
//                                             passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s
//                                         </p>
//                                         <img src="images/quote.png" alt="" />
//                                     </div>
//                                 </div>
//                                 <div className="carousel-item">
//                                     <div className="detail-box">
//                                         <h4>
//                                             Petar Petrov
//                                         </h4>
//                                         <p>
//                                             passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s
//                                         </p>
//                                         <img src="images/quote.png" alt="" />
//                                     </div>
//                                 </div>
//                                 <div className="carousel-item">
//                                     <div className="detail-box">
//                                         <h4>
//                                             Stan Stamatov
//                                         </h4>
//                                         <p>
//                                             passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s
//                                         </p>
//                                         <img src="images/quote.png" alt="" />
//                                     </div>
//                                 </div>
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

export default function ClientSection() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
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

        fetchComments();
    }, []);

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
        </section>
    );
}
