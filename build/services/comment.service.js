import * as commentRepository from '../repositories/memory.repository.js';
export const getAllComments = () => commentRepository.getComments();
export const getCommentById = (id) => commentRepository.findCommentById(id);
export const createComment = (commentData) => commentRepository.addComment(commentData);
export const updateComment = (id, updateData) => {
    const comment = commentRepository.findCommentById(id);
    if (!comment)
        return null;
    Object.assign(comment, updateData);
    return comment;
};
export const deleteComment = (id) => {
    commentRepository.deleteComment(id);
};
//# sourceMappingURL=comment.service.js.map