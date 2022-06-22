import axios from "axios";
const BASE_URL = "https://yts-proxy.now.sh/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

/* api 저장 방식 */

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return movies;
};

export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
};

export const getSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
};

/* 파일시스템 저장방식 */

export let people = [
  {
    id: 0,
    name: "james",
    age: 18,
    gender: "female"
  },
  {
    id: 1,
    name: "Jisu",
    age: 68,
    gender: ""
  },
  {
    id: 2,
    name: "James",
    age: 24,
    gender: ""
  },
  {
    id: 3,
    name: "Han",
    age: 14,
    gender: ""
  },
  {
    id: 4,
    name: "JIM",
    age: 28,
    gender: ""
  }
]

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
};

export const addPerson = (name, age) => {
  const newPerson = {
    id: `${people.length + 1}`,
    name,
    age,
  };
  people.push(newPerson);
  return newPerson;
};

export const deletePerson = id => {
  const cleanedPerson = people.filter(person => person.id !== id);
  if (people.length > cleanedPerson.length) {
    people = cleanedPerson;
    return true;
  } else {
    return false;
  }
};