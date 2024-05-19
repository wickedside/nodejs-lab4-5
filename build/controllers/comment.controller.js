import * as CommentService from '../services/comment.service.js';
export const getAllComments = async (_req, res) => {
    const comments = CommentService.getAllComments();
    res.json(comments);
};
export const getCommentById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).send('Comment ID is required');
        return;
    }
    const comment = CommentService.getCommentById(id);
    if (comment) {
        res.json(comment);
    }
    else {
        res.status(404).send('Comment not found');
    }
};
export const createComment = async (req, res) => {
    const comment = CommentService.createComment(req.body);
    res.status(201).json(comment);
};
export const updateComment = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).send('Comment ID is required for update');
        return;
    }
    const comment = CommentService.updateComment(id, req.body);
    if (comment) {
        res.json(comment);
    }
    else {
        res.status(404).send('Comment not found');
    }
};
export const deleteComment = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).send('Comment ID is required for deletion');
        return;
    }
    CommentService.deleteComment(id);
    res.status(204).send();
};
//# sourceMappingURL=comment.controller.js.map