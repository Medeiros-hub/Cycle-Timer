import { produce } from "immer";
import { ActionTypes } from "./actions";

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  stopDate?: Date;
  finishedDate?: Date;
}

interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export function CyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.addNewCycle:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle);
        draft.activeCycleId = action.payload.newCycle.id;
      });

    case ActionTypes.interrupCurrentCycle:
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId
      );

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].stopDate = new Date();
        draft.activeCycleId = null;
      });

    case ActionTypes.markCurrentCycleAsFineshed:
      const currentCycleMarkAsFinishedIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId
      );

      if (currentCycleMarkAsFinishedIndex < 0) {
        return state;
      }
      return produce(state, (draft) => {
        draft.cycles[currentCycleMarkAsFinishedIndex].finishedDate = new Date();
        draft.activeCycleId = null;
      });

    default:
      return state;
  }
}
