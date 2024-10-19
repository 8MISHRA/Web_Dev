// src/components/IdeaTracker.jsx

import React, { useState } from 'react';
import './ideaTracker.css';

const IdeaTracker = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [ideas, setIdeas] = useState([]);

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || description.trim() === '') {
      setError('Both title and description are required.');
      return;
    }

    const newIdea = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    };

    setIdeas([newIdea, ...ideas]);

    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <div className="idea-tracker-container">
      <h2>Idea Tracker</h2>
      <form onSubmit={handleSubmit} className="idea-form">
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="title">Idea Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your idea title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Idea Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter your idea description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit Idea</button>
      </form>

      <div className="ideas-list">
        <h3>Submitted Ideas</h3>
        {ideas.length === 0 ? (
          <p>No ideas submitted yet.</p>
        ) : (
          <ul>
            {ideas.map((idea) => (
              <li key={idea.id} className="idea-item">
                <h4>{idea.title}</h4>
                <p>{idea.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default IdeaTracker;
