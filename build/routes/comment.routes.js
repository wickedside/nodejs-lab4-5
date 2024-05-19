import { Router } from 'express';
import * as CommentController from '../controllers/comment.controller.js';
const router = Router();
router.get('/', CommentController.getAllComments);
router.get('/:id', CommentController.getCommentById);
router.post('/', CommentController.createComment);
router.put('/:id', CommentController.updateComment);
router.delete('/:id', CommentController.deleteComment);
export default router;
//# sourceMappingURL=comment.routes.js.map