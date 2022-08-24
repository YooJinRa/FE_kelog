import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import MainPostCard from './MainPostCard';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/modules/mainPostSlice';
import 'react-intersection-observer';

/*
  무한 스크롤 구현 순서
  1.관찰 대상을 만들자 
  ->리스트의 다음에 빈 div태그를 생성하여 관찰 대상으로 설정 
  
  2.관찰자를 만들자
*/

const MainRecentContainer = ({ data }) => {
  const dispatch = useDispatch();
  console.log(data);

  // 리덕스 필터마다 state를 저장해두고
  // state에 맞는 데이터를 가져와서 뿌려줌

  // 최신(Recent) 페이지
  const mainData = useSelector((state) => state.post.post);

  // 최신 페이지 , useEffect에서 최신 데이터를 가져온다. , useSelector로 store의 데이터를 가져옴
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <Stwrapper>
      <div className='main'>
        <div className='main-box'>
          {mainData &&
            mainData.map((item) => <MainPostCard key={item.id} item={item} />)}
        </div>
      </div>
    </Stwrapper>
  );
};

export default MainRecentContainer;

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
