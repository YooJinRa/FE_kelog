import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';
import { __getPostDetail } from '../../redux/modules/postSlice';
import Heart from './Heart';

const DetailContainer = ({ postDetail, userDetail }) => {

  return (
    <StDetailContainer>
      <Heart postDetail={postDetail} />
      <StPostDetailHeaderWrap>
        <h1>{postDetail.title}</h1>
        <StPostInfoBox>
          <p className='postInfo'>
            <strong>{userDetail.username}</strong> 
            <b>&#183;</b>
            <span>{postDetail.createdAt}</span>
          </p>
          {/* <button className='postHeartCount'>
            <FaHeart size="12" color="var(--subGray-color)" />
            <span>
              {postDetail.heartCount === null ? 0 : postDetail.heartCount}
            </span>
          </button> */}
        </StPostInfoBox>
       
        <StPostDetailTagBox>
          {postDetail.tags && postDetail.tags.map((tag, index) => (
            <li key={tag+index}>{tag}</li>
          ))}
        </StPostDetailTagBox>
        <StPostDetailImageBox>
          <img src={postDetail.imgUrl} alt={postDetail.title} />
        </StPostDetailImageBox>
        <StPostDetailContentBox>
          {postDetail.content}
        </StPostDetailContentBox>
      </StPostDetailHeaderWrap>
    </StDetailContainer>
  );
};

export default DetailContainer;

const StDetailContainer = styled.div`
  position: relative;
  width: 768px;
  margin: 5.5rem auto;
`;

const StPostDetailHeaderWrap = styled.div`
  width: 100%;
  padding: 0 1rem;

  h1 {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.5;
    color:var(--title-color);
    margin-bottom: 2rem;
    word-break: keep-all;
    transition: color 0.125s ease-in 0s;
  }
`;

const StPostInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  strong, span {
    font-size: 1rem;
  }
  b {
    margin: 0 0.5rem;
  }
  
  .postInfo {
    strong {
      font-weight: 700;
    }
  }
  .postHeartCount {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 1.5rem;
    text-align: center;
    color: var(--subGray-color);
    border-radius: 0.75rem;
    padding: 0 0.75rem;
    outline: none;
    border: 1px solid var(--subGray-color);
    background-color: var(--subBg-color);

    span {
      font-size:0.75rem;
      font-weight: 700;
    }
    svg {
      margin-right: 0.75rem
    }
  }
`;

const StPostDetailTagBox = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 0.875rem;
  margin-top: 0.875rem;
  margin-bottom: -0.875rem;

  li {
    display: inline-flex;
    align-items: center;
    height: 2rem;
    line-height: 2rem;
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: 700;
    border-radius: 1rem;
    margin-right: 0.875rem;
    margin-bottom: 0.875rem;
    padding: 0 1.2rem;
    background-color: var(--bg-color);
  }
`;

const StPostDetailImageBox = styled.div`
  width: 100%;
  img {
    max-height: 100vh;
    max-width: 100%;
    width: auto;
    margin: 2rem auto 0px;
    height: auto;
    object-fit: contain;
    display: block;
  }
`;

const StPostDetailContentBox = styled.div`
  width: 100%;
  font-size: 1.125rem;
  color: var(--title-color);
  line-height: 1.7;
  border-left: 4px solid var(--primary-color);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: var(--bg-color);
  margin: 2rem 0;
  padding: 1rem 1rem 1rem 2rem;
`;

