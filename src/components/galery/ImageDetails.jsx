

// import { useParams, Link } from "react-router-dom";
// import { usePhotoDetails } from "../../hooks/usePhotoDetails";

// function PhotoDetails() {
//     const { id } = useParams();
//     const { photo, loading, handleDelete } = usePhotoDetails(id);

//     return (
//         <div className="App-gallery">
//             <h1>Photo Details</h1>
//             <div className="photo-gallery">
//                 {loading ? (
//                     <p>Loading photo details...</p>
//                 ) : photo ? (
//                     <div>
//                         <h2>Added by: {photo.name}</h2>
//                         <img
//                             src={photo.image}
//                             alt={photo.name}
//                             style={{ maxWidth: "300px", maxHeight: "400px", objectFit: "cover" }}
//                         />
//                         <p>Service: {photo.service}</p>
//                         <p>Description: {photo.description}</p> 
//                         <span className="buttonsAddDel">
//                         <Link to={`/edit/${id}`} className="button">Edit</Link>

//                             <button onClick={handleDelete} className="button secondary">Delete</button>
//                         </span>
//                     </div>
//                 ) : (
//                     <p>No images yet.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default PhotoDetails;


import { useParams, Link } from "react-router-dom";
import { usePhotoDetails } from "../../hooks/usePhotoDetails";

function PhotoDetails() {
    const { id } = useParams();
    const { photo, loading, handleDelete, isOwner } = usePhotoDetails(id); 

    return (
        <div className="App-gallery">
            <h1>Photo Details</h1>
            <div className="photo-gallery">
                {loading ? (
                    <p>Loading photo details...</p>
                ) : photo ? (
                    <div>
                        <h2>Added by: {photo.name}</h2>
                        <img
                            src={photo.image}
                            alt={photo.name}
                            style={{ maxWidth: "300px", maxHeight: "400px", objectFit: "cover" }}
                        />
                        <p>Service: {photo.service}</p>
                        <p>Description: {photo.description}</p> 
                        
                        
                        {isOwner && (
                            <span className="buttonsAddDel">
                                <Link to={`/edit/${id}`} className="button">Edit</Link>
                                <button onClick={handleDelete} className="button secondary">Delete</button>
                            </span>
                        )}
                    </div>
                ) : (
                    <p>No images yet.</p>
                )}
            </div>
        </div>
    );
}

export default PhotoDetails;
