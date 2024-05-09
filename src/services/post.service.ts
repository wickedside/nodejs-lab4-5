import * as postRepository from '../repositories/memory.repository.js';
import Post from '../models/post.model.js';

export const getAllPosts = (): Post[] => {
  return postRepository.getPosts();
};

export const getPostById = (id: string): Post | undefined => {
  return postRepository.findPostById(id);
};

export const createPost = (postData: Post): Post => {
  return postRepository.addPost(postData);
};

export const updatePost = (id: string, updateData: Partial<Post>): Post | null => {
  const post = postRepository.findPostById(id);
  if (!post) return null;
  Object.assign(post, updateData);
  return post;
};

export const deletePost = (id: string): void => {
  postRepository.deletePost(id);
};
