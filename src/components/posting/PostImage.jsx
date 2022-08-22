import React from 'react';
import styled from 'styled-components';

const PostImage = () => {
  return (
    <StPostImageWrap>
      <button className='buttonWhite'>썸네일 업로드</button>
    </StPostImageWrap>
  );
};

export default PostImage;

const StPostImageWrap = styled.div`
  width: 50% !important;
  height: 195px;
  background-color: var(--grayBg-color);
  box-shadow: var(--shadow-style);
  text-align: center;
`