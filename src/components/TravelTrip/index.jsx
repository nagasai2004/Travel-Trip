import React, { useState } from 'react'
import Stepper from './Stepper'
import YourDetails from './YourDetails'
import DateSelection from './DateSelection'
import Guests from './Guests'
import TravelAssistance from './TravelAssistance'
import Confirmation from './Confirmation'
import './index.css'

const TravelTrip = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [name, setName] = useState('')
  const [startLocation, setStartLocation] = useState('')
  const [endLocation, setEndLocation] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const [assistanceNeeded, setAssistanceNeeded] = useState(false)
  const [assistanceType, setAssistanceType] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [detailsError, setDetailsError] = useState('')
  const [dateError, setDateError] = useState('')

  const onChangeName = e => {
    setName(e.target.value)
    if (detailsError) setDetailsError('')
  }

  const onChangeStartLocation = e => {
    setStartLocation(e.target.value)
    if (detailsError) setDetailsError('')
  }

  const onChangeEndLocation = e => {
    setEndLocation(e.target.value)
    if (detailsError) setDetailsError('')
  }

  const onChangeStartDate = e => {
    setStartDate(e.target.value)
    if (dateError) setDateError('')
  }

  const onChangeEndDate = e => {
    setEndDate(e.target.value)
    if (dateError) setDateError('')
  }

  const onDecreaseAdults = () => {
    if (adults > 1) {
      setAdults(prev => prev - 1)
    }
  }

  const onIncreaseAdults = () => {
    setAdults(prev => prev + 1)
  }

  const onDecreaseChildren = () => {
    if (children > 0) {
      setChildren(prev => prev - 1)
    }
  }

  const onIncreaseChildren = () => {
    setChildren(prev => prev + 1)
  }

  const onDecreaseInfants = () => {
    if (infants > 0) {
      setInfants(prev => prev - 1)
    }
  }

  const onIncreaseInfants = () => {
    setInfants(prev => prev + 1)
  }

  const onChangeAssistanceNeeded = e => {
    const checked = e.target.checked
    setAssistanceNeeded(checked)
    if (checked && !assistanceType) {
      setAssistanceType('Wheelchair')
    }
  }

  const onChangeAssistanceType = e => {
    setAssistanceType(e.target.value)
  }

  const resetTripState = () => {
    setCurrentStep(1)
    setName('')
    setStartLocation('')
    setEndLocation('')
    setStartDate('')
    setEndDate('')
    setAdults(1)
    setChildren(0)
    setInfants(0)
    setAssistanceNeeded(false)
    setAssistanceType('')
    setConfirmed(false)
    setDetailsError('')
    setDateError('')
  }

  const renderActiveStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <YourDetails
            name={name}
            startLocation={startLocation}
            endLocation={endLocation}
            detailsError={detailsError}
            onChangeName={onChangeName}
            onChangeStartLocation={onChangeStartLocation}
            onChangeEndLocation={onChangeEndLocation}
            onNext={() => setCurrentStep(2)}
            setDetailsError={setDetailsError}
          />
        )
      case 2:
        return (
          <DateSelection
            startDate={startDate}
            endDate={endDate}
            dateError={dateError}
            onChangeStartDate={onChangeStartDate}
            onChangeEndDate={onChangeEndDate}
            onPrevious={() => setCurrentStep(1)}
            onNext={() => setCurrentStep(3)}
            setDateError={setDateError}
          />
        )
      case 3:
        return (
          <Guests
            adults={adults}
            children={children}
            infants={infants}
            onDecreaseAdults={onDecreaseAdults}
            onIncreaseAdults={onIncreaseAdults}
            onDecreaseChildren={onDecreaseChildren}
            onIncreaseChildren={onIncreaseChildren}
            onDecreaseInfants={onDecreaseInfants}
            onIncreaseInfants={onIncreaseInfants}
            onPrevious={() => setCurrentStep(2)}
            onNext={() => setCurrentStep(4)}
          />
        )
      case 4:
        return (
          <TravelAssistance
            assistanceNeeded={assistanceNeeded}
            assistanceType={assistanceType}
            onChangeAssistanceNeeded={onChangeAssistanceNeeded}
            onChangeAssistanceType={onChangeAssistanceType}
            onPrevious={() => setCurrentStep(3)}
            onNext={() => setCurrentStep(5)}
          />
        )
      case 5:
        return (
          <Confirmation
            name={name}
            startLocation={startLocation}
            endLocation={endLocation}
            startDate={startDate}
            endDate={endDate}
            adults={adults}
            children={children}
            infants={infants}
            assistanceNeeded={assistanceNeeded}
            assistanceType={assistanceType}
            confirmed={confirmed}
            onPrevious={() => setCurrentStep(4)}
            onCancel={resetTripState}
            onConfirm={() => setConfirmed(true)}
            onBookNewTrip={resetTripState}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="travel-trip-bg-container">
      <div className="travel-trip-responsive-container">
        <h1 className="main-heading">Travel Trip</h1>
        <div className="card-container">
          {!confirmed && <Stepper currentStep={currentStep} />}
          <div className="step-content-container">{renderActiveStep()}</div>
        </div>
      </div>
    </div>
  )
}

export default TravelTrip
