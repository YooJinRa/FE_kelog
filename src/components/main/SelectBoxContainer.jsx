import React from 'react';
import SelectBox from './SelectBox';

const OPTIONS = [
  { value: 'today', name: '오늘' },
  { value: 'week', name: '이번 주' },
  { value: 'month', name: '이번 달' },
  { value: 'year', name: '올해' },
];

const SelectBoxContainer = () => {
  return <SelectBox options={OPTIONS} defaultValue='apple'></SelectBox>;
};

export default SelectBoxContainer;
