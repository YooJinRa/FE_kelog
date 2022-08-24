import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FavoredProductTypePage() {
  // 저장할 이미지 리스트
  const [randomImageList, setRandomImageList] = useState([]);
  //  페이지 , 요청할 페이지
  const [page, setPage] = useState(1);
  // 관찰대상 (마지막 이미지)
  const [lastIntersectingImage, setLastIntersectingImage] = useState(null);

  const getRandomImageThenSet = async () => {
    console.log('fetching 함수 호출됨');
    try {
      const { data } = await axios.get(
        // limit은 pageSize
        `http://3.38.48.108/api/post?Category=NEW&page=1&size=20`
      );
      console.log(data);
      setRandomImageList(randomImageList.concat(data));
    } catch {
      console.error('fetching error');
    }
  };

  //observer 콜백함수
  const onIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      // 교차로 전한 , 즉 타겟(관찰대상)가 교차 상태에 들어오면
      if (entry.isIntersecting) {
        //뷰포트에 마지막 이미지가 들어오고, page값에 1을 더하여 새 fetch 요청을 보내게됨 (useEffect의 dependency배열에 page가 있음)
        setPage((prev) => prev + 1);
        // 현재 타겟(관찰대상)을 unobserve한다.
        observer.unobserve(entry.target);
      }
    });
  };

  //   페이짖가 바뀌면 이미지를 페칭한다.
  useEffect(() => {
    console.log('page ? ', page);
    getRandomImageThenSet();
  }, [page]);

  useEffect(() => {
    //observer 인스턴스를 생성한 후 구독
    let observer;
    if (lastIntersectingImage) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      //observer 생성 시 observe할 target 요소는 불러온 이미지의 마지막아이템(randomImageList 배열의 마지막 아이템)으로 지정
      observer.observe(lastIntersectingImage);
    }
    return () => observer && observer.disconnect();
  }, [lastIntersectingImage]);

  return (
    <>
      {/* ?.은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환합니다. */}
      {/* 앞의 평가 대상이 존재하지 않더라도(null) 에러가 발생하지 않는다. -> undefined를 반환한다. */}
      {randomImageList?.map((randomImage, index) => {
        if (index === randomImageList.length - 1) {
          return (
            <img
              key={randomImage.id}
              src={randomImage.download_url}
              alt='random'
              ref={setLastIntersectingImage}
              style={{
                borderRadius: 100,
              }}
            />
          );
        } else {
          return (
            <img
              key={randomImage.id}
              src={randomImage.download_url}
              alt='random'
            />
          );
        }
      })}
    </>
  );
}
