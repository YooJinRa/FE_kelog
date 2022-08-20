import React from 'react';
import styled from 'styled-components';

const PostTag = () => {
  return (
    <StPostTagWrap>
      <input type="text" placeholder="태그를 입력해주세요" />
    </StPostTagWrap>
  );
};

export default PostTag;

const StPostTagWrap = styled.div`
  input {
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
`;