import React, { useState } from 'react';
import PostImage from './PostImage';
import PostContent from './PostContent';
import PostTag from './PostTag';
import styled from 'styled-components';

const PostingFormContainer = () => {
  // ::: 이미지 업로드 상태관리
  const [ compressedImageFile, setCompressedImageFile] = useState(null);
  console.log("___PostingForm_imageState ====> ", compressedImageFile);

  return (
  <StPostingFormContainer>
    <form>
      <h3>포스트 올리기</h3>
      <PostImage 
        setCompressedImageFile={setCompressedImageFile}
      />
      <PostContent />
      <PostTag />
      <StPostingButtonRow>
        <button className="buttonWhite">취소</button>
        <button className="buttonPoint">출간하기</button>
      </StPostingButtonRow>
    </form>
  </StPostingFormContainer>
  );
};

export default PostingFormContainer;

const StPostingFormContainer = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  width: 768px;
  height: 100vh;
  padding: 10px 0;
  margin: 0 auto;

  form {
    width: 50%;
    border: 1px solid green;
  }
`;

const StPostingButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;

  button {
    height: 2.5rem;
    font-size: 1.125rem;
    margin-left: 0.875rem;
    padding: 0px 1.125rem;
  }
`;
