import styled, { css } from 'styled-components';

const StyledFormInput = styled.input(
  ({
    styledComponents,
    textEmailStyle,
    // { textColor = null, borderColor = null, focusColor = null },
    submitStyle
    // { color = null, background = null, hoverBackground = null, disabledBackground = null }
  }) => css`
    padding: 15px 20px;
    text-align: center;
    font: 18px inherit;
    letter-spacing: 1px;
    outline: none;
    margin: 15px auto;

    &[type='email'],
    &[type='text'] {
      width: 300px;
      color: ${(textEmailStyle && textEmailStyle.textColor) || '#4e85af'};
      border: 1px solid
        ${(textEmailStyle && textEmailStyle.borderColor) || '#bcdef7'};
      transition: all 0.4s;

      &:focus {
        border-color: ${(textEmailStyle && textEmailStyle.focusColor) ||
        '#4e85af'};
      }

      @media only screen and (max-width: 700px) {
        width: 200px;
      }
    }

    &[type='submit'] {
      color: ${(submitStyle && submitStyle.color) || '#ffffff'};
      background: ${(submitStyle && submitStyle.background) || '#68beff'};
      border: 1px solid ${(submitStyle && submitStyle.background) || '#68beff'};
      transition: all 0.4s;

      &:hover {
        cursor: pointer;
        background: ${(submitStyle && submitStyle.hoverBackground) ||
        '#4e85af'};
        border-color: ${(submitStyle && submitStyle.hoverBackground) ||
        '#4e85af'};
      }

      &:disabled {
        cursor: default;
        background: ${(submitStyle && submitStyle.disabledBackground) ||
        '#bcdef7'};
        border-color: ${(submitStyle && submitStyle.disabledBackground) ||
        '#bcdef7'};
      }
    }

    @media only screen and (max-width: 700px) {
      display: flex;
    }

    ${styledComponents};
  `
);

export default StyledFormInput;
