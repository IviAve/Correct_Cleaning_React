// import Parse from "parse";


// export async function deletePhoto(photoId) {
//   try {
//     const query = new Parse.Query("WindowGallery"); 
//     const photo = await query.get(photoId); 

//     if (photo) {
//       await photo.destroy(); 
//       return { success: true };
//     }
//   } catch (error) {
//     console.error("Error deleting photo:", error);
//     return { success: false, error };
//   }
// }


import Parse from "parse";




export async function createPhoto(imageUrl, selectedService, description) {
  try {
    const currentUser = Parse.User.current();
    if (!currentUser) {
      return { success: false, error: "User not logged in." };
    }

    const Photo = new Parse.Object("WindowGallery");
    Photo.set("imageUrl", imageUrl);
    Photo.set("service", selectedService);
    Photo.set("description", description);
    Photo.set("ownerId", currentUser.id);
    Photo.set("added_by", currentUser.get("username"));

    const acl = new Parse.ACL();
    acl.setPublicReadAccess(true);
    acl.setWriteAccess(currentUser, true);
    Photo.setACL(acl);

    await Photo.save();
    return { success: true };
  } catch (error) {
    console.error("Error creating photo:", error);
    return { success: false, error };
  }
}




export async function getPhoto(photoId) {
  try {
    const query = new Parse.Query("WindowGallery");
    const photo = await query.get(photoId);
    return { success: true, data: photo }; 
  } catch (error) {
    console.error("Error fetching photo:", error);
    return { success: false, error };
  }
}



export async function getAllPhotos() {
  try {
    const query = new Parse.Query("WindowGallery");
    const photos = await query.find();
    return { success: true, data: photos };
  } catch (error) {
    console.error("Error fetching photos:", error);
    return { success: false, error };
  }
}


export async function deletePhoto(photoId) {
  try {
    const query = new Parse.Query("WindowGallery");
    const photo = await query.get(photoId);

    if (photo) {
      await photo.destroy();
      return { success: true };
    }
  } catch (error) {
    console.error("Error deleting photo:", error);
    return { success: false, error };
  }
}




export const fetchUserPhotos = async (userId) => {
    const Photo = Parse.Object.extend("WindowGallery");
    const query = new Parse.Query(Photo);
    query.equalTo("ownerId", userId);

    try {
        const results = await query.find();
        return results.map(photo => ({
            id: photo.id,
            imageUrl: photo.get("imageUrl"),
            service: photo.get("service"),
        }));
    } catch (error) {
        console.error("Error fetching photos:", error);
        return [];
    }
};


export const fetchUserComments = async (userId) => {
    const Comment = Parse.Object.extend("Comments");
    const query = new Parse.Query(Comment);
    query.equalTo("ownerId", userId);

    try {
        const results = await query.find();
        return results.map(comment => ({
            id: comment.id,
            text: comment.get("text"),
            photoId: comment.get("photoId"),
        }));
    } catch (error) {
        console.error("Error fetching comments:", error);
        return [];
    }
};




export const fetchPhotos = async (service = null, limit = null) => {
  const Photo = Parse.Object.extend("WindowGallery");
  const query = new Parse.Query(Photo);
  
  if (service) {
    query.equalTo("service", service);
  }
  
  query.descending("createdAt");

  if (limit) {
    query.limit(limit);
  }

  try {
    const results = await query.find();
    return results.map(photo => ({
      id: photo.id,
      name: photo.get("added_by"),
      image: photo.get("imageUrl"),
    }));
  } catch (error) {
    throw new Error("Error fetching photos: " + error.message);
  }
};





export const updatePhotoDetails = async (id, imageUrl, selectedService, description) => {
  const Photo = Parse.Object.extend("WindowGallery");
  const query = new Parse.Query(Photo);
  const photo = await query.get(id);

  const currentUser = Parse.User.current();
  if (!currentUser || photo.get("ownerId") !== currentUser.id) {
    throw new Error("You are not authorized to edit this image.");
  }

  photo.set("imageUrl", imageUrl);
  photo.set("service", selectedService);
  photo.set("description", description);

  try {
    await photo.save();
  } catch (error) {
    throw new Error("Error updating photo: " + error.message);
  }
};





export const fetchComments = async (setComments) => {
  try {
    const currentUser = Parse.User.current();
    if (!currentUser) return;

    const Comment = Parse.Object.extend("Comments");
    const query = new Parse.Query(Comment);
    query.equalTo("ownerId", currentUser.id);
    query.descending("createdAt");

    const results = await query.find();
    setComments(
      results.map((comment) => ({
        id: comment.id,
        text: comment.get("text"),
        photoId: comment.get("photoId"),
      }))
    );
  } catch (error) {
    console.error("Error fetching comments:", error)
    throw new Error("Error fetching comments. Please try again later.");
  }
};


export const updateComment = async (commentId, editedText) => {
  try {
    const Comment = Parse.Object.extend("Comments");
    const query = new Parse.Query(Comment);
    const commentToUpdate = await query.get(commentId);

    commentToUpdate.set("text", editedText);
    await commentToUpdate.save();
  } catch (error) {
    throw new Error("Error updating comment: " + error.message);
  }
};


export const deleteComment = async (commentId) => {
  try {
    const Comment = Parse.Object.extend("Comments");
    const query = new Parse.Query(Comment);
    const commentToDelete = await query.get(commentId);
    await commentToDelete.destroy();
  } catch (error) {
    console.error("Error deleting comment:", error)
    throw new Error("Error deleting comment. Please try again.");
  }
};



export const isAdmin = async () => {
  const currentUser = Parse.User.current();
  if (!currentUser) return false;

  try {
    const roleQuery = new Parse.Query(Parse.Role);
    roleQuery.equalTo("name", "admin");
    roleQuery.equalTo("users", currentUser);
    const adminRole = await roleQuery.first();

    return !!adminRole;
  } catch (error) {
    console.error("Error checking admin role:", error);
    return false;
  }
};
