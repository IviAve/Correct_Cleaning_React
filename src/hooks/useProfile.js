// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Parse from "parse";

// export function useProfile() {
//     const [user, setUser] = useState(null);
//     const [photos, setPhotos] = useState([]);
//     const [comments, setComments] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const currentUser = Parse.User.current();
//         if (!currentUser) {
//             navigate("/login");
//             return;
//         }

//         setUser({
//             username: currentUser.get("username"),
//             email: currentUser.get("email"),
//             id: currentUser.id,
//         });

//         fetchUserPhotos(currentUser.id);
//         fetchUserComments(currentUser.id);
//     }, [navigate]);

//     const fetchUserPhotos = async (userId) => {
//         const Photo = Parse.Object.extend("WindowGallery");
//         const query = new Parse.Query(Photo);
//         query.equalTo("ownerId", userId);

//         try {
//             const results = await query.find();
//             setPhotos(results.map(photo => ({
//                 id: photo.id,
//                 imageUrl: photo.get("imageUrl"),
//                 service: photo.get("service"),
//             })));
//         } catch (error) {
//             console.error("Error fetching photos:", error);
//         }
//     };

//     const fetchUserComments = async (userId) => {
//         const Comment = Parse.Object.extend("Comments");
//         const query = new Parse.Query(Comment);
//         query.equalTo("ownerId", userId);

//         try {
//             const results = await query.find();
//             setComments(results.map(comment => ({
//                 id: comment.id,
//                 text: comment.get("text"),
//                 photoId: comment.get("photoId"),
//             })));
//         } catch (error) {
//             console.error("Error fetching comments:", error);
//         }
//     };

//     return { user, photos, comments, setComments };
// }


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserPhotos, fetchUserComments } from "../utils/requests"; 
import Parse from "parse"

export function useProfile() {
    const [user, setUser] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [comments, setComments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = Parse.User.current();
        if (!currentUser) {
            navigate("/login");
            return;
        }

        setUser({
            username: currentUser.get("username"),
            email: currentUser.get("email"),
            id: currentUser.id,
        });

    
        fetchUserPhotos(currentUser.id).then(setPhotos);
        fetchUserComments(currentUser.id).then(setComments);
    }, [navigate]);

    return { user, photos, comments, setComments };
}
