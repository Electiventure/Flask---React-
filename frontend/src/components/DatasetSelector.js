import React from 'react';

function DatasetSelector({ value, onChange }) {
  return (
    <label>
      Select Dataset:
      <select value={value} onChange={onChange}>
        <option value="DutchBanglaBankFinbert.csv">Dutch Bangla Bank</option>
        <option value="CityBankFinbert.csv">City Bank</option>
        {/* Add more options for different datasets */}
      </select>
    </label>
  );
}

export default DatasetSelector;
