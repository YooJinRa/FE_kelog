import React, { useState } from 'react';
import GlobalLayout from './../components/global/GlobalLayout';
import GlobalHeaders from '../components/global/GlobalHeaders';
import MainRecentFilter from '../components/main/MainRecentFilter';
import MainRecentContainer from '../components/main/MainRecentContainer';

const MainRecentPage = () => {
  const [data, setData] = useState();

  const onChangeData = (value) => {
    setData(value);
  };

  return (
    <GlobalLayout>
      <GlobalHeaders />
      <MainRecentFilter onChangeData={onChangeData} />
      <MainRecentContainer data={data} />
    </GlobalLayout>
  );
};

export default MainRecentPage;
