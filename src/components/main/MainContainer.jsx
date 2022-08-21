import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { __getPostAll } from '../../redux/modules/postSlice';
import styled from 'styled-components';
import MainPostCard from './MainPostCard';

const MainContainer = () => {
  const dispatch = useDispatch();
  const postAll = useSelector((state) => state.postSlice.post);

  useEffect(() => {
    dispatch(__getPostAll());
  }, [dispatch]);

  console.log(postAll);
  
  return (
    <StMainContainerWrap>
      MainContainer!!
      {
        postAll.map((post) => (
          <MainPostCard key={post.id} post={post} />
        ))
      }
    </StMainContainerWrap>
  );
};

export default MainContainer;

const StMainContainerWrap = styled.div`
  border: 1px solid red;
`