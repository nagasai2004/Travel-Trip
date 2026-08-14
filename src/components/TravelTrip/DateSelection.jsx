import React from 'react'

const DateSelection = ({
  startDate,
  endDate,
  dateError,
  onChangeStartDate,
  onChangeEndDate,
  onPrevious,
  onNext,
  setDateError,
}) => {
  const handleSubmit = e => {
    e.preventDefault()
    if (!startDate) {
      setDateError('Select start date')
      return
    }
    if (!endDate) {
      setDateError('Select end date')
      return
    }
    if (new Date(endDate) < new Date(startDate)) {
      setDateError('The end date cannot be less than the start date')
      return
    }
    setDateError('')
    onNext()
  }

  return (
    <form className="step-card" onSubmit={handleSubmit}>
      <h1 className="step-heading">Date Selection</h1>
      <p className="step-subheading">Select your trip dates</p>

      <div className="input-group">
        <label htmlFor="startDate" className="input-label">
          Start Date
        </label>
        <input
          id="startDate"
          type="date"
          className="input-field"
          value={startDate}
          onChange={onChangeStartDate}
        />
      </div>

      <div className="input-group">
        <label htmlFor="endDate" className="input-label">
          End Date
        </label>
        <input
          id="endDate"
          type="date"
          className="input-field"
          value={endDate}
          onChange={onChangeEndDate}
        />
      </div>

      {dateError && <p className="error-message">{dateError}</p>}

      <div className="button-group">
        <button
          type="button"
          className="secondary-btn"
          onClick={onPrevious}
        >
          Previous
        </button>
        <button type="submit" className="primary-btn">
          Next
        </button>
      </div>
    </form>
  )
}

export default DateSelection
