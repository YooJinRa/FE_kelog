import React, { useState } from 'react';
import imageCompression from "browser-image-compression";
import styled from 'styled-components';
import { AiOutlinePicture } from 'react-icons/ai';

const PostImage = ({ setCompressedImageFile }) => {
  const [ selectedPostImage, setSelectedPostImage ] = useState(null);

  // ::: 이미지 리사이징(Resizing)
  const compressImageAndGetImageFile = async(postImageFile) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    const compressedFile = await imageCompression(postImageFile, options);
    return compressedFile;
  }

  // ::: 이미지 미리보기(Image Preview)
  const onChangePostImageFile = async(event) => {
    const postImageFile = event.target.files[0];
    try {
      const compressedFile = await compressImageAndGetImageFile(postImageFile);
      setCompressedImageFile(compressedFile);
      const finalCompressedImage = await imageCompression.getDataUrlFromFile(
        compressedFile
      );
      setSelectedPostImage(finalCompressedImage);
    } catch (error) {
      console.log("__PostImage_uploadImageError ::", error);
      alert("이미지를 업로드 하는데 문제가 생겼습니다. 다시 시도해주세요!");
    }
  }

  return (
    <StPostImageWrap>
      <AiOutlinePicture size="110" color="#868E96" />
      <label
        className='buttonWhite'
        htmlFor='inputPostImageFile'
      >
        썸네일 업로드
      </label>
      <input 
        id="inputPostImageFile"
        onChange={onChangePostImageFile}
        type='file'
        accept="image/jpg, image/jpeg, image/png"
        style={{ display : 'none' }}
      />
      {selectedPostImage && <StPreviewImage src={selectedPostImage} alt='preview' />}
    </StPostImageWrap>
  );
};

export default PostImage;

const StPostImageWrap = styled.div`
  position:relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: var(--grayBg-color);
  box-shadow: var(--shadow-style);
  text-align: center;
  overflow: hidden;

  label {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 2%) 0px 0px 4px;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.25rem 2rem;
    outline: none;
    border: none;
    transition: all 0.125s ease-in 0s;
    cursor: pointer;
    margin-top: 1rem;
  }
`;

const StPreviewImage = styled.img`
  position: absolute;
  width: 100%;
`