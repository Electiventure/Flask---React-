import React from 'react';
import { Container } from 'react-bootstrap';

function SentimentCounts({ sentimentCounts }) {
  return (
    <Container className="flex-grow-1">
      <div>
        <h2>Sentiment Counts:</h2>
        <ul>
          <li>Neutral: {sentimentCounts.neutral}</li>
          <li>Positive: {sentimentCounts.positive}</li>
          <li>Negative: {sentimentCounts.negative}</li>
        </ul>
      </div>
    </Container>
  );
}

export default SentimentCounts;
