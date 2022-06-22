import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: `type Movie {
    id: Int!
    title: String!
    rating: Float
    description_intro: String
    language: String
    medium_cover_image: String
    genres: [String]
  }
  
  type Person {
    id: Int!
    name: String!
    age: Int!
    gender: String
  }
  
  type Query {
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
    suggestions(id: Int!): [Movie]!
    name: String!
    people: [Person]!
    person(id: Int!): Person
  }
  
  type Mutation {
      addPerson(name: String!, age:Int!): Person!
      deletePerson(id: Int!): Person
  }
  `,
  resolvers
});

server.start(() => console.log("Graphql Server Running"));
