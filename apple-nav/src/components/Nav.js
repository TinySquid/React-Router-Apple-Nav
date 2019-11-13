import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav(props) {
  return (
    <NavLink to={props.url} activeClassName="selected">{props.children}</NavLink>
  )
}
