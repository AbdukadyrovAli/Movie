import React, { useRef, useState } from "react";
import { Input } from "../UI/Input/Input";
import { styled } from "styled-components";
import { Button } from "../UI/button/Button";

export const EditModal = ({
  handlerClose,
  updateMovie,
  el,
  EditRating,
  EditImg,
  EditTitle,
  setEditTitle,
  setEditImg,
  setEditRating,
}) => {
  // const [title, setTitle] = useState("");
  // const [img, setImg] = useState("");
  // const [rating, setRating] = useState("");

  const changeTitle = (e) => {
    setEditTitle(e.target.value);
  };

  const changeImage = (e) => {
    setEditImg(e.target.value);
  };
  const changeRating = (e) => {
    setEditRating(e.target.value);
  };

  const addMovieHandler = () => {
    const update = {
      EditTitle,
      EditImg,
      EditRating,
      id: el.id,
    };
    setEditImg("");
    setEditRating("");
    setEditTitle("");

    updateMovie(update);
    handlerClose();
  };

  return (
    <Container>
      <Input
        onChange={changeTitle}
        label={"text"}
        type="text"
        value={EditTitle}
        placeholder={"text"}
      />
      <Input
        placeholder={"url"}
        onChange={changeImage}
        label={"url"}
        type="text"
        value={EditImg}
      />
      <Input
        onChange={changeRating}
        label={"number"}
        type="number"
        value={EditRating}
        placeholder={"nunber"}
      />
      <ContainerButton>
        <Button bgColor={"#ff7200"} onClick={handlerClose}>
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
  height: 280px;
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
    width: 80px;
    height: 40px;
    border: none;
  }
`;
