export default `
  type Post {
    _id: ID!
    authorId: ID!
    title: String!
    body: String!
    author: Author!
    comments: [Comment]!
  }
`;
