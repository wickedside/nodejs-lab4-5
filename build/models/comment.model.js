import { v4 as uuidv4 } from 'uuid';
class Comment {
    id;
    text;
    userId;
    postId;
    createdAt;
    constructor({ id = uuidv4(), text, userId, postId, createdAt = Date.now() }) {
        this.id = id;
        this.text = text;
        this.userId = userId;
        this.postId = postId;
        this.createdAt = createdAt;
    }
}
export default Comment;
//# sourceMappingURL=comment.model.js.map