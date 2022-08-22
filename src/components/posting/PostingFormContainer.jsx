import React from 'react';
import PostImage from './PostImage';
import PostContent from './PostContent';
import PostTag from './PostTag';
import styled from 'styled-components';

const PostingFormContainer = () => {
  return (
  <StPostingFormContainer>
    <div>
      <h3>포스트 올리기</h3>
      <PostImage />
      <PostContent />
      <PostTag />
    </div>
  </StPostingFormContainer>
  );
};

export default PostingFormContainer;

const StPostingFormContainer = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  width: 768px;
  height: 100vh;
  padding: 10px 0;
  margin: 0 auto;
  background-color: yellow;

  div {
    width: 100%;
    border: 1px solid green;
  }
`;
