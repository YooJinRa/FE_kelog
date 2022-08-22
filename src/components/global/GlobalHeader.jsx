import React from 'react';
import styled from 'styled-components';
import GlobalLayout from './GlobalLayout';

const GlobalHeader = () => {
  return (
    <StGlobalHeaderWrap>
      <GlobalLayout>
        <StHeaderContentBox>
          <h1>로고<strong>작성자 아이디</strong></h1>
          <div>dark_light모드 / 검색 / 새글작성 / 프로필</div>
        </StHeaderContentBox>
      </GlobalLayout>
    </StGlobalHeaderWrap>
  );
};

export default GlobalHeader;

const StGlobalHeaderWrap = styled.header`
  width:100%;
  height: 4rem;
  background-color: yellow;
`;

const StHeaderContentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
