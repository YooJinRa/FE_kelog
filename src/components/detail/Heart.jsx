import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';
import { BsShareFill } from 'react-icons/bs';
import styled from 'styled-components';

const Heart = ({postDetail}) => {
  const [ clickHeartOn, setClickHeartOn ] = useState(postDetail.heartPush); 
  const [ postHeartCount, setPostHeartCount ] = useState(postDetail.heartCount);


  const location = useLocation();
  useEffect(() => {
    console.log("=======>location!!!!", location);
  }, [location]);
  const URL = {
    BASE: process.env.REACT_APP_BASE_URL,
    CLIENT: process.env.REACT_APP_CLIENT_URL,
  };
  const USER = {
    AUTHORIZATION: process.env.REACT_APP_CLIENT_AUTHORIZATION,
  };
  // ::: 링크 복사기능
  const handleCopyClicpBoard = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      alert("링크 복사 성공");
    } catch (error) {
      alert("링크 복사 실패");
    }
  }
  const onClickHeart = async() => {
    // 게시글 불러올때 해당유저가 해당게시글에 하트를 눌렀는지 안눌렀는지 확인
    
    const heartResponse = await axios.post(`${URL.BASE}api/postheart/${postDetail.id}`, {}, {
      headers: {
        Authorization: `${USER.AUTHORIZATION}`,
      }
    });

    console.log("heartResponseData", heartResponse.data);

    setClickHeartOn(Boolean(heartResponse.data.result));
    setPostHeartCount(heartResponse.data.data);
  }

  console.log(clickHeartOn);

  return (
    <StPostLeftMenuBox>
      <StHeartIcon 
        className='round'
        clickHeartOn={clickHeartOn}
        onClick={onClickHeart}
      >
        <FaHeart size="24" />
      </StHeartIcon>
      <div className='heartCount'>
        {postHeartCount}
      </div>
      <div 
        className='sharedLinkIcon round'
        onClick={() => handleCopyClicpBoard(`${URL.CLIENT}${location.pathname}`)}>
        <BsShareFill size="24" />
      </div>
    </StPostLeftMenuBox>
  );
};

export default Heart;


const StPostLeftMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 112px;
  left: 50%;
  margin-left: -470px;
  width: 4rem;
  padding: 0.5rem;
  background-color: var(--bg-color);
  border: var(--border-style);
  border-radius: 2rem;

  .round {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    border: var(--subBorder-style);
    cursor: pointer;
  }
  .round:hover {
    border: 1px solid var(--title-color);
    transform: scale(1);
    svg {
      color: var(--title-color);
    }
  }
  .sharedLinkIcon {
    background-color: var(--subBg-color);
    color: var(--subText-color);
  }
  .heartCount {
    color: var(--text-color);
    font-size: 0.75rem;
    font-weight: 700;
    margin-top: 0.5rem;
    margin-bottom: 1rem;

  }
`;

const StHeartIcon = styled.div`
  background-color: ${
    ({clickHeartOn}) => clickHeartOn===true ? 'var(--primary-color)':'var(--subBg-color)'
  };
  svg {
    color: ${
      ({clickHeartOn}) => clickHeartOn===true ? 'var(--subBg-color)':'var(--subText-color)'
    };
  }
`;