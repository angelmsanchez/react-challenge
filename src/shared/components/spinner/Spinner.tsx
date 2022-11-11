import React from 'react';

import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  animation: ${spin} 1s infinite linear;
  border: solid 2vmin transparent;
  border-radius: 50%;
  border-right-color: ${(props) => props.theme.main};
  border-top-color: ${(props) => props.theme.main};
  box-sizing: border-box;
  height: 20vmin;
  left: calc(50% - 10vmin);
  position: fixed;
  top: calc(50% - 10vmin);
  width: 20vmin;
  z-index: 1;

  &:before {
    animation: ${spin} 2s infinite linear;
    border: solid 2vmin transparent;
    border-radius: 50%;
    border-right-color: #3cf;
    border-top-color: #3cf;
    box-sizing: border-box;
    content: '';
    height: 16vmin;
    left: 0;
    position: absolute;
    top: 0;
    width: 16vmin;
  }

  &:after {
    animation: ${spin} 3s infinite linear;
    border: solid 2vmin transparent;
    border-radius: 50%;
    border-right-color: #6ff;
    border-top-color: #6ff;
    box-sizing: border-box;
    content: '';
    height: 12vmin;
    left: 2vmin;
    position: absolute;
    top: 2vmin;
    width: 12vmin;
  }
`;

export function Spinner(): JSX.Element {
  return <SpinnerContainer />;
}
