import React from 'react'

const NextArrow = ({className, style, onClick}) => {
    return (
      <div
        className={className}
        style={{ 
            ...style, 
            display: "block", 
       
            position: "absolute", 
          
            right: "10px", 
            top: "50%", 
            transform: "translateY(-50%)", 
            zIndex: 10 
          }}
        onClick={onClick}
      />
    );
}

const PrevArrow = ({className, style, onClick}) => {
  return (
      <div
        className={className}
        style={{ 
            ...style, 
            display: "block", 
            
            position: "absolute", 
            left: "10px", 
            top: "50%", 
            transform: "translateY(-50%)", 
            zIndex: 10 
          }}
        onClick={onClick}
      />
    );
}

export { NextArrow, PrevArrow }

