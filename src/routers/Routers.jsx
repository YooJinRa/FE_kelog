import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainTrendingPage from '../page/MainTrendingPage';
import PostingPage from '../page/PostingPage';
import DetailPage from '../page/DetailPage';
import MainRecentPage from '../page/MainRecentPage';
import PostUpdatePage from '../page/PostUpdatePage';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainTrendingPage />} />
        <Route path='/post/' element={<PostingPage />} />
        <Route path='/post/:postId' element={<DetailPage />} />
        <Route path='/recent' element={<MainRecentPage />} />


        <Route path='/update/:postId' element={<PostUpdatePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
