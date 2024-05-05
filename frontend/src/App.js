import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';
import Form from './components/Form';
import Graph from './components/Graph';
import SentimentCounts from './components/SentimentCounts';

function App() {
  const [selectedDataset, setSelectedDataset] = useState('DutchBanglaBankFinbert.csv');
  const [selectedModel, setSelectedModel] = useState('lstm');
  const [plotUrl, setPlotUrl] = useState('');
  const [sentimentCounts, setSentimentCounts] = useState({
    neutral: 0,
    positive: 0,
    negative: 0
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleDatasetChange = (e) => {
    setSelectedDataset(e.target.value);
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/', {
        dataset: selectedDataset,
        model: selectedModel
      });
      setPlotUrl(response.data.plot_url);
      setSentimentCounts(response.data.sentiment_counts);
      setIsLoading(false);
      setSubmissionMessage('Submission successful');
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
      setSubmissionMessage('Submission failed');
    }
  };

  useEffect(() => {
    if (submissionMessage) {
      const timer = setTimeout(() => {
        setSubmissionMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submissionMessage]);

  return (
    <div className="d-flex flex-column vh-100">
      <AppNavbar />
      <Graph plotUrl={plotUrl} isLoading={isLoading} />
      <SentimentCounts sentimentCounts={sentimentCounts} />
      <Form
        selectedDataset={selectedDataset}
        selectedModel={selectedModel}
        onSubmit={handleSubmit}
        onChangeDataset={handleDatasetChange}
        onChangeModel={handleModelChange}
        isLoading={isLoading}
        submissionMessage={submissionMessage}
      />

      <Footer />
    </div>
  );
}

export default App;
