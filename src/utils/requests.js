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


