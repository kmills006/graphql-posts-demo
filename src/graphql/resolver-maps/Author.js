const Author = {
  posts: ({ _id }, args, { postsByAuthorIdLoader }) => (
    postsByAuthorIdLoader.load(_id)
  ),

  comments: ({ _id }, args, { commentsByAuthorIdLoader }) => (
    commentsByAuthorIdLoader.load(_id)
  ),
};

export default Author;
