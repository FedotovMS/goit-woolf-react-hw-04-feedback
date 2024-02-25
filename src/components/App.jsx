import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleClick = name => {
    setFeedback(prev => ({
      ...prev,
      [name]: prev[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return Math.round((good / total) * 100 || 0);
  };

  const positive = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];

  return (
    <div>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
        }
      />
      <Section
        title="Statistics"
        children={
          countTotalFeedback() ? (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={countTotalFeedback()}
              positivePercentage={positive}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )
        }
      />
    </div>
  );
}
