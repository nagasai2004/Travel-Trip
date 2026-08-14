import React from 'react'

const stepsList = [
  { id: 1, displayText: 'Your Details' },
  { id: 2, displayText: 'Date Selection' },
  { id: 3, displayText: 'Guests' },
  { id: 4, displayText: 'Travel Assistance' },
  { id: 5, displayText: 'Confirmation' },
]

const Stepper = ({ currentStep }) => {
  return (
    <ul className="stepper-container">
      {stepsList.map(step => {
        const isCompleted = step.id < currentStep
        const isActive = step.id === currentStep
        const stepStatusClass = isCompleted
          ? 'completed'
          : isActive
          ? 'active'
          : 'not-started'

        return (
          <li key={step.id} className={`step-item ${stepStatusClass}`}>
            <div className="step-icon-container">
              {isCompleted ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
                  alt={step.displayText}
                  className="step-completed-img"
                />
              ) : (
                <span className="step-number">{step.id}</span>
              )}
            </div>
            <p className="step-title">{step.displayText}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default Stepper
