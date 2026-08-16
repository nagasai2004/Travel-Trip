import React from 'react'
import { travelAssistanceList } from './TravelAssistance'

const Confirmation = ({
  name,
  startLocation,
  endLocation,
  startDate,
  endDate,
  adults,
  children,
  infants,
  assistanceNeeded,
  assistanceType,
  confirmed,
  onPrevious,
  onCancel,
  onConfirm,
  onBookNewTrip,
}) => {
  const getAssistanceDisplayText = () => {
    if (!assistanceNeeded) return 'No'
    const foundOption = travelAssistanceList.find(
      each =>
        each.travelAssistanceId === assistanceType ||
        each.value === assistanceType ||
        each.displayText === assistanceType
    )
    return foundOption ? foundOption.displayText : assistanceType || 'Car'
  }

  if (confirmed) {
    return (
      <div className="step-wrapper">
        <div className="inner-form-card success-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
            alt="Success"
            className="success-img"
          />
          <h1 className="success-heading">Awesome</h1>
          <p className="success-message">Your booking has been confirmed</p>
          <button
            type="button"
            className="primary-btn"
            onClick={onBookNewTrip}
          >
            Book New Trip
          </button>
        </div>
      </div>
    )
  }

  const totalGuests = adults + children + infants

  return (
    <div className="step-wrapper">
      <h1 className="step-heading">Confirmation</h1>
      <p className="step-subheading">Confirm your details</p>

      <div className="inner-form-card">
        <div className="summary-container">
          <div className="summary-section">
            <p className="summary-label">Name:</p>
            <p className="summary-value">{name}</p>
          </div>

          <div className="summary-section">
            <p className="summary-label">Start Location:</p>
            <p className="summary-value">{startLocation}</p>
          </div>

          <div className="summary-section">
            <p className="summary-label">End Location:</p>
            <p className="summary-value">{endLocation}</p>
          </div>

          <div className="summary-section">
            <p className="summary-label">Start Date:</p>
            <p className="summary-value">{startDate}</p>
          </div>

          <div className="summary-section">
            <p className="summary-label">End Date:</p>
            <p className="summary-value">{endDate}</p>
          </div>

          <div className="summary-section">
            <p className="summary-label">Guests:</p>
            <p className="summary-value">{totalGuests}</p>
          </div>

          <div className="summary-section">
            <p className="summary-label">Travel Assistance:</p>
            <p className="summary-value">{getAssistanceDisplayText()}</p>
          </div>
        </div>

        <div className="button-group confirmation-buttons">
          <button
            type="button"
            className="secondary-btn"
            onClick={onPrevious}
          >
            Previous
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="primary-btn"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default Confirmation
