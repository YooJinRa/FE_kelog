import React, { useState } from 'react';
import GlobalLayout from './../components/global/GlobalLayout';
import GlobalHeaders from '../components/global/GlobalHeaders';
import MainRecentFilter from '../components/main/MainRecentFilter';
import MainContainer from '../components/main/MainContainer';

const MainRecentPage = () => {
  const [data, setData] = useState();

  const onChangeData = (value) => {
    setData(value);
  };

  return (
    <GlobalLayout>
      <GlobalHeaders />
      <MainRecentFilter onChangeData={onChangeData} />
      <MainContainer data={data} />
    </GlobalLayout>
  );
};

export default MainRecentPage;
