


import { useState } from "react";
import Parse from "parse";

export function useCommentActions(setComments) {
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editedText, setEditedText] = useState("");

    const fetchComments = async () => {
        try {
            const currentUser = Parse.User.current();
            if (!currentUser) return;

            const Comment = Parse.Object.extend("Comments");
            const query = new Parse.Query(Comment);
            query.equalTo("ownerId", currentUser.id); 
            query.descending("createdAt"); 

            const results = await query.find();

            
            setComments(results.map(comment => ({
                id: comment.id,
                text: comment.get("text"),
                photoId: comment.get("photoId"),
            })));
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    // const handleEdit = (comment) => {
    //     setEditingCommentId(comment.id);
    //     setEditedText(comment.text);
    // };

    const handleEdit = (comment) => {
        setEditingCommentId(comment.id);
        setEditedText(comment.text || comment.get("text")); 
    };
    

    const handleCancelEdit = () => {
        setEditingCommentId(null);
        setEditedText("");
    };

    const handleSaveEdit = async () => {
        try {
            const Comment = Parse.Object.extend("Comments");
            const query = new Parse.Query(Comment);
            const commentToUpdate = await query.get(editingCommentId);

            commentToUpdate.set("text", editedText);
            await commentToUpdate.save();

            setEditingCommentId(null);
            fetchComments(); 
        } catch (error) {
            console.error("Error updating comment:", error);
        }
    };

    const handleDelete = async (commentId) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this comment?");
        
        if (isConfirmed) {
            try {
                const Comment = Parse.Object.extend("Comments");
                const query = new Parse.Query(Comment);
                const commentToDelete = await query.get(commentId);
                await commentToDelete.destroy();

                fetchComments(); 
            } catch (error) {
                console.error("Error deleting comment:", error);
            }
        }
    };

    return {
        editingCommentId,
        editedText,
        setEditedText,
        handleEdit,
        handleCancelEdit,
        handleSaveEdit,
        handleDelete,
        fetchComments
    };
}
