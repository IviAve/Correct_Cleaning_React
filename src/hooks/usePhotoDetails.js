import { useEffect, useState } from "react";
 import { useNavigate } from "react-router";
import { Parse } from "../services/parse";
import { deletePhoto } from "../utils/requests";

export function usePhotoDetails(photoId) {
     const navigate = useNavigate();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPhotoDetails = async () => {
            const Photo = Parse.Object.extend("WindowGallery");
            const query = new Parse.Query(Photo);

            try {
                const photoObj = await query.get(photoId);
                const photoData = {
                    name: photoObj.get("added_by"),
                    image: photoObj.get("imageUrl"),
                    service: photoObj.get("service"),
                    description: photoObj.get("description"), 
                };
                setPhoto(photoData);
            } catch (error) {
                console.error("Error fetching photo details:", error);
            } finally {
                setLoading(false);
            }
        };

        if (photoId) {
            fetchPhotoDetails();
        }
    }, [photoId]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this photo?");
        if (!confirmDelete) return;

        const result = await deletePhoto(photoId);

        if (result.success) {
            alert("The photo was deleted successfully!");
            navigate("/");
        } else {
            alert("Error while deleting!");
        }
    };

    return {
        photo,
        loading,
         handleDelete,
    };
}
