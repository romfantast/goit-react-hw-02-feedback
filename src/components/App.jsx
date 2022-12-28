import React, { Component } from 'react';

import css from './App.module.css';
import FeedbackCaption from './FeedbackCaption/FeedbackCaption';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleAddFeedback = name => {
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const percent = Math.round((good / (good + neutral + bad)) * 100);
    return percent;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={css.feedback}>
        <FeedbackCaption>How you satisfied with our service?</FeedbackCaption>
        <FeedbackOptions
          btns={Object.keys(this.state)}
          onAdd={this.handleAddFeedback}
        />
        <p className={css.statisticText}>Statistic</p>
        {total === 0 ? (
          <Notification message="There is no feedback yet..." />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </div>
    );
  }
}
