import React from 'react';
import { Container } from 'react-bootstrap';
import DatasetSelector from './DatasetSelector';
import ModelSelector from './ModelSelector';

function Form({ selectedDataset, selectedModel, onSubmit, onChangeDataset, onChangeModel, isLoading, submissionMessage }) {
  return (
    <Container className="flex-grow-1">
      <h1 className="mt-4">Stock Price Prediction</h1>
      {submissionMessage && <p>{submissionMessage}</p>}
      <form onSubmit={onSubmit}>
        <DatasetSelector value={selectedDataset} onChange={onChangeDataset} />
        <br />
        <ModelSelector value={selectedModel} onChange={onChangeModel} />
        <br />
        <button type="submit" className="btn btn-primary custom-button">Submit</button>
      </form>
    </Container>
  );
}

export default Form;
