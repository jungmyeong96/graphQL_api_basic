import { getMovies, getMovie, getSuggestions, people, getById, addPerson, deletePerson } from "./db";

const resolvers = {
  Query: { //스키마에 query가 없으면 에러 뜸 query root must be provided
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
    name: () => "james",
    person: (_, { id }) => getById(id),
    people: () => people
    },
  Mutation: {
    addPerson: (_, {name, age}) => addPerson(name, age),
    deletePerson: (_, { id }) => deletePerson(id)
  }

};

export default resolvers;
