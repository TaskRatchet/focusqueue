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
      // Define a new list of tasks that excludes the current task.
      const tasks = state.tasks.filter(
        (_, index) => index !== state.currentTask
      );

      const nextMode = tasks.length === 0 ? "dump" : "estimate";

      return {
        ...state,
        tasks,
        mode: nextMode,
      };
    case "nextTask":
      const isLastTask = state.currentTask === state.tasks.length - 1;
      const index = isLastTask ? 0 : state.currentTask + 1;

      return {
        ...state,
        currentTask: index,
        mode: state.tasks.length < 2 ? "dump" : "estimate",
      };
    default:
      return state;
  }
}

export default function useFlowReducer() {
  return useReducer(reducer, initialState);
}
