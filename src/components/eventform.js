import React from "react"
import DateTimePicker from "react-datetime-picker"
// import TimezonesSelect from './TimezonesSelect'
// import ProjectsSelect from './ProjectsSelect'
// import EventCategorySelect from './EventCategorySelect'
// import EventForSelect from './EventForSelect'
// import EventRepeatsSelect from './EventRepeatsSelect'
// import DaysOfTheWeekSelect from './DaysOfTheWeekSelect'
// import EventRepeatEndsSelect from './EventRepeatEndsSelect'
// import FormButton from './FormButton'

const EventForm = props => {
  const {
    name,
    category,
    // eventFor,
    // projects,
    // projectId,
    description,
    startDate,
    // endDate,
    // timezones,
    duration,
    // repeats,
    // repeatEnds,
    handleChange,
    handleStartDateChange,
    // handleEndDateChange,
    handleSubmit,
  } = props
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-6 gap-4">
          <div className="col-span-4">
            <label className="text-xl" htmlFor="name">
              Name:
              <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                type="text"
                id="name"
                value={name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="text-xl" htmlFor="description">
              Description:
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                type="text"
                id="description"
                value={description}
                onChange={handleChange}
              />
            </label>
            <div className="text-xl field">
              Start DateTime:
              <br />
              <DateTimePicker
                selected={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <label className="text-xl" htmlFor="duration">
              Duration in minutes:
              <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                id="duration"
                type="number"
                value={duration}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="col-span-2">
            <label className="text-xl" htmlFor="category">
              Category:
              <select
                id="category"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={category}
                onChange={handleChange}
                required
              >
                <option value="PairProgramming">PairProgramming</option>
                <option value="Scrum">Scrum</option>
                <option value="ClientMeeting">ClientMeeting</option>
              </select>
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EventForm
