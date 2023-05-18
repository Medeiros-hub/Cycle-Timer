import { Cycle } from "./reducer";

export enum ActionTypes {
  addNewCycle = "addNewCycle",
  interrupCurrentCycle = "interrupCurrentCycle",
  markCurrentCycleAsFineshed = "markCurrentCycleAsFineshed",
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.addNewCycle,
    payload: {
      newCycle,
    },
  };
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.markCurrentCycleAsFineshed,
  };
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.interrupCurrentCycle,
  };
}
