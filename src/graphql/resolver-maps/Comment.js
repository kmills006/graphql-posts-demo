const Comment = {
  author: ({ authorId }, args, { authorByIdLoader }) => (
    authorByIdLoader.load(authorId)
  ),

  post: ({ postId }, args, { postByIdLoader }) => (
    postByIdLoader.load(postId)
  ),
};

export default Comment;
