import React from 'react'

const stepsList = [
  { stepId: 'YOUR_DETAILS', displayText: 'Your Details' },
  { stepId: 'DATE_SELECTION', displayText: 'Date Selection' },
  { stepId: 'GUESTS', displayText: 'Guests' },
  { stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance' },
  { stepId: 'CONFIRMATION', displayText: 'Confirmation' },
]

const Stepper = ({ currentStep }) => {
  const getStepIndex = stepId => {
    switch (stepId) {
      case 'YOUR_DETAILS':
        return 1
      case 'DATE_SELECTION':
        return 2
      case 'GUESTS':
        return 3
      case 'TRAVEL_ASSISTANCE':
        return 4
      case 'CONFIRMATION':
        return 5
      default:
        return 1
    }
  }

  return (
    <ul className="stepper-container">
      {stepsList.map((step, index) => {
        const stepNumber = index + 1
        const isCompleted = stepNumber < currentStep
        const isActive = stepNumber === currentStep
        const stepStatusClass = isCompleted
          ? 'completed'
          : isActive
          ? 'active'
          : 'not-started'

        return (
          <li key={step.stepId} className={`step-item ${stepStatusClass}`}>
            <div className="step-icon-container">
              {isCompleted ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
                  alt={step.displayText}
                  className="step-completed-img"
                />
              ) : (
                <span className="step-number">{stepNumber}</span>
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
