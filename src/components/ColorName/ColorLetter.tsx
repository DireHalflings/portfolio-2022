import React from 'react';

type ColorLetterProps = {
  bgColor: string,
  letter: string
};

const ColorLetter:React.FC<ColorLetterProps> = ({ bgColor, letter }) => <div className="color-name__letter" style={ { backgroundColor: bgColor } }>{ letter }</div>
export default ColorLetter;