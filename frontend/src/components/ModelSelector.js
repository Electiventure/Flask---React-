import React from 'react';

function ModelSelector({ value, onChange }) {
  return (
    <label>
      Select Model:
      <select value={value} onChange={onChange}>
        <option value="lstm">LSTM</option>
        <option value="gru">GRU</option>
      </select>
    </label>
  );
}

export default ModelSelector;
