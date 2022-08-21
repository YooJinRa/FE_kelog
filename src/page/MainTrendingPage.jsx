import React from 'react';
import GlobalLayout from '../components/global/GlobalLayout';
import MainContainer from '../components/main/MainContainer';
import styled from 'styled-components';

const MainTrendingPage = () => {
  return (
    <StMainTrendingPageWrap>
      <GlobalLayout>
        <MainContainer />
      </GlobalLayout>
    </StMainTrendingPageWrap>
  );
};

export default MainTrendingPage;

const StMainTrendingPageWrap = styled.div`
  border: 1px solid blue;
`;
