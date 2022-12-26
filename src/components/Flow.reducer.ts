import { useReducer } from "react";

type Mode = "dump" | "estimate" | "countdown" | "review";
type Action =
  | { type: "setTasks"; payload: string }
  | { type: "setMode"; payload: Mode }
  | { type: "setSessionLength"; payload: string }
  | { type: "completeTask" }
  | { type: "nextTask" };
type State = {
  tasks: string[];
  currentTask: number;
  sessionLength: string;
  mode: Mode;
};

const initialState: State = {
  tasks: [],
  currentTask: 0,
  sessionLength: "",
  mode: "dump",
};

const filterTasks = (tasks: string[], delId: number) => {
  return tasks.filter((_, index) => index !== delId);
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "setTasks":
      return {
        ...state,
        tasks: action.payload.split("\n"),
      };
    case "setMode":
      return {
        ...state,
        mode: action.payload,
      };
    case "setSessionLength":
      return {
        ...state,
        sessionLength: action.payload,
      };
    case "completeTask":
      return {
        ...state,
        tasks: filterTasks(state.tasks, state.currentTask),
        mode:
          filterTasks(state.tasks, state.currentTask).length === 0
            ? "dump"
            : "estimate",
      };
    case "nextTask":
      return {
        ...state,
        currentTask:
          state.currentTask === state.tasks.length - 1
            ? 0
            : state.currentTask + 1,
        mode: state.tasks.length < 2 ? "dump" : "estimate",
      };
    default:
      return state;
  }
}

export default function useFlowReducer() {
  return useReducer(reducer, initialState);
}
