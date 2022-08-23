import React, { useEffect } from 'react';
import styled from 'styled-components';
import MainPostCard from './MainPostCard';
import { useDispatch } from 'react-redux';
import { getData } from '../../redux/modules/mainPostSlice';

const MainContainer = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getData());
  // },[]);

  return (
    <Stwrapper>
      <div className='main'>
        <div className='main-box'>
          {/* get 받은거 map함수 이용해서 구현 */}
          <MainPostCard />
          <MainPostCard />
          <MainPostCard />
          <MainPostCard />
          <MainPostCard />
          <MainPostCard />
          <MainPostCard />
        </div>
      </div>
    </Stwrapper>
  );
};

export default MainContainer;

const Stwrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  .main {
    flex: 1 1 0%;
    .main-box {
      display: flex;
      margin: -1rem;
      flex-wrap: wrap;
    }
  }
`;
