import Parse from "parse";


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
