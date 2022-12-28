import FeedbackCaption from 'components/FeedbackCaption/FeedbackCaption';
import React, { Component } from 'react';

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <FeedbackCaption title={title}>{title}</FeedbackCaption>
        {children}
      </section>
    );
  }
}
