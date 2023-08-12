import React from "react";

const Label = ({ text }) => {
  return (
    <div style={{
      cursor: 'pointer',
      fontFamily: 'Open Sans',
      fontSize: '12px',
      textAlign: 'center',
    }}>
      {text}
    </div>
  )
}

export const LabelBox = ({ textTop, textBottom, labelTop, labelBottom }) => {
  return (
    <div>
      {labelTop}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        width: '120.85px',
        height: '143px',
        borderRadius: '12px',
        border: '2px solid #000',
        background: '#F2F2F2',
      }}>
        <Label text={textTop} />
        <div style={{
          height: '80px',
          width: '80px',
          backgroundColor: '#bbb',
          borderRadius: '50%',
          display: 'inline-block',
        }}>
        </div>
        <Label text={textBottom} />
      </div>
      {labelBottom}
    </div>
  )
}