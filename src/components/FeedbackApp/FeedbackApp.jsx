// import React, { Component } from 'react';
// import FeedbackCaption from '../FeedbackCaption/FeedbackCaption';
// import css from './FeedbackApp.module.css';
// import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
// import Statistics from '../Statistics/Statistics';
// import Notification from '../Notification/Notification';

// export default class FeedbackApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   handleAddFeedback = name => {
//     this.setState(prev => ({ [name]: prev[name] + 1 }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     const percent = Math.round((good / (good + neutral + bad)) * 100);
//     return isNaN(percent) ? 0 : percent;
//   };

//   render() {
//     const totalCount = this.countTotalFeedback();
//     return (
//       <div className={css.feedback}>
//         <FeedbackCaption>How you satisfied with our service?</FeedbackCaption>
//         <FeedbackOptions
//           btns={Object.keys(this.state)}
//           onAdd={this.handleAddFeedback}
//         />
//         <p className={css.statisticText}>Statistic</p>
//         {totalCount === 0 ? (
//           <Notification message="There is no feedback yet..." />
//         ) : (
//           <Statistics
//             options={this.state}
//             onTotal={totalCount}
//             onPositive={this.countPositiveFeedbackPercentage}
//           />
//         )}
//       </div>
//     );
//   }
// }
