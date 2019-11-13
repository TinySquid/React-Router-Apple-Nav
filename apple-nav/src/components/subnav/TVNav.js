import React from 'react'

import SubNavItem from './SubNavItem';

export default function TVNav() {
  return (
    <ul className="subnav-dark">
      <SubNavItem>Apple TV app</SubNavItem>
      <SubNavItem>Apple TV+</SubNavItem>
      <SubNavItem>Apple TV 4K</SubNavItem>
      <SubNavItem>Apple TV HD</SubNavItem>
      <SubNavItem>AirPlay</SubNavItem>
      <SubNavItem>Accessories</SubNavItem>
    </ul>
  )
}
