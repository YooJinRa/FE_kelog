import React, { useState } from 'react';
import PostImage from './PostImage';
import PostContent from './PostContent';
import PostTag from './PostTag';
import styled from 'styled-components';

const PostingFormContainer = () => {
  // ::: 이미지 업로드 상태관리
  const [ compressedImageFile, setCompressedImageFile] = useState(null);
  const [ postInputs, setPostInputs ] = useState({
    title: "",
    content: "",
  });
  const [ tagList, setTagList ] = useState([]);
  console.log("___PostingForm_imageState ====> ", compressedImageFile);
  console.log("___PostingForm_contentState ====> ", postInputs.title, postInputs.content);
  console.log("___PostingForm_tagState ====> ", tagList);

  const onClickAddPost = (event) => {
    event.preventDefault();
    console.log("게시글을 업로드 해봅시다!");
    if(
      postInputs.title === '' ||
      postInputs.content === '' ||
      compressedImageFile === null
      // tag도 넣어야함
    ) {
      postInputs.title === '' && console.log("title을 입력해주어야 함");
      postInputs.content === '' && console.log("content를 입력해주어야 함");
      compressedImageFile === null && console.log("이미지를 입력해주어야 함");
    } else {
      console.log("유효성 검사 통과 ::: 서버로 데이터 전송!");

    }
  }

  return (
  <StPostingFormContainer>
    <div>
      <h3>포스트 올리기</h3>
      <PostImage 
        setCompressedImageFile={setCompressedImageFile}
      />
      <PostContent 
        postInputs={postInputs}
        setPostInputs={setPostInputs}
      />
      <PostTag
        tagList={tagList}
        setTagList={setTagList}
      />
      <StPostingButtonRow>
        <button className="buttonWhite">취소</button>
        <button 
          className="buttonPoint"
          onClick={onClickAddPost}
        >
          출간하기
        </button>
      </StPostingButtonRow>
    </div>
  </StPostingFormContainer>
  );
};

export default PostingFormContainer;

const StPostingFormContainer = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 100vh;
  padding: 10px 0;
  margin: 0 auto;

  div {
    width: 100%;
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
