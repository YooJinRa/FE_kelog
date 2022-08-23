import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import styled from 'styled-components';

const CommentContainer = () => {
  const [ commentCount, setCommentCount ] = useState(0);

  return (
    <StCommentContainer>
      <h3>{commentCount}개의 댓글</h3>
      <CommentForm />
      <CommentList setCommentCount={setCommentCount} />
    </StCommentContainer>
  );
};

export default CommentContainer;

const StCommentContainer = styled.div`
  width: 768px;
  margin: 0 auto;
`;
