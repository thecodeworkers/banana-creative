import React from 'react';

interface toggleProps {
  width?: string,
  fill?: string,
  className?: string,
	style?: object
}

const ToggleButton: React.FC<toggleProps> = ({width, fill, className, style}) => (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.000000 139.000000" preserveAspectRatio="xMidYMid meet"
    width={ width || "100%" }
    fill={ fill || "#162935" }
    className={ className || "" }
		style={ style || {} }
		id='svg'
  >
    <g transform="translate(0.000000,139.000000) scale(0.100000,-0.100000)" stroke="none">
      <path d="M30 1300 l0 -60 895 0 895 0 0 60 0 60 -895 0 -895 0 0 -60z" />
      <path d="M30 700 l0 -60 895 0 895 0 0 60 0 60 -895 0 -895 0 0 -60z"/>
      <path d="M30 100 l0 -60 670 0 670 0 0 60 0 60 -670 0 -670 0 0 -60z"/>
    </g>
  </svg>
)

export default ToggleButton;

