import React, { Component } from 'react';
import css from './FeedbackCaption.module.css';

export default class FeedbackCaption extends Component {
  render() {
    return (
      <>
        <div className={css.caption}>How you satisfied with our service?</div>
      </>
    );
  }
}
