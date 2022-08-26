import React from 'react';
import styled from 'styled-components';

const GlobalLayout = ({ children }) => {
  return <StGlobalLayoutWrap>{children}</StGlobalLayoutWrap>;
};

export default GlobalLayout;

const StGlobalLayoutWrap = styled.div`
  width: 1760px;
  margin: 0 auto;

  @media (max-width: 1919px){
    width: 1376px;
  }
  @media (max-width: 1440px){
    width: 1024px;
  }
  @media (max-width: 1056px){
    width: calc(100% - 2rem);
  }
`;
