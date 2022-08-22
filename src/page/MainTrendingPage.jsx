import React from 'react';
import GlobalLayout from './../components/global/GlobalLayout';
import GlobalHeaders from '../components/global/GlobalHeaders';
import MainFilter from '../components/main/MainFilter';
import MainContainer from '../components/main/MainContainer';

const MainTrendingPage = () => {
  return (
    <GlobalLayout>
      <GlobalHeaders />
      <MainFilter />
      <MainContainer />
    </GlobalLayout>
  );
};

export default MainTrendingPage;
