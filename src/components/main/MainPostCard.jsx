import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainPostCard = ({post}) => {
  return (
    <StMainPostCardWrap>
      <Link to={`/post/${post.id}`}>
        <StMainPostImgBox>
          <img src={post.imgUrl} alt={post.title} />
        </StMainPostImgBox>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>
          <span>{post.createdAt}</span>
          <strong>{post.heartCount===null? 0 : post.heartCount}</strong>
        </p>
      </Link>
    </StMainPostCardWrap>
  );
};

export default MainPostCard;

const StMainPostCardWrap = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  margin: 1rem;
`;
const StMainPostImgBox = styled.div`
  width: 100%;
  height: 167px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
