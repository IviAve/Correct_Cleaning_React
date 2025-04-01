// import { useState, useEffect } from "react";
// import { Parse } from "../services/parse";

// export function useLikeComment(commentId, userId) {
//     const [likes, setLikes] = useState(0);
//     const [hasLiked, setHasLiked] = useState(false);

//     useEffect(() => {
//         const fetchLikes = async () => {
//             const Comment = Parse.Object.extend("Comments");
//             const query = new Parse.Query(Comment);
//             query.equalTo("objectId", commentId);
//             const result = await query.first();
            
//             if (result) {
//                 const likesArray = result.get("likes") || [];
//                 setLikes(likesArray.length);
//                 setHasLiked(likesArray.includes(userId));
//             }
//         };

//         fetchLikes();
//     }, [commentId, userId]);

//     const toggleLike = async () => {
//         try {
//             const Comment = Parse.Object.extend("Comments");
//             const query = new Parse.Query(Comment);
//             const comment = await query.get(commentId);

//             if (comment) {
//                 let likesArray = comment.get("likes") || [];
                
//                 if (likesArray.includes(userId)) {
//                     likesArray = likesArray.filter(id => id !== userId);
//                     setHasLiked(false);
//                 } else {
//                     likesArray.push(userId);
//                     setHasLiked(true);
//                 }
                
//                 comment.set("likes", likesArray);
//                 await comment.save();
//                 setLikes(likesArray.length);
//             }
//         } catch (error) {
//             console.error("Error toggling like:", error);
//         }
//     };

//     return { likes, hasLiked, toggleLike };
// }


import { useState, useEffect } from "react";
import { Parse } from "../services/parse";

export function useLikeComment(commentId, userId) {
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        const fetchLikes = async () => {
            try {
                const Comment = Parse.Object.extend("Comments");
                const query = new Parse.Query(Comment);
                const comment = await query.get(commentId);
                
                const currentLikes = comment.get("likes") || [];
                setLikes(currentLikes.length);
                setHasLiked(currentLikes.includes(userId));
            } catch (error) {
                console.error("Error fetching likes:", error);
            }
        };

        fetchLikes();
    }, [commentId, userId]);

    const toggleLike = async () => {
        try {
            const Comment = Parse.Object.extend("Comments");
            const query = new Parse.Query(Comment);
            const comment = await query.get(commentId);

            const currentLikes = comment.get("likes") || [];
            let updatedLikes = [...currentLikes];
            
            if (hasLiked) {
                
                updatedLikes = updatedLikes.filter(id => id !== userId);
                setHasLiked(false);
            } else {
                
                updatedLikes.push(userId);
                setHasLiked(true);
            }

            
            comment.set("likes", updatedLikes);
            await comment.save();

            
            setLikes(updatedLikes.length);
        } catch (error) {
            console.error("Error toggling like:", error);
        }
    };

    return { likes, hasLiked, toggleLike };
}
