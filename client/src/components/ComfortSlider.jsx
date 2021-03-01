import React from 'react';
import styled from 'styled-components';
import Slider from './Slider.jsx';

const ComfortSlider = (value) => {
  const TotalComfort = styled.div`
    width: 100%;
    display: block;
    font-size: 11px;
    font-weight: bold;
    margin-bottom: 18px;
    `;

  return (
    <div>
      <TotalComfort name="Comfort">
        <div style={{ fontWeight: 'normal', textAlign: 'left', marginBottom: '7px', color: '#111', fontSize: '17px', marginTop: '4px', display: 'flex' }}>Comfort</div>
        <div>{Slider(value)}</div>
        <div>
          <div style={{ display: 'flex', textAlign: 'left', fontWeight: 'normal', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '14px' }}>Runs small</div>
          <div style={{ textAlign: 'right', position: 'relative', bottom: 12, fontWeight: 'normal', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '14px' }}>Runs Big</div>
        </div>
      </TotalComfort>
    </div>
  );
};

export default ComfortSlider;
