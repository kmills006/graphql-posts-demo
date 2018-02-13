export default `
  type Author {
    _id: ID!
    firstName: String!
    lastName: String!
    posts: [Post]!
    comments: [Comment]!
  }
`;
