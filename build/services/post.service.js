import * as postRepository from '../repositories/memory.repository.js';
export const getAllPosts = () => postRepository.getPosts();
export const getPostById = (id) => postRepository.findPostById(id);
export const createPost = (postData) => postRepository.addPost(postData);
export const updatePost = (id, updateData) => {
    const post = postRepository.findPostById(id);
    if (!post)
        return null;
    Object.assign(post, updateData);
    return post;
};
export const deletePost = (id) => {
    postRepository.deletePost(id);
};
//# sourceMappingURL=post.service.js.map