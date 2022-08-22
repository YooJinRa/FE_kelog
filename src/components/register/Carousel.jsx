import React, { useState } from 'react';
import ModalPortal from './Portal';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/modules/userSlice';

const Carousel = (props) => {
  const dispatch = useDispatch();

  const [modalOn, setModalOn] = useState(false);

  const handleModal = () => {
    setModalOn(!modalOn);
  };

  return (
    <>
      <div>
        {/* 헤더에서 로그인 버튼 클릭 시 */}
        <button onClick={handleModal}>로그인</button>
        <button
          onClick={() => {
            dispatch(logout());
          }}
        >
          로그아웃
        </button>
        <ModalPortal>{modalOn && <Modal onClose={handleModal} />}</ModalPortal>
      </div>
    </>
  );
};

export default Carousel;
