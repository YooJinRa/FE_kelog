import React from 'react';
import { Link } from 'react-router-dom';
import GlobalLayout from './GlobalLayout';
import styled from 'styled-components';
import detailHeaderLogo from '../../assets/images/detailHeaderLogo.png';
import { BsFillSunFill, BsSearch } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';


const GlobalHeader = ({ userDetail }) => {
  return (
    <StGlobalHeaderWrap>
      <GlobalLayout>
        <StHeaderContentBox>
          <h1>
            <Link to={`/`}>
              <img src={detailHeaderLogo} alt='logo' />
            </Link>
            <strong>{userDetail.account} .log</strong>
          </h1>
          <StHeaderRightWrap>
            <StLightDarkBox>
              <BsFillSunFill size='24' color='var(--title-color)' />
            </StLightDarkBox>
            <StSearchBox>
              <BsSearch size='18' color='var(--title-color)' />
            </StSearchBox>
            <Link to={`/post`}>
              <button 
                className='buttonNewPost'
              >
                새 글 작성
              </button>
            </Link>

            <StProfileBox>
              <p>
                {/* 로그인한 유저 정보 받아와야함. 주형님 머지하고 받아올 예정 */}
                <img src={userDetail.profileImg} alt="user profile image" />
              </p>
              <IoMdArrowDropdown />
            </StProfileBox>

          </StHeaderRightWrap>
        </StHeaderContentBox>
      </GlobalLayout>
    </StGlobalHeaderWrap>
  );
};

export default GlobalHeader;

const StGlobalHeaderWrap = styled.div`
  width:100%;
  height: 4rem;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
`;

const StHeaderContentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 img {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 1rem;
  }
  h1 strong {
    font-size: 1.3125rem;
    font-weight: 700;
    color:var(--title-color);
  }
`;

const StHeaderRightWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;

  .buttonNewPost {
    margin-right: 1.25rem;
    height: 2.2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    outline: none;
    font-weight: bold;
    word-break: keep-all;
    border: 1px solid var(--title-color);
    color: var(--title-color);
    background-color: var(--subBg-color);
    transition: all 0.125s ease-in 0s;
    cursor: pointer;
  }
  .buttonNewPost:hover {
    color: var(--bg-color);
    background-color: var(--title-color);
  }
`;

const StLightDarkBox = styled.div`
  padding: 1px 6px;
  margin-right: 0.25rem;
`;

const StSearchBox = styled.div`
  margin:0 0.7rem;
`;

const StProfileBox = styled.div`
  display: flex;
  align-items: center;
  p {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: var(--bg-color);
    object-fit: cover;
    margin-right: 0.25rem;
    overflow: hidden;
  }
  svg {
    color: var(--subText-color);
    font-size: 1.5rem;
    margin-right: -0.4375rem;
    transition: all 0.125s ease-in 0s;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;