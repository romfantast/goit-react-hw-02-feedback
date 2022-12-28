import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackCaption.module.css';

export default class FeedbackCaption extends Component {
  render() {
    const { title } = this.props;
    return (
      <>
        <div
          className={`${title === 'Statistic' ? css.statistic : css.caption}`}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}

FeedbackCaption.propTypes = {
  children: PropTypes.string.isRequired,
};
