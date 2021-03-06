import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

const GET_MOVIES = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      language
      rating
      description_intro
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIES, { variables: { id: +id } });
  if (data) {
    console.log(data.movie.medium_cover_image);
  }

  return (
    <Container>
      <Column>
        <Title>{loading ? 'Loading...' : data.movie.title}</Title>
        {!loading && data.movie && (
          <>
            <Subtitle>
              {data.movie.language} · {data.movie.rating}
            </Subtitle>
            <Description>{data.movie.description_intro}</Description>
          </>
        )}
      </Column>
      <Poster bg={data && data.movie ? data.movie.medium_cover_image : ''} />
    </Container>
  );
};

export default Detail;
