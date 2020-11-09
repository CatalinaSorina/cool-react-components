import styled, { css } from 'styled-components'

const StyledFormInput = styled.input(
  () => css`
    padding: 15px 20px;
    text-align: center;
    font: 18px inherit;
    letter-spacing: 1px;
    outline: none;
    margin: 15px auto;

    &[type='email'],
    &[type='text'] {
      width: 300px;
      color: #4e85af;
      border: 1px solid #bcdef7;
      transition: all 0.4s;

      &:focus {
        border-color: #4e85af;
      }

      @media only screen and (max-width: 700px) {
        width: 200px;
      }
    }

    &[type='submit'] {
      color: #ffffff;
      background: #68beff;
      border: 1px solid #68beff;
      transition: all 0.4s;

      &:hover {
        cursor: pointer;
        background: #4e85af;
        border-color: #4e85af;
      }

      &:disabled {
        cursor: default;
        background: #bcdef7;
        border-color: #bcdef7;
      }
    }

    @media only screen and (max-width: 700px) {
      display: flex;
    }
  `
)

export default StyledFormInput
