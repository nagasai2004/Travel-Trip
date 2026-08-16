import React from 'react'

export const travelAssistanceList = [
  { travelAssistanceId: 'car', displayText: 'Car' },
  { travelAssistanceId: 'flight', displayText: 'Flight' },
  { travelAssistanceId: 'bus', displayText: 'Bus' },
  { travelAssistanceId: 'train', displayText: 'Train' },
]

const TravelAssistance = ({
  assistanceNeeded,
  assistanceType,
  onChangeAssistanceNeeded,
  onChangeAssistanceType,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="step-wrapper">
      <h1 className="step-heading">Travel Assistance</h1>
      <p className="step-subheading">Select your travel assistance</p>

      <div className="inner-form-card">
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
              value={assistanceType || travelAssistanceList[0].travelAssistanceId}
              onChange={onChangeAssistanceType}
            >
              {travelAssistanceList.map(option => (
                <option
                  key={option.travelAssistanceId}
                  value={option.travelAssistanceId}
                >
                  {option.displayText}
                </option>
              ))}
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
    </div>
  )
}

export default TravelAssistance
