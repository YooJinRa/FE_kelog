import React from 'react';
import styled from 'styled-components';

const CommentForm = () => {
  return (
    <StCommentFormWrap>
      <textarea placeholder='댓글을 작성하세요.'>
      </textarea>
      <div className='commentAddButtonWrap'>
        <button className='buttonPoint'>댓글 작성</button>
      </div>
    </StCommentFormWrap>
  );
};

export default CommentForm;

const StCommentFormWrap = styled.div`
  width: 100%;

  textarea {
    width: 100%;
    height: 70px;
    resize: none;
    padding: 1rem 1rem 1.5rem;
    outline: none;
    border: var(--border-style);
    margin-bottom: 1.5rem;
    border-radius: 4px;
    min-height: 6.125rem;
    font-size: 1rem;
    color: var(--title-color);
    line-height: 1.75;
    background: var(--subBg-color);

  }
  .commentAddButtonWrap {
    display: flex;
    justify-content: flex-end;
  }
`;
