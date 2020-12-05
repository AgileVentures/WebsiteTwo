import React, { useState } from "react"
import { gql, useMutation } from "@apollo/client"
import DateTimePicker from "react-datetime-picker"
import ProjectSelect from "./projectsselect"

export const CREATE_EVENT = gql`
  mutation CreateEvent($event: CreateEventInput!) {
    createEvent(input: $event) {
      id
      name
    }
  }
`

const EventForm = props => {
  const [startDate, onStartDatetimeChange] = useState(new Date())
  const [endDate, onEndDatetimeChange] = useState(new Date())
  const [formState, setFormState] = useState({
    name: "",
    category: "PairProgramming",
    projectId: 0,
    description: "",
    timeZone: "UTC",
    endDate: "",
    duration: 0,
    repeats: "never",
    repeatEnds: "never",
    repeatsEveryNWeeks: 1,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  })

  function getMask() {
    let mask = 0
    if (formState.monday) {
      mask += 1
    }
    if (formState.tuesday) {
      mask += 2
    }
    if (formState.wednesday) {
      mask += 4
    }
    if (formState.thursday) {
      mask += 8
    }
    if (formState.friday) {
      mask += 16
    }
    if (formState.saturday) {
      mask += 32
    }
    if (formState.sunday) {
      mask += 64
    }
    return mask
  }

  const [createEvent] = useMutation(CREATE_EVENT, {
    variables: {
      event: {
        name: formState.name,
        category: formState.category,
        timeZone: formState.timeZone,
        repeats: formState.repeats,
        startDatetime: startDate,
        duration: parseInt(formState.duration, 10),
        repeatEnds: false,
        repeatsEveryNWeeks: 1,
        repeatsWeeklyEachDaysOfTheWeekMask: getMask(),
        // endDateTime: endDate,
        clientMutationId: "web",
      },
    },
  })

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          createEvent()
        }}
      >
        <div className="grid md:grid-cols-6 gap-4">
          <div className="col-span-4">
            <label className="text-xl font-semibold" htmlFor="name">
              Name:
              <input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                type="text"
                id="name"
                value={formState.name}
                onChange={e =>
                  setFormState({
                    ...formState,
                    name: e.target.value,
                  })
                }
                required
              />
            </label>
            <label className="text-xl font-semibold" htmlFor="description">
              Description:
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                type="text"
                id="description"
                value={formState.description}
                onChange={e =>
                  setFormState({
                    ...formState,
                    description: e.target.value,
                  })
                }
              />
            </label>
            <div className="text-xl font-semibold field">Start DateTime:</div>
            <DateTimePicker
              onChange={onStartDatetimeChange}
              value={startDate}
            />
            <br />
            <label className="text-xl font-semibold" htmlFor="duration">
              Duration in minutes:
              <input
                className="mt-1 block rounded-md border-gray-300 shadow-sm"
                id="duration"
                type="number"
                value={formState.duration}
                onChange={e =>
                  setFormState({
                    ...formState,
                    duration: e.target.value,
                  })
                }
                required
              />
            </label>
            <label className="text-xl font-semibold" htmlFor="repeats">
              Repeats:
              <select
                id="repeats"
                className="mt-1 block rounded-md border-gray-300 shadow-sm"
                value={formState.repeats}
                onChange={e =>
                  setFormState({
                    ...formState,
                    repeats: e.target.value,
                  })
                }
                required
              >
                <option value="never">never</option>
                <option value="weekly">weekly</option>
                <option value="biweekly">biweekly</option>
              </select>
            </label>
            <label className="text-xl font-semibold" htmlFor="monday">
              Monday:
              <input
                id="monday"
                type="checkbox"
                value={formState.monday}
                onChange={e =>
                  setFormState({
                    ...formState,
                    monday: e.target.checked,
                  })
                }
              />
            </label>
            <br />
            <label className="text-xl font-semibold" htmlFor="tuesday">
              Tuesday:
              <input
                id="tuesday"
                type="checkbox"
                value={formState.tuesday}
                onChange={e =>
                  setFormState({
                    ...formState,
                    tuesday: e.target.checked,
                  })
                }
              />
            </label>
            <br />
            <label className="text-xl font-semibold" htmlFor="wednesday">
              Wednesday:
              <input
                id="wednesday"
                name="wednesday"
                type="checkbox"
                value={formState.wednesday}
                onChange={e =>
                  setFormState({
                    ...formState,
                    wednesday: e.target.checked,
                  })
                }
              />
            </label>
            <br />
            <label className="text-xl font-semibold" htmlFor="thursday">
              Thursday:
              <input
                id="thursday"
                name="thursday"
                type="checkbox"
                value={formState.thursday}
                onChange={e =>
                  setFormState({
                    ...formState,
                    thursday: e.target.checked,
                  })
                }
              />
            </label>
            <br />
            <label className="text-xl font-semibold" htmlFor="friday">
              Friday:
              <input
                id="friday"
                name="friday"
                type="checkbox"
                value={formState.friday}
                onChange={e =>
                  setFormState({
                    ...formState,
                    friday: e.target.checked,
                  })
                }
              />
            </label>
            <br />
            <label className="text-xl font-semibold" htmlFor="saturday">
              Saturday:
              <input
                id="saturday"
                name="saturday"
                type="checkbox"
                value={formState.saturday}
                onChange={e =>
                  setFormState({
                    ...formState,
                    saturday: e.target.checked,
                  })
                }
              />
            </label>
            <br />
            <label className="text-xl font-semibold" htmlFor="sunday">
              Sunday:
              <input
                id="sunday"
                name="sunday"
                type="checkbox"
                value={formState.sunday}
                onChange={e =>
                  setFormState({
                    ...formState,
                    sunday: e.target.checked,
                  })
                }
              />
            </label>
            <br />
            <label className="text-xl font-semibold" htmlFor="repeatends">
              Repeat Ends:
              <select
                id="repeatends"
                className="mt-1 block rounded-md border-gray-300 shadow-sm"
                value={formState.repeatEnds}
                onChange={e =>
                  setFormState({
                    ...formState,
                    repeatEnds: e.target.value,
                  })
                }
                required
              >
                <option value="on">on</option>
                <option value="never">never</option>
              </select>
            </label>
            <div className="text-xl font-semibold field">End DateTime:</div>
            <DateTimePicker onChange={onEndDatetimeChange} value={endDate} />
          </div>
          <div className="col-span-2">
            <label className="text-xl font-semibold" htmlFor="category">
              Category:
              <select
                id="category"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                value={formState.category}
                onChange={e =>
                  setFormState({
                    ...formState,
                    category: e.target.value,
                  })
                }
                required
              >
                <option value="PairProgramming">PairProgramming</option>
                <option value="Scrum">Scrum</option>
                <option value="ClientMeeting">ClientMeeting</option>
              </select>
            </label>
            <div className="text-xl font-semibold field">
              Project:
              <br />
              <ProjectSelect
                value={formState.projectID}
                onChange={e =>
                  setFormState({
                    ...formState,
                    projectID: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="bg-header hover:bg-grey-dark font-bold py-2 px-4 m-2 rounded-r rounded-lg shadow"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-header hover:bg-grey-dark font-bold py-2 px-4 m-2 rounded-r rounded-lg shadow"
        >
          Save
        </button>
      </form>
    </div>
  )
}
export default EventForm
