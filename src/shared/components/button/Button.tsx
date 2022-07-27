import React from 'react';

import styled from 'styled-components';

const ButtonContainer = styled.button`
  background-image: linear-gradient(135deg, ${props => props.theme.main}, ${props => props.theme.secondary});
  border-radius: 6px;
  box-sizing: border-box;
  color: ${props => props.theme.main};
  min-height: 50px;
  font-size: 1rem;
  font-weight: 600;
  padding: 4px;
  position: relative;
  text-decoration: none;
  min-width: 220px;
  z-index: 2;
  border-color: ${props => props.theme.greyLight};
  cursor: pointer;
`;

const SpanStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  min-height: 40px;
  transition: background 0.5s ease;
  min-width: 100%;
  background-color: #ffffff;
  
  &:hover {
    background: transparent;
    color: #ffffff;
  }
`;

interface Props {
  children: JSX.Element;
  disabled?: boolean;
  handleClick?: () => void;
}

export function Button(props: Props): JSX.Element {
  const {
    children,
    disabled = false,
    handleClick,
  } = props;

  return (
    <ButtonContainer onClick={handleClick} disabled={disabled}>
      <SpanStyled>
        {children}
      </SpanStyled>
    </ButtonContainer>
  );
}
