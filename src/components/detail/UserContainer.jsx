import React from 'react';
import { __getUserDetail } from '../../redux/modules/postSlice';
import { FaGithub } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import styled from 'styled-components';

const UserContainer = ({userDetail}) => {

  console.log("userDetail:::::", userDetail);
  return (
  <StUserContainer>
    <StUserInfoBox>
      <p><img src={userDetail.profileImg} alt={`${userDetail.username} Profile Image`} /></p>
      <dl>
        <dt>{userDetail.username}</dt>
        <dd>{userDetail.userComment}</dd>
      </dl>
    </StUserInfoBox>
    <p className='line'></p>
    <StLinkedBox>
      <li>
        <FaGithub />
      </li>
      <li>
        <MdHome />
      </li>
      <li>
        <GrMail />
      </li>
    </StLinkedBox>
  </StUserContainer>);
};

export default UserContainer;

const StUserContainer = styled.div`
  width: 768px;
  margin: 16rem auto 6rem;

  .line {
    width: 100%;
    height: 1px;
    background-color: var(--grayBg-color);
    margin: 2rem 0 1.5rem;
  }
`;

const StUserInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: var(--shadow-style);
    overflow: hidden;
    background-color: var(--bg-color);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  dl {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
  }
  dt {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 700;
    color: var(--title-color);
  }
  dd {
    font-size: 1.125rem;
    line-height: 1.5;
    color: var(--text-color);
    margin-top: 0.25rem;
    letter-spacing: -0.004em;
    white-space: pre-wrap;
  }
`;

const StLinkedBox = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  li {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    cursor: pointer;
  }
  svg {
    width: 2rem;
    height: 2rem;
    color: var(--subText-color);
  }
`;
