import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackButton.module.css';

export default class FeedbackButton extends Component {
  render() {
    return (
      <button
        name={this.props.children}
        onClick={() => this.props.onAdd(this.props.children.toLowerCase())}
        className={`${
          css.feedbackBtn + ' ' + css[this.props.children.toLowerCase()]
        }`}
      >
        {this.props.children}
      </button>
    );
  }
}

FeedbackButton.propTypes = {
  children: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
};
