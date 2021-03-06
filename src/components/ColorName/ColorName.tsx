import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ColorLetter from './ColorLetter';

type ColorNameProps = {
  text: string,
  offSet: number
};

const colorDict: Array<string> = [
  '#149bda',
  '#163c83',
  '#0ccff1',
  '#8ccbcf',
  '#54678f'
];

const ColorName:React.FC<ColorNameProps> = ({ text, offSet }) => {
  
  const navigation = useNavigate();

  const getColor = (i: number) => {
    return colorDict[(i + offSet)%colorDict.length];
  }

  const handleOnClick = () => {
    navigation('/');
  }
  
  return (
    <div className="color-name" onClick={ handleOnClick }>
      {
        text.split('').map((letter, i) => <ColorLetter key={ letter + i } bgColor={ getColor(i) } letter={ letter } />)
      }
    </div>
  );
};

export default ColorName;