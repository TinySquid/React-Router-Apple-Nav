import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav(props) {
  const children = props.children;
  return (
    <NavLink to={props.url} activeClassName="selected">{children}</NavLink>
  )
}
