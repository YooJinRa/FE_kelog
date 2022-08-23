import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const CommentForm = () => {
  const postId = useParams().postId;
  console.log("commentForm_postId =====>", postId);
  const [commentTextArea, setCommentTextArea] = useState('');

  const URL = {
    BASE: process.env.REACT_APP_BASE_URL,
  };
  const onChangeCommentMessage = (event) => {
    setCommentTextArea(event.target.value);
  }

  const onClickAddComment = async () => {
    // :: 댓글 등록
    try {
      const response = await axios.post(`${URL.BASE}api/comment/${postId}`, {
        comment: commentTextArea,
      }, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2NvdW50MSIsImV4cCI6MTY2MTE5MTM2OH0.R0oATGNrxDv4SNheXNbJN5Mz7MRR0wVPaxiM1gItUJU"
        }
      });
      console.log(response.data);
      return response.data;
    } catch(error) {
      console.log(error);
    }
    
  }

  return (
    <StCommentFormWrap>
      <textarea 
        placeholder='댓글을 작성하세요.'
        onChange={onChangeCommentMessage}
      >
      </textarea>
      <div className='commentAddButtonWrap'>
        <button 
          className='buttonPoint'
          onClick={onClickAddComment}
        >
          댓글 작성
        </button>
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
