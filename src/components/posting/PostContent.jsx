import React from 'react';
import styled from 'styled-components';

const PostContent = () => {
  return (
    <StPostContentWrap>
      <input placeholder='게시글의 제목을 입력해주세요.' />
      <textarea placeholder='게시글의 내용을 소개해주세요.'></textarea>
    </StPostContentWrap>
  );
};

export default PostContent;

const StPostContentWrap = styled.div`
  padding: 0.8rem 0 0;
  input, textarea{
    width: 100%;
    margin-bottom: 0.8rem;
    padding: 0.5rem 0.875rem;
    font-size: 1.125rem;
    color: var(--title-color);
    border: none;
    background: var(--subBg-color);
    box-shadow: var(--shadow-style);
    outline: none;
  }
  textarea {
    height: 7.375rem;
  }
`
