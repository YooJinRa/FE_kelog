import React, { useState } from 'react';
import GlobalLayout from './../components/global/GlobalLayout';
import GlobalHeaders from '../components/global/GlobalHeaders';
import MainRecentFilter from '../components/main/MainRecentFilter';
import MainRecentContainer from '../components/main/MainRecentContainer';

const MainRecentPage = () => {
  const [data, setData] = useState();
  const [isLogin, setIsLogIn] = useState();
  const [isToggle, setIsToggle] = useState(false);

  const userToken = localStorage.getItem('access-token')
  ? localStorage.getItem('access-token')
  : null;


  const onChangeData = (value) => {
    setData(value);
  };

  return (
    <>
      <GlobalHeaders
        isLogin={isLogin}
        setIsLogIn={setIsLogIn}
        isToggle={isToggle}
        setIsToggle={setIsToggle}
        userToken={userToken}
      />
      <GlobalLayout>
        <MainRecentFilter onChangeData={onChangeData} />
        <MainRecentContainer data={data} />
      </GlobalLayout>
    </>
  );
};

export default MainRecentPage;
