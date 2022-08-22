import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import styled from 'styled-components';

const CommentContainer = () => {

  return (
    <StCommentContainer>
      <h3>00개의 댓글</h3>
      <CommentForm />
      <CommentList />
    </StCommentContainer>
  );
};

export default CommentContainer;

const StCommentContainer = styled.div`
  width: 768px;
  margin: 0 auto;
`;
