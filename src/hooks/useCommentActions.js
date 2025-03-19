import { useState } from "react";
import { Parse } from "../services/parse";

export function useCommentActions(fetchComments) {
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editedText, setEditedText] = useState("");

    const handleEdit = (comment) => {
        setEditingCommentId(comment.id);
        setEditedText(comment.get("text"));
    };

    const handleCancelEdit = () => {
        setEditingCommentId(null);
        setEditedText("");
    };

    const handleSaveEdit = async (commentId) => {
        try {
            const Comment = new Parse.Object("Comments");
            Comment.set("objectId", commentId);
            Comment.set("text", editedText);
            await Comment.save();
            setEditingCommentId(null);
            fetchComments();
        } catch (error) {
            console.error("Error updating comment:", error);
        }
    };

    const handleDelete = async (commentId) => {
        try {
            const Comment = new Parse.Object("Comments");
            Comment.set("objectId", commentId);
            await Comment.destroy();
            fetchComments();
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    };

    return {
        editingCommentId,
        editedText,
        setEditedText,
        handleEdit,
        handleCancelEdit,
        handleSaveEdit,
        handleDelete
    };
}
