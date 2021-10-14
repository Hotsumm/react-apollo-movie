import React from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);

  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        data &&
        data.movies &&
        data.movies.map((movie, index) => <h1 key={index}>{movie.id}</h1>)
      )}
    </div>
  );
};
export default Home;
