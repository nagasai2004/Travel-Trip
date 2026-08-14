import React from 'react'

const YourDetails = ({
  name,
  startLocation,
  endLocation,
  detailsError,
  onChangeName,
  onChangeStartLocation,
  onChangeEndLocation,
  onNext,
  setDetailsError,
}) => {
  const handleSubmit = e => {
    e.preventDefault()
    if (!name.trim()) {
      setDetailsError('Enter your name')
      return
    }
    if (!startLocation.trim()) {
      setDetailsError('Enter your start location')
      return
    }
    if (!endLocation.trim()) {
      setDetailsError('Enter your end location')
      return
    }
    setDetailsError('')
    onNext()
  }

  return (
    <form className="step-card" onSubmit={handleSubmit}>
      <h1 className="step-heading">Your Details</h1>
      <p className="step-subheading">Enter your name and location details</p>

      <div className="input-group">
        <label htmlFor="name" className="input-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="input-field"
          value={name}
          onChange={onChangeName}
          placeholder="Enter name"
        />
      </div>

      <div className="input-group">
        <label htmlFor="startLocation" className="input-label">
          Start Location
        </label>
        <input
          id="startLocation"
          type="text"
          className="input-field"
          value={startLocation}
          onChange={onChangeStartLocation}
          placeholder="Enter start location"
        />
      </div>

      <div className="input-group">
        <label htmlFor="endLocation" className="input-label">
          End Location
        </label>
        <input
          id="endLocation"
          type="text"
          className="input-field"
          value={endLocation}
          onChange={onChangeEndLocation}
          placeholder="Enter end location"
        />
      </div>

      {detailsError && <p className="error-message">{detailsError}</p>}

      <div className="button-group">
        <button type="submit" className="primary-btn">
          Next
        </button>
      </div>
    </form>
  )
}

export default YourDetails
