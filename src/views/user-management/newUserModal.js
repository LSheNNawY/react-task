/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { CButton, CModal, CModalHeader, CModalBody, CModalTitle, CModalFooter } from '@coreui/react'

const NewUserModal = ({ visible, setVisible }) => {
  const [state, setState] = React.useState({
    fullName: '',
    userName: '',
    email: '',
    group: null,
    profile: null,
  })

  function handleFormChange(e) {
    const value = e.target.value
    setState({
      ...state,
      [e.target.name]: value,
    })
  }

  const handleResetForm = (e) => {
    e.preventDefault()
    setState({
      fullName: '',
      userName: '',
      email: '',
      group: '',
      profile: '',
    })
  }

  return (
    <>
      <CModal alignment="center" scrollable visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Add New User</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={state.fullName}
              onChange={handleFormChange}
              className="form-control"
              placeholder="Enter full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              name="userName"
              value={state.userName}
              onChange={handleFormChange}
              className="form-control"
              placeholder="Enter user name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleFormChange}
              className="form-control"
              placeholder="Enter Email address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="userGroup">User Group</label>
            <select
              name="group"
              value={state.group}
              onChange={handleFormChange}
              className="form-control"
            >
              <option value="">Choose user group</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="profile">Assign Profile</label>
            <select
              className="form-control"
              name="profile"
              value={state.profile}
              onChange={handleFormChange}
            >
              <option value="">Choose profile</option>
              <option value="profile1">Profile 1</option>
              <option value="profile1">Profile 2</option>
              <option value="profile1">Profile 3</option>
            </select>
          </div>
        </CModalBody>
        <CModalFooter>
          <div>
            <a href="#" className="reset-link" onClick={(e) => handleResetForm(e)}>
              Reset fields
            </a>
          </div>
          <div>
            <CButton className="cancel-btn" onClick={() => setVisible(false)}>
              Cancel
            </CButton>
            <CButton className="confirm-btn">Add User</CButton>
          </div>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default NewUserModal
