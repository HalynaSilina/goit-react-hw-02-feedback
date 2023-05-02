import React, { Component } from 'react';
import FeedbackWidget from './FeedbackWidget/FeedbackWidget';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleAddNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleAddBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
 
    return (
      <section>
        <h2>Please, leave feedback</h2>
        <FeedbackWidget
          state={this.state}
          onAddGoodReview={this.handleAddGoodFeedback}
          onAddNeutralReview={this.handleAddNeutralFeedback}
          onAddBadReview={this.handleAddBadFeedback}
        />
      </section>
    );
  }
}

export default App;
