import React, { useEffect } from 'react';
import styled from 'styled-components';
import { __getPostDetail } from '../../redux/modules/postSlice';

const DetailContainer = ({ postDetail, tags }) => {
  console.log(tags);
  return (
    <StDetailContainer>
      <StPostDetailHeaderWrap>
        <h1>{postDetail.title}</h1>
        <p><strong>작성자 닉네임</strong> &#183; <span>{postDetail.createdAt}</span></p>
        <StPostDetailTagBox>
          {/* {
            tags.length > 0 &&
            tags.map((tag, index) => (
              
              <li key={tag+index}>{tag}</li>
            ))
          } */}
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
  width: 768px;
  margin: 0 auto;
  background-color: yellow;
`;

const StPostDetailHeaderWrap = styled.div`
  width: 100%;
  background-color: lemonchiffon;
`;
const StPostDetailTagBox = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: lime;
  li {
    background-color: white;
  }
`;

const StPostDetailImageBox = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

const StPostDetailContentBox = styled.div`
  width: 100%;
  background-color: skyblue;;
`;