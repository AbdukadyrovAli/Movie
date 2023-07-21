import React, { useState } from "react";
import { Button } from "../UI/button/Button";
import { styled } from "styled-components";
import { EditModal } from "../modal/EditModal";
import { ModalPortal } from "../UI/modalPortal/ModalPortal";
export const MainContent = ({ el, setMovie, updateMovie, movie }) => {
  const [isModal, setIsModal] = useState(false);
  const [isModalPortal, setIsModalPortal] = useState(false);
  const [EditTitle, setEditTitle] = useState("");
  const [EditImg, setEditImg] = useState("");
  const [EditRating, setEditRating] = useState("");

  const isModalCloseHandler = () => {
    setIsModalPortal((prevState) => !prevState);
  };
  const onDeleteModalHandler = (id) => {
    const filterTodo = movie.filter((item) => item.id !== el.id);
    setMovie(filterTodo);
    setIsModalPortal(false);
  };
  const openModal = () => {
    console.log(el);
    setIsModal(true);
    setEditTitle(el.title);
    setEditImg(el.img);
    setEditRating(el.rating);
  };
  const handlerClose = () => {
    setIsModal(false);
  };

  return (
    <>
      <Container>
        {isModal && (
          <EditModal
            handlerClose={handlerClose}
            updateMovie={updateMovie}
            el={el}
            setEditImg={setEditImg}
            setEditTitle={setEditTitle}
            setEditRating={setEditRating}
            EditTitle={EditTitle}
            EditImg={EditImg}
            EditRating={EditRating}
          />
        )}

        <MiniContainer>
          <img src={el.img} alt="" />
          <Title>{el.title}</Title>
          <ButtonContainer>
            <Rating>{el.rating}/5 stars</Rating>
            <Button onClick={isModalCloseHandler} bgColor={"red"}>
              Delete
            </Button>
            <Button onClick={() => openModal(el)} bgColor={"blue"}>
              Edit
            </Button>
          </ButtonContainer>
        </MiniContainer>
      </Container>
      {isModalPortal && (
        <ModalPortal
          onCloseModal={isModalCloseHandler}
          onDeleteModalHandler={onDeleteModalHandler}
        />
      )}
    </>
  );
};
const Rating = styled.h3`
  background-color: #f8e223;
  color: #fff;
  border-radius: 12px;
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.p`
  display: flex;
  width: 100px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;
const MiniContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: -6px -4px 29px 13px rgba(34, 60, 80, 0.2);
  width: 700px;
  height: 190px;
  img {
    width: 200px;
    height: 150px;
    border-radius: 10px;
  }
  button {
    border-radius: 12px;
    color: #fff;
    border: none;
    height: 40px;
    width: 100px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
