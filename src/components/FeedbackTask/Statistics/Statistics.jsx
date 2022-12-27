import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import {
  ImSmile,
  ImWondering,
  ImSad,
  ImCalculator,
  ImArrowUp2,
  ImArrowDown2,
} from 'react-icons/im';

export default class Statistics extends Component {
  render() {
    const { onTotal, onPositive } = this.props;
    const { good, neutral, bad } = this.props.options;
    return (
      <div className={css.statsWrapper}>
        <p className={css.statsItem}>
          <ImSmile className={css.good} />
          Good: {good}
        </p>
        <p className={css.statsItem}>
          <ImWondering className={css.neutral} />
          Neutral: {neutral}
        </p>
        <p className={css.statsItem}>
          <ImSad className={css.bad} />
          Bad:{bad}
        </p>
        <p className={css.statsItem}>
          <ImCalculator />
          Total : {onTotal}
        </p>
        <p className={css.statsItem}>
          {onPositive() > 50 ? <ImArrowUp2 /> : <ImArrowDown2 />}
          Positive: {onPositive() + '%'}
        </p>
      </div>
    );
  }
}

Statistics.propTypes = {
  onTotal: PropTypes.number.isRequired,
  onPositive: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
