import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const UserManagement = React.lazy(() => import('./views/user-management/index'))
const Users = React.lazy(() => import('./views/user-management/users'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/user-management', name: 'User management', element: UserManagement },
  { path: '/user-management/users', name: 'Users', element: Users },
]

export default routes
