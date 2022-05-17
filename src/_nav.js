import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  // {
  //   component: CFormCheck,
  //   name: 'test',
  // },
  {
    component: CNavGroup,
    name: 'ATM Settings',
    to: '/atm-settings',
    items: [],
  },
  {
    component: CNavGroup,
    name: 'Business Setup',
    items: [],
  },
  {
    component: CNavGroup,
    name: 'User Management',
    to: '/user-management',
    items: [
      {
        component: CNavItem,
        name: 'Users',
        to: '/user-management/users',
      },
      {
        component: CNavItem,
        name: 'Profiles',
        to: '/user-management/profiles',
      },
      {
        component: CNavItem,
        name: 'Groups',
        to: '/user-management/groups',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'License Management',
    items: [],
  },
]

export default _nav
