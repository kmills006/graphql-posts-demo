export default `
  type Comment {
    _id: ID!
    postId: ID!
    authorId: ID!
    comment: String!
    post: Post!
    author: Author!
  }
`;
