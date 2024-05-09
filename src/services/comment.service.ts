import * as commentRepository from '../repositories/memory.repository.js';
import Comment from '../models/comment.model.js';

export const getAllComments = (): Comment[] => {
  return commentRepository.getComments();
};

export const getCommentById = (id: string): Comment | undefined => {
  return commentRepository.findCommentById(id);
};

export const createComment = (commentData: Comment): Comment => {
  return commentRepository.addComment(commentData);
};

export const updateComment = (id: string, updateData: Partial<Comment>): Comment | null => {
  const comment = commentRepository.findCommentById(id);
  if (!comment) return null;
  Object.assign(comment, updateData);
  return comment;
};

export const deleteComment = (id: string): void => {
  commentRepository.deleteComment(id);
};
