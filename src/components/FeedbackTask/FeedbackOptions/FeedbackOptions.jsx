import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackButton from '../FeedbackButton/FeedbackButton';

import css from './FeedbackOptions.module.css';
import { capitalizeFirstLetter } from 'components/helpers/capitalizeFirstLetter';

export default class FeedbackOptions extends Component {
  btnsNames = this.props.btns.map(name => capitalizeFirstLetter(name));
  render() {
    const { onAdd } = this.props;
    return (
      <div className={css.btnsWrapper}>
        {this.btnsNames.map(btnName => (
          <FeedbackButton key={btnName} onAdd={onAdd}>
            {btnName}
          </FeedbackButton>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  btns: PropTypes.arrayOf(PropTypes.string),
  onAdd: PropTypes.func.isRequired,
};
