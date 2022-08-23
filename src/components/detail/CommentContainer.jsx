import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import styled from 'styled-components';

const CommentContainer = ({ commentsList }) => {

  console.log("++++++++++++++commentContainer", commentsList);
  return (
    <StCommentContainer>
      <h3>{commentsList.commentcount}개의 댓글</h3>
      <CommentForm />
      <CommentList commentsList={commentsList} />
    </StCommentContainer>
  );
};

export default CommentContainer;

const StCommentContainer = styled.div`
  width: 768px;
  margin: 0 auto;
`;
