import React, { Component } from 'react';
import FeedbackButton from '../FeedbackButton/FeedbackButton';
import css from './FeedbackOptions.module.css';
import { capitalizeFirstLetter } from 'components/helpers/capitalizeFirstLetter';

export default class FeedbackOptions extends Component {
  btnsNames = this.props.btns.map(name => capitalizeFirstLetter(name));
  render() {
    const { onAdd, stats } = this.props;
    return (
      <div className={css.btnsWrapper}>
        {this.btnsNames.map(btnName => (
          <FeedbackButton stats={stats} key={btnName} onAdd={onAdd}>
            {btnName}
          </FeedbackButton>
        ))}
      </div>
    );
  }
}
