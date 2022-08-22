import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __getPostDetail } from '../redux/modules/postSlice';
import GlobalLayout from '../components/global/GlobalLayout';
import GlobalHeader from '../components/global/GlobalHeader';
import DetailContainer from '../components/detail/DetailContainer';
import CommentContainer from '../components/detail/CommentContainer';
import styled from 'styled-components';


const DetailPage = () => {
  const dispatch = useDispatch();
  const postDetail = useSelector((state) => state.postSlice.postDetail);
  const postId = useParams().postId;
  
  useEffect(() => {
    dispatch(__getPostDetail(postId));
  }, [dispatch, postId]);

  console.log(postId);
  console.log("========>", postDetail);
  return (
    <StDetailPageWrap>
      {/* user id header에 보내야함 */}
      <GlobalHeader />
      <GlobalLayout>
        <DetailContainer postDetail={postDetail} />
        <CommentContainer />
      </GlobalLayout>
    </StDetailPageWrap>
  );
};

export default DetailPage;

const StDetailPageWrap = styled.div`
  background-color: var(--subBg-color);
`;
