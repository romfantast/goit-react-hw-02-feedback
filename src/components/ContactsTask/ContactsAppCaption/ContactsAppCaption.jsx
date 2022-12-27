import React, { Component } from 'react';
import css from './ContactsAppCaption.module.css';

export default class ContactsAppCaption extends Component {
  render() {
    return <div className={css.title}>{this.props.children}</div>;
  }
}
