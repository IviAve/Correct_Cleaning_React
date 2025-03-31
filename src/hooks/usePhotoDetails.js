

import { Parse } from "../services/parse";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getPhoto, deletePhoto } from "../utils/requests";  
import { useError } from "../components/context/error/useError";

export function usePhotoDetails(photoId) {
    const navigate = useNavigate();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isOwner, setIsOwner] = useState(false); 
    const { showError, showSuccess} = useError(); 

    useEffect(() => {
        const fetchPhotoDetails = async () => {
            try {
                
                const result = await getPhoto(photoId);
                
                if (result.success) {
                    const photoData = {
                        name: result.data.get("added_by"),
                        image: result.data.get("imageUrl"),
                        service: result.data.get("service"),
                        description: result.data.get("description"),
                    };
                    setPhoto(photoData);

                    const currentUser = Parse.User.current();
                    if (currentUser && result.data.get("ownerId") === currentUser.id) {
                        setIsOwner(true);  
                    }
                } else {
                    showError("Error fetching photo details");
                }
            } catch (error) {
                console.error("Error fetching photo details:", error);
            } finally {
                setLoading(false);
            }
        };

        if (photoId) {
            fetchPhotoDetails();
        }
    }, [photoId, showError]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this photo?");
        if (!confirmDelete) return;

        const result = await deletePhoto(photoId);

        if (result.success) {
            showSuccess("The photo was deleted successfully!");
            navigate("/gallery");
        } else {
            showError("Error while deleting!");
        }
    };

    return {
        photo,
        loading,
        handleDelete,
        isOwner,  
    };
}
