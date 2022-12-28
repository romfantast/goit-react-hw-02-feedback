import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import FeedbackButton from '../FeedbackButton/FeedbackButton';

import css from './FeedbackOptions.module.css';
import { capitalizeFirstLetter } from 'components/helpers/capitalizeFirstLetter';

export default class FeedbackOptions extends Component {
  btnsNames = this.props.options.map(name => capitalizeFirstLetter(name));
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <div className={css.btnsWrapper}>
        {this.btnsNames.map(btnName => (
          <button
            type="button"
            key={btnName}
            className={`${css.feedbackBtn + ' ' + css[btnName.toLowerCase()]}`}
            onClick={() => onLeaveFeedback(btnName.toLowerCase())}
          >
            {capitalizeFirstLetter(btnName)}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
