import styled, { css } from 'styled-components';

export const DotsFormHolder = styled.div(
  ({ topDots }) => css`
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #f0f8ff;
    overflow: hidden;
    ${!topDots &&
    css`
      flex-direction: column-reverse;
    `};
  `
);

export const DotsHolder = styled.div(
  () => css`
    margin: 80px 10px 50px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  `
);

export const DotForm = styled.div(
  ({ active }) => css`
    margin: 8px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #bcdef7;
    border: 1px double #bcdef7;
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
      box-shadow: 0 0 4px 2px #4e85af;
    }
    ${active &&
    css`
      background: #68beff;
      box-shadow: 0 0 4px 1px #68beff;
      &:hover {
        background: #4e85af;
        border-color: #4e85af;
      }
    `}
  `
);
export const TabsHolder = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 0.5fr 4fr 0.5fr;
  `
);

export const DotsFormTab = styled.div(
  ({
    activeTab,
    width,
    height,
    padding,
    margin,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    background,
    borderRadius,
    animation
  }) => css`
    margin: ${margin || 0};
    padding: ${padding || '1%'};
    width: ${width || '100%'};
    height: ${height || '100%'};
    display: ${activeTab ? display || 'flex' : 'none'};
    flex-direction: ${flexDirection || 'column'};
    justify-content: ${justifyContent || 'center'};
    align-items: ${alignItems || 'center'};
    background: ${background || 'transparent'};
    border-radius: ${borderRadius || '20px'};
    animation: ${animation || 'intro 1s ease-out'};
    animation-fill-mode: backwards;
    transform-style: preserve-3d;
    transition: all 5s;
    transition-delay: 5s;
    /* transition: all ${animation}; */

    @keyframes intro {
      from {
        opacity: 0;
        transform: perspective(500px) translate3d(0, 0, -50px);
      }

      to {
        opacity: 1;
        transform: none;
      }
    }

    @keyframes enterRight {
      from {
        opacity: 0;
        transform: perspective(500px) translate3d(20%, 0, 0);
      }

      to {
        opacity: 1;
        transform: none;
      }
    }

    @keyframes enterLeft {
      from {
        opacity: 0;
        transform: perspective(500px) translate3d(-20%, 0, 0);
      }

      to {
        opacity: 1;
        transform: none;
      }
    }

    @keyframes exitRight {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        transform: perspective(500px) translate3d(100%, 0, -100px);
      }
    }

    @keyframes exitLeft {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
        transform: perspective(500px) translate3d(-100%, 0, -100px);
      }
    }
  `
);

export const ArrowButton = styled.button(
  () => css`
    border: none;
    background: transparent;
    color: #68beff;
    font: 30px Arial;
    text-shadow: 0 0 8px #bcdef7;
    outline: none;
    border-radius: 5px;
    transition: all 0.4s;
    cursor: pointer;
    &:hover:not(:disabled) {
      color: #4e85af;
    }
    &:disabled {
      color: #bcdef7;
      cursor: default;
    }
  `
);
