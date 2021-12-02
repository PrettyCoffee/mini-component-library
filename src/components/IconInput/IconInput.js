import React from 'react';
import styled, {css} from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const getInputDimensions = (size) => {
  const height = size === "small" ? "24px" : "36px";
  const padding = size === "small" ? "4px" : "8px";
  const fontSize = size === "small" ? "14px" : "18px";
  const borderSize = size === "small" ? "1px" : "2px";

  return css`
    height: ${height};
    padding-top: ${padding};
    padding-bottom: ${padding};
    padding-left: ${height};
    font-size: ${fontSize};
    box-shadow: inset 0 -${borderSize} 0 ${COLORS.black};
  `;
}

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  color: ${COLORS.gray700};
  :hover {
    color: black;
  }
`;

const Input = styled.input`
  ${({size, width}) => css`
    width: ${width}px;
    border: none;
    color: inherit;
    ${getInputDimensions(size)}
    
    ::placeholder{
      color: ${COLORS.gray500}
    }
    :focus{
      outline-offset: 2px;
    }
  `}
`;

const InputIcon = styled(Icon)`
  position: absolute;
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <Wrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
    <Input type="text" placeholder={placeholder} width={width} size={size}/>
    <InputIcon id={icon} size={size === "small" ? 16 : 24}/>
  </Wrapper>;
};

export default IconInput;
