import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';
import { ImInfo } from 'react-icons/im';

export default class Notification extends Component {
  render() {
    return (
      <div className={css.notification}>
        {this.props.message}
        <ImInfo className={css.infoIcon} />
      </div>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
