import create from 'zustand'
import { persist } from 'zustand/middleware'
import produce from 'immer'

const persistState = (get, set) => updateFn => {
  const currentState = get()
  set(updateFn(currentState))
}

export const useStore = create(
  persist(
    (set, get) => {
      const updateState = persistState(get, set)

      return {
        formStatus: 0,
        stepperStage: 0,
        savedSteps: [],
				stepperStatus: undefined,
				setStepperStatus: status =>
					updateState(produce(state => {
						state.stepperStatus = status
					})),
        setStepActive: index =>
          updateState(
            produce(state => {
              state.savedSteps[index].active = true
            })
          ),
        setStepHash: (index, hash) =>
          updateState(
            produce(state => {
              state.savedSteps[index].hash = hash
            })
          ),
        setStepStatus: (index, status) =>
          updateState(
            produce(state => {
              state.savedSteps[index].status = status
            })
          ),
        setActiveStage: stepNumber =>
          updateState(
            produce(state => {
              state.stepperStage = stepNumber
            })
          ),
        setSteps: steps =>
          updateState(
            produce(state => {
              state.savedSteps = steps
            })
          ),
        setFormStatus: formStatus =>
          updateState(
            produce(state => {
              state.formStatus = formStatus
            })
          ),
      }
    },
    {
      name: 'conversion-status', // name of item in the storage (must be unique)
    }
  )
)
