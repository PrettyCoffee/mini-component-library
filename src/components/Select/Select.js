import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const NativeSelect = styled.select`
  position: absolute;
  inset: 0;
  opacity: 0;
  width: 100%;
  cursor: pointer;
`;

const SelectFace = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0 16px;
  gap: 8px;
  border-radius: 8px;
  
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  } 
  
  ${NativeSelect}:focus-visible + & {
    outline: solid 2px ${COLORS.gray700};
  }
`;

const Label = styled.span`
  padding: 12px 0;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <SelectFace>
        <Label>{displayedValue}</Label>
        <Icon id='chevron-down' />
      </SelectFace>
    </Wrapper>
  );
};

export default Select;
