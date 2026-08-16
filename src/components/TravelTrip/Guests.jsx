import React from 'react'

const Guests = ({
  adults,
  children,
  infants,
  onDecreaseAdults,
  onIncreaseAdults,
  onDecreaseChildren,
  onIncreaseChildren,
  onDecreaseInfants,
  onIncreaseInfants,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="step-wrapper">
      <h1 className="step-heading">Guests</h1>
      <p className="step-subheading">Select your guests</p>

      <div className="inner-form-card">
        <ul className="guests-list">
          <li className="guest-item">
            <div>
              <p className="guest-title">Adults</p>
              <p className="guest-age">Age 13 or above</p>
            </div>
            <div className="counter-controls">
              <button
                type="button"
                className="counter-btn"
                onClick={onDecreaseAdults}
                disabled={adults <= 1}
              >
                -
              </button>
              <p className="counter-value">{adults}</p>
              <button
                type="button"
                className="counter-btn"
                onClick={onIncreaseAdults}
              >
                +
              </button>
            </div>
          </li>

          <li className="guest-item">
            <div>
              <p className="guest-title">Children</p>
              <p className="guest-age">Age 2-12</p>
            </div>
            <div className="counter-controls">
              <button
                type="button"
                className="counter-btn"
                onClick={onDecreaseChildren}
                disabled={children <= 0}
              >
                -
              </button>
              <p className="counter-value">{children}</p>
              <button
                type="button"
                className="counter-btn"
                onClick={onIncreaseChildren}
              >
                +
              </button>
            </div>
          </li>

          <li className="guest-item">
            <div>
              <p className="guest-title">Infants</p>
              <p className="guest-age">under 2</p>
            </div>
            <div className="counter-controls">
              <button
                type="button"
                className="counter-btn"
                onClick={onDecreaseInfants}
                disabled={infants <= 0}
              >
                -
              </button>
              <p className="counter-value">{infants}</p>
              <button
                type="button"
                className="counter-btn"
                onClick={onIncreaseInfants}
              >
                +
              </button>
            </div>
          </li>
        </ul>

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

export default Guests
