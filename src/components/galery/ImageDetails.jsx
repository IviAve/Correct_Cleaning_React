

// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router"; 
// import { deletePhoto } from "../../utils/requests"; 
// import { Parse } from "../../services/parse";
// import { Link } from "react-router";

// function PhotoDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [photo, setPhoto] = useState(null);

//   useEffect(() => {
//     const fetchPhotoDetails = async () => {
//       const Photo = Parse.Object.extend("WindowGallery");
//       const query = new Parse.Query(Photo);

//       try {
//         const photoObj = await query.get(id);
//         const photoData = {
//           name: photoObj.get("added_by"),
//           image: photoObj.get("imageUrl"),
//           service: photoObj.get("service"),
//         };
//         setPhoto(photoData);
//       } catch (error) {
//         console.error("Error fetching photo details:", error);
//       }
//     };

//     fetchPhotoDetails();
//   }, [id]);

  
//   const handleDelete = async () => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this photo?");
//     if (!confirmDelete) return;

//     const result = await deletePhoto(id); 

//     if (result.success) {
//       alert("The photo was deleted successfully!");
//       navigate("/"); 
//     } else {
//       alert("Error while deleting!");
//     }
//   };

//   return (
//     <div className="App-gallery">
//       <h1>Photo Details</h1>
//       <div className="photo-gallery">
//         {photo ? (
//           <div>
//             <h2>Added by: {photo.name}</h2>
//             <img
//               src={photo.image}
//               alt={photo.name}
//               style={{ maxWidth: "300px", maxHeight: "400px", objectFit: "cover" }}
//             />
//             <p>Service: {photo.service}</p>
//             <span className="buttonsAddDel">
//               <Link to="/" className="button">Edit</Link>
//               <button onClick={handleDelete} className="button secondary">Delete</button>
//             </span>
//           </div>
//         ) : (
//           <p>Loading photo details...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default PhotoDetails;


import { useParams, Link } from "react-router-dom";
import { usePhotoDetails } from "../../hooks/usePhotoDetails";

function PhotoDetails() {
    const { id } = useParams();
    const { photo, loading, handleDelete } = usePhotoDetails(id);

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
                        <span className="buttonsAddDel">
                            <Link to={`/edit/${id}`} className="button">Edit</Link>
                            <button onClick={handleDelete} className="button secondary">Delete</button>
                        </span>
                    </div>
                ) : (
                    <p>No images yet.</p>
                )}
            </div>
        </div>
    );
}

export default PhotoDetails;


