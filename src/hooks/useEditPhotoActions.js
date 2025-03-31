
// import { useState, useEffect } from 'react';
// import { useNavigate } from "react-router";
// import Parse from 'parse';
// import { useError } from '../components/context/error/useError';

// export const useEditPhotoActions = (id) => {
//   const [imageUrl, setImageUrl] = useState('');
//   const [selectedService, setSelectedService] = useState('');
//   const [description, setDescription] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [isOwner, setIsOwner] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const {showError} = useError ();

//   useEffect(() => {
//     if (!id) {
//       setError("No photo ID provided");
//       navigate("/gallery");
//       return;
//     }

//     const fetchPhotoDetails = async () => {
//       try {
//         const Photo = Parse.Object.extend('WindowGallery');
//         const query = new Parse.Query(Photo);
//         const photo = await query.get(id);

//         const currentUser = Parse.User.current();
//         if (!currentUser) {
//           alert("You must be logged in to edit this image.");
//           navigate("/gallery");
//           return;
//         }

//         if (photo.get('ownerId') !== currentUser.id) {
//           alert("You are not authorized to edit this image.");
//           navigate("/gallery");
//           return;
//         }

//         setIsOwner(true);
//         setImageUrl(photo.get('imageUrl') || '');
//         setSelectedService(photo.get('service') || '');
//         setDescription(photo.get('description') || '');
//       } catch (error) {
//         console.error('Error fetching photo:', error);
//         setError(error.message);
//         navigate("/gallery");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPhotoDetails();
//   }, [id, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();



//     const imageRegex = /^https?:\/\//;
//     if (!imageUrl || !imageRegex.test(imageUrl)) {
//       showError("URL must start with https.");
//       return;
//     }
//     if (imageUrl.length < 6) {
//       showError("ImageUrl must be at least 6 characters");
//       return;
//     }
//     // if (description.length < 6) {
//     //   showError("Description must be at least 6 characters")
//     // }

//     if (!imageUrl || !selectedService ) {
//       showError('Please provide an image URL and a service.');
//       return;
//     }


//     setLoading(true);
//     try {
//       const Photo = Parse.Object.extend('WindowGallery');
//       const query = new Parse.Query(Photo);
//       const photo = await query.get(id);
//       const currentUser = Parse.User.current();

//       if (!currentUser || photo.get('ownerId') !== currentUser.id) {
//         showError("You are not authorized to edit this image.");
//         setLoading(false);
//         return;
//       }

//       photo.set('imageUrl', imageUrl);
//       photo.set('service', selectedService);
//       photo.set('description', description);

//       await photo.save();
//       navigate("/gallery");
//     } catch (error) {
//       console.error('Error updating photo:', error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     imageUrl,
//     setImageUrl,
//     selectedService,
//     setSelectedService,
//     description,
//     setDescription,
//     loading,
//     isOwner,
//     handleSubmit,
//     error
//   };
// };



import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useError } from "../components/context/error/useError";
import { updatePhotoDetails } from "../utils/requests"; 
import Parse from "parse";

export const useEditPhotoActions = (id) => {
  const [imageUrl, setImageUrl] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { showError } = useError();

  useEffect(() => {
    if (!id) {
      setError("No photo ID provided");
      navigate("/gallery");
      return;
    }

    const fetchPhotoDetails = async () => {
      try {
        const Photo = Parse.Object.extend("WindowGallery");
        const query = new Parse.Query(Photo);
        const photo = await query.get(id);

        const currentUser = Parse.User.current();
        if (!currentUser) {
          alert("You must be logged in to edit this image.");
          navigate("/gallery");
          return;
        }

        if (photo.get("ownerId") !== currentUser.id) {
          alert("You are not authorized to edit this image.");
          navigate("/gallery");
          return;
        }

        setIsOwner(true);
        setImageUrl(photo.get("imageUrl") || "");
        setSelectedService(photo.get("service") || "");
        setDescription(photo.get("description") || "");
      } catch (error) {
        console.error("Error fetching photo:", error);
        setError(error.message);
        navigate("/gallery");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotoDetails();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imageRegex = /^https?:\/\//;
    if (!imageUrl || !imageRegex.test(imageUrl)) {
      showError("URL must start with https.");
      return;
    }
    if (imageUrl.length < 6) {
      showError("ImageUrl must be at least 6 characters");
      return;
    }

    if (!imageUrl || !selectedService) {
      showError("Please provide an image URL and a service.");
      return;
    }

    setLoading(true);
    try {
      await updatePhotoDetails(id, imageUrl, selectedService, description); // Извикваме функцията за актуализиране на снимката
      navigate("/gallery");
    } catch (error) {
      console.error("Error updating photo:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    imageUrl,
    setImageUrl,
    selectedService,
    setSelectedService,
    description,
    setDescription,
    loading,
    isOwner,
    handleSubmit,
    error,
  };
};
