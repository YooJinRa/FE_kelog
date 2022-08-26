import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import MainPostCard from './MainPostCard';
import { useDispatch, useSelector } from 'react-redux';
import { getRecentData } from '../../redux/modules/mainPostSlice';
import 'react-intersection-observer';
import axios from 'axios';

const MainRecentContainer = ({ data }) => {
  const dispatch = useDispatch();

  // 저장할 데이터 리스트
  const [randomData, setRandomData] = useState([]);

  // 페이지
  const [page, setPage] = useState(1);

  // 관찰대상(entry)(마지막 이미지)
  const [lastIntersectingData, setLastIntersectingData] = useState(null);

  //fetching 함수
  const getRandomData = async () => {
    console.log('fetching 함수 호출');
    try {
      const { data } = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=7`
      );
      console.log(data);
      setRandomData(randomData.concat(data));
    } catch (error) {
      console.log(error);
    }
  };

  //observe 콜백 함수
  const onIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      // 교차로 전한 , 즉 타겟(관찰대상)가 교차 상태에 들어오면
      if (entry.isIntersecting) {
        //뷰포트에 마지막 이미지가 들어오고, page값에 1을 더하여 새 fetch 요청을 보내게됨 (useEffect의 dependency배열에 page가 있음)
        setPage((prev) => prev + 1);
        // 현재 타겟(관찰대상)을 unobserve한다.
        observer.unobserve(entry.taret);
      }
    });
  };

  // 페이지가 바뀌면 새로운 데이터를 패칭한다.
  useEffect(() => {
    console.log('page ?', page);
    getRandomData();
  }, [page]);

  useEffect(() => {
    let observer;
    if (lastIntersectingData) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(lastIntersectingData);
    }
    return () => observer && observer.disconnect();
  }, [lastIntersectingData]);

  // 최신(Recent) 페이지
  // 최신 페이지

  useEffect(() => {
    dispatch(getRecentData());
  }, []);

  const recent = useSelector((state) => state.post.recentPost);
  console.log(recent);
  // 최신 페이지 , useEffect에서 최신 데이터를 가져온다. , useSelector로 store의 데이터를 가져옴

  return (
    <Stwrapper>
      <div className='main'>
        <div className='main-box'>
          {recent?.map((item, index) => {
            if (index === randomData.length - 1) {
              return (
                <MainPostCard
                  key={item.id}
                  item={item}
                  ref={setLastIntersectingData}
                />
              );
            } else {
              return <MainPostCard key={item.id} item={item} />;
            }
          })}
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
