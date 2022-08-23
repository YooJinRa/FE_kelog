import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { __deleteCommentByCommentId, __updateCommentByCommentId, __getCommentAllByPostId } from '../../redux/modules/commentSlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const CommentList = ({ commentsList }) => {
  const dispatch = useDispatch();
  const postId = useParams().postId;
  const [ updateCommentMessage, setUpdateCommentMessage ] = useState(commentsList.comment);
  const [ formToggle, setFormToggle ] = useState(false);

  // :: 댓글 삭제
  const onClickDeleteComment = (commentId) => {
    dispatch(__deleteCommentByCommentId(commentId));
  }

  // ::: 수정하기 활성화
  const onClickOpenUpdateForm = () => {
    setFormToggle(!formToggle)
  }

  const onChangeUpdateCommentMessage = (event) => {
    setUpdateCommentMessage(event.target.value);
  }
  
  // ::: 댓글 수정
  const onClickUpdateComment = (commentId) => {
    dispatch(__updateCommentByCommentId({
      commentId: commentId,
      comment: updateCommentMessage
    }));
  }

  // ::: 댓글 수정 취소
  const onClickCancelComment = () => {}

  console.log("++++++++++++++++>>>>>>", commentsList);
  return (
    <StCommentListWrap>
      {commentsList.responseDto &&
      commentsList.responseDto.map((comment) => (
        <StCommentBox key={comment.commentId}>
          <div className='rowComment'>
            <div className='commentInfo'>
              <div className='commentProfileImage'>
                <img src={comment.profileimage} alt={comment.comment} />
              </div>
              <dl>
                <dt>{comment.username}</dt>
                <dd>{comment.createdAt}</dd>
              </dl>
            </div>
            <StUpdateDeleteButton
              formToggle={formToggle}
            >
              <span onClick={onClickOpenUpdateForm}>수정</span>
              <span onClick={() => onClickDeleteComment(comment.commentId)}>삭제</span>
            </StUpdateDeleteButton>
          </div>
          <StCommentTextBox
            formToggle={formToggle}
          >
          {comment.comment}
          </StCommentTextBox>
            
          <StCommentReviseFormWrap
            formToggle={formToggle}
          >
              <textarea 
                onChange={onChangeUpdateCommentMessage}
                
              >
                
              </textarea>
              <div className='commentAddButtonWrap'>
                <button 
                  className='buttonWhite'
                  onClick={onClickCancelComment}
                >
                  취소
                </button>
                <button 
                  className='buttonPoint'
                  onClick={()=>onClickUpdateComment(comment.commentId)}
                >
                  댓글 수정
                </button>
              </div>
            </StCommentReviseFormWrap>
        </StCommentBox>
      ))}
    </StCommentListWrap>
  );
};

export default CommentList;

const StCommentListWrap = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 7rem;
`;

const StCommentBox = styled.div`
  padding: 1.5rem 0;
  border-top: 1px solid var(--subGray-color);

  .rowComment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    height: 3.375rem;
    
    .commentInfo {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .commentProfileImage {
      width: 3.375rem;
      height: 3.375rem;
      margin-right: 1rem;
      border-radius: 50%;
      overflow: hidden;
      background-color: var(--bg-color);
      border: var(--border-style);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    dl {
      
    }
    dt {
      font-size: 1rem;
      font-weight: 700;
      color: var(--title-color);
    }
    dd {
      margin-top: 0.5rem;
      color: var(--text-color);
      font-size: 0.875rem;
    }
  }
  p {
    font-size: 1.125rem;
    color: var(--title-color);
    transition: color 0.125s ease-in 0s;
    line-height: 1.7;
    letter-spacing: -0.004em;
    word-break: keep-all;
    overflow-wrap: break-word;
  }
`;

const StUpdateDeleteButton = styled.p`
  display: ${(props) => props.formToggle===false ? 'block' : 'none'};

  span {
    font-size: 1rem;
    margin-left: 0.5rem;
    cursor: pointer;
  }
`;

const StCommentTextBox = styled.p`
  display: ${(props) => props.formToggle===false ? 'block' : 'none'};
`;


const StCommentReviseFormWrap = styled.div`
  width: 100%;
  display: ${(props) => props.formToggle===false ? 'none' : 'block'};

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