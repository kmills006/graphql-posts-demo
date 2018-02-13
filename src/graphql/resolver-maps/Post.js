const Post = {
  author: ({ authorId }, args, { authorByIdLoader }) => (
    authorByIdLoader.load(authorId)
  ),

  comments: ({ _id }, args, { commentsByPostIdLoader }) => (
    commentsByPostIdLoader.load(_id)
  ),
};

export default Post;
