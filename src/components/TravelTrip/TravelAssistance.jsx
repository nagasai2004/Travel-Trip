import React from 'react'

const TravelAssistance = ({
  assistanceNeeded,
  assistanceType,
  onChangeAssistanceNeeded,
  onChangeAssistanceType,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="step-card">
      <h1 className="step-heading">Travel Assistance</h1>
      <p className="step-subheading">Select your travel assistance preference</p>

      <div className="checkbox-group">
        <input
          id="travelAssistance"
          type="checkbox"
          className="checkbox-input"
          checked={assistanceNeeded}
          onChange={onChangeAssistanceNeeded}
        />
        <label htmlFor="travelAssistance" className="checkbox-label">
          Travel Assistance Needed
        </label>
      </div>

      {assistanceNeeded && (
        <div className="input-group">
          <label htmlFor="assistanceType" className="input-label">
            Travel Assistance
          </label>
          <select
            id="assistanceType"
            className="select-field"
            value={assistanceType}
            onChange={onChangeAssistanceType}
          >
            <option value="Wheelchair">Wheelchair</option>
            <option value="Medical Assistance">Medical Assistance</option>
            <option value="Special Assistance">Special Assistance</option>
          </select>
        </div>
      )}

      <div className="button-group">
        <button
          type="button"
          className="secondary-btn"
          onClick={onPrevious}
        >
          Previous
        </button>
        <button
          type="button"
          className="primary-btn"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TravelAssistance
