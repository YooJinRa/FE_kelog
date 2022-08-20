import React from 'react';
import GlobalLayout from "../components/global/GlobalLayout";
import PostingFormContainer from '../components/posting/PostingFormContainer';

const PostingPage = () => {
  return (
    <GlobalLayout>
      <PostingFormContainer />
    </GlobalLayout>
  );
};

export default PostingPage;
