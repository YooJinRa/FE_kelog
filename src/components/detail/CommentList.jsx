import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { __getCommentAllByPostId, __deleteCommentByCommentId } from '../../redux/modules/commentSlice';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const CommentList = ({ setCommentCount }) => {
  const dispatch = useDispatch();
  const commentsList = useSelector(state => state.commentSlice.comment);
  const postId = useParams().postId;
  
  console.log("postId======>", postId);

  useEffect(() => {
    dispatch(__getCommentAllByPostId(postId));
  }, [dispatch]);

  // :: 댓글 수 부모 컨포넌트 전달!
  useEffect(() => {
    setCommentCount(commentsList.commentcount);
  }, []);

  // :: 댓글 삭제
  const onClickDeleteComment = (commentId) => {
    dispatch(__deleteCommentByCommentId(commentId));
  }
  

  console.log(commentsList);
  
  return (
    <StCommentListWrap>
      {commentsList.map((comment) => (
        <StCommentBox>
          <div className='rowComment'>
            <div className='commentInfo'>
              <div className='commentProfileImage'>
                이미지 사진!!
              </div>
              <dl>
                <dt>{comment.username}</dt>
                <dd>{comment.createdAt}</dd>
              </dl>
            </div>
            <p>
              <span>수정</span>
              <span onClick={() => onClickDeleteComment(comment.commentId)}>삭제</span>
            </p>
          </div>
          <p>{comment.comment}</p>
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
