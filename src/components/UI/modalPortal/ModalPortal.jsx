import React from "react";
import { styled } from "styled-components";
import { Button } from "../button/Button";
export const ModalPortal = ({ onCloseModal, onDeleteModalHandler }) => {
  return (
    <>
      <Backdrop onClick={onCloseModal}/>
      <StyledContaner>
        <h3>Вы хотите удалить?</h3>
        <Button onClick={onDeleteModalHandler}>Да</Button>
        <Button onClick={onCloseModal}>Нет</Button>
      </StyledContaner>
    </>
  );
};

const Backdrop = styled.div`
  position: fixed;
  z-index: 998;
  width: 100%;
  height: 100%;
  border-color: rgba(34, 33, 33, 0.75);
  top: 0;
  left: 0;
`;
const StyledContaner = styled.div`
  width: 400px;
  height: 400px;
  /* display: flex; */
  border-radius: 1rem;
  background-color: #f3ffd3;
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transition: translate(-50%, -50%);
`;
