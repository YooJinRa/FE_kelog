import React from 'react';
import styled from 'styled-components';

const GlobalLayout = ({ children }) => {
  return <StGlobalLayoutWrap>{children}</StGlobalLayoutWrap>;
};

export default GlobalLayout;

const StGlobalLayoutWrap = styled.div`
  width: 1760px;
  margin: 0 auto;
`;
