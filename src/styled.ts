import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(180deg, #eac2cb 0%, #ebc7cf 100%);
`;

export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  height: 100vh;
  padding-top: 10vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-bottom: 30px;
    }

    figcaption {
      display: none;
    }

    span {
      position: absolute;
      transform: translate(0px, -20px);

      font-family: Uubuntu, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 46px;
      line-height: 54px;
      color: #ffffff;
    }
  }

  input {
    width: 100%;
    height: 40px;
    padding: 0 15px;
    margin-top: 10px;

    border: 3px solid transparent;
    border-radius: 5px;

    transition: 0.2s border-color;

    font-family: Ubuntu;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    text-transform: capitalize;

    color: #fd79a8;

    &::placeholder {
      color: #a2a2a2;
    }

    &:focus {
      border-color: #fd79a8;
    }
  }

  button {
    width: 100%;
    height: 45px;
    margin-top: 20px;

    border-radius: 8px;
    background-color: #fd79a8;

    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    text-transform: uppercase;

    color: #ffffff;
  }

  button:disabled {
    background-color: #d6d6d6;
  }

  button.btn-clear {
    margin-top: 10px;
    background-color: transparent;
    border: 3px solid #ffffff;
    color: #ffffff;
  }
`;
