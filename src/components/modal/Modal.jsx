import React, { useState } from "react";
import { Input } from "../UI/Input/Input";
import { styled } from "styled-components";
import { Button } from "../UI/button/Button";
export const Modal = ({ newMovie, setModal, closeHandler }) => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [rating, setRating] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeImage = (e) => {
    setImg(e.target.value);
  };
  const changeRating = (e) => {
    setRating(e.target.value);
  };

  const addMovieHandler = () => {
    const data = {
      title,
      img,
      rating,
      id: Math.random(),
    };
    if (title.trim() === "") {
      return;
    }
    newMovie(data);
    setImg("");
    setRating("");
    setTitle("");
    // setModal(false);
    closeHandler()
  };

  return (
    <Container>
      <Input
        onChange={changeTitle}
        type="text"
        value={title}
        placeholder={"text"}
      />
      <Input
        placeholder={"url"}
        onChange={changeImage}
        type="text"
        value={img}
      />
      <Input
        onChange={changeRating}
        type="number"
        value={rating}
        placeholder={"number"}
      />
      <ContainerButton>
        <Button bgColor={"#ff7200"} onClick={closeHandler} >
          Cancel
        </Button>
        <Button bgColor={"green"} onClick={addMovieHandler}>
          Add
        </Button>
      </ContainerButton>
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  width: 670px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #c2c0c0;
  padding: 20px;
  height: 230px;
  border-radius: 12px;
  color: black;
  input {
    height: 40px;
    width: 480px;
    display: flex;
    border-radius: 10px;
    margin-top: 10px;
  }
`;
const ContainerButton = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  margin-left: 25rem;
  button {
    border-radius: 12px;
    height: 40px;
    border: none;
  }
`;
