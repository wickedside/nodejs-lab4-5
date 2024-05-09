import { v4 as uuidv4 } from 'uuid';
class Post {
    id;
    title;
    content;
    userId;
    createdAt;
    constructor({ id = uuidv4(), title, content, userId, createdAt = Date.now() }) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.createdAt = createdAt;
    }
}
export default Post;
//# sourceMappingURL=post.model.js.map