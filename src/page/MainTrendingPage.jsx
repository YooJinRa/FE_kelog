import React, { useState } from 'react';
import GlobalLayout from './../components/global/GlobalLayout';
import GlobalHeaders from '../components/global/GlobalHeaders';
import MainFilter from '../components/main/MainFilter';
import MainContainer from '../components/main/MainContainer';

const MainTrendingPage = () => {
  const [data, setData] = useState();

  const onChangeData = (value) => {
    setData(value);
  };

  return (
    <GlobalLayout>
      <GlobalHeaders />
      <MainFilter onChangeData={onChangeData} />
      <MainContainer data={data} />
    </GlobalLayout>
  );
};

export default MainTrendingPage;
