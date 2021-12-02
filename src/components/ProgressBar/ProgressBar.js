/* eslint-disable no-unused-vars */
import React from 'react';
import styled, {css} from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const getBarDimensions = (size) => {
  const height =
    size === "large" ? "24px" :
    size === "medium" ? "12px" :
    "8px";
  const padding = size === "large" ? "4px" : "0";
  const radius = size === "large" ? "8px" : "4px";

  return css`
    height: ${height};
    padding: ${padding};
    border-radius: ${radius};
  `;
}

const Wrapper = styled.div`
  position: relative;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  ${({size}) => getBarDimensions(size)}
`;

const Filling = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  ::before {
    content: "";
    display: block;
    background-color: ${COLORS.primary};
    height: 100%;
    width: ${({value}) => value}%;
  }
`;

const ProgressBar = ({ value, size }) => {
  return <Wrapper
    size={size}
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <Filling value={value} />
    <VisuallyHidden>{value} %</VisuallyHidden>
  </Wrapper>;
};

export default ProgressBar;
