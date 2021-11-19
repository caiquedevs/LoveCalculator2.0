import styled, { keyframes } from "styled-components";

const imgAnimate = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 240px;
  height: min-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    height: 40px;

    border: none;
    border-radius: 8px;
    background: #efefef;

    text-align: center;
    font-family: "Ubuntu", sans-serif;
    font-size: 16px;
    line-height: 18px;
    text-transform: capitalize;

    &::placeholder {
      color: #a2a2a2;
      opacity: 1;
    }
  }

  img.imgAnimate {
    animation: ${imgAnimate} 0.5s linear forwards;
  }

  img.imgHidden {
    display: none;
  }

  & div.btn-group {
    width: 100%;
    display: flex;
    justify-content: space-between;

    position: absolute;
    transform: translate(0px, -50px);
    z-index: 2;

    button {
      display: flex;
    }

    button.btnLeft {
      position: absolute;
      top: 0;
      left: 0;
    }

    button.btnRight {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;
