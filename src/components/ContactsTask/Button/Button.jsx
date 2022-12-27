import React, { Component } from 'react';
import css from './Button.module.css';

export default class Button extends Component {
  render() {
    const { type, id, onDeleteContact } = this.props;
    const onClick = () => {
      onDeleteContact && onDeleteContact(id);
    };
    return (
      <button
        type={type}
        className={`${css.button} ${id ? css.buttonOnDelete : ''}`}
        onClick={() => onClick(id)}
      >
        {this.props.children}
      </button>
    );
  }
}
