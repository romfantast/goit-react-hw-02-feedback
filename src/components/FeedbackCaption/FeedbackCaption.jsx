import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackCaption.module.css';

export default class FeedbackCaption extends Component {
  render() {
    return (
      <>
        <div className={css.caption}>{this.props.children}</div>
      </>
    );
  }
}

FeedbackCaption.propTypes = {
  children: PropTypes.string.isRequired,
};
