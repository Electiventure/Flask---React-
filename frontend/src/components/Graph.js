import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

function Graph({ plotUrl, isLoading }) {
  return (
    <Container className="flex-grow-1">
      <h2>Predicted vs. Actual Prices</h2>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : plotUrl ? (
        <img src={`data:image/png;base64,${plotUrl}`} alt="Predicted vs. Actual Prices" />
      ) : (
        <p>No data available</p>
      )}
    </Container>
  );
}

export default Graph;
