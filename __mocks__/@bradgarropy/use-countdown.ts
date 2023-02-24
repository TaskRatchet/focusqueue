import { Countdown } from "@bradgarropy/use-countdown";
import { vi, MockedFunction, beforeEach } from "vitest";
import { useState, useEffect, useMemo } from "react";

declare module "@bradgarropy/use-countdown" {
  export const __pause: MockedFunction<Countdown["pause"]>;
  export const __resume: MockedFunction<Countdown["resume"]>;
  export const __reset: MockedFunction<Countdown["reset"]>;
  export const __complete: VoidFunction;
  export const __advance: (seconds: number) => void;
}

type useCountdownParams = {
  minutes?: number;
  seconds?: number;
  format?: string;
  onCompleted?: VoidFunction;
};

const state: {
  isActive: boolean;
  isRunning: boolean;
  duration: number;
  remaining: number;
  onCompleted?: VoidFunction;
  rerender?: VoidFunction;
} = {
  isActive: false,
  isRunning: false,
  duration: 0,
  remaining: 0,
  onCompleted: undefined,
  rerender: undefined,
};

beforeEach(() => {
  state.isActive = false;
  state.isRunning = false;
  state.duration = 0;
  state.remaining = 0;
  state.onCompleted = undefined;
  state.rerender = undefined;
});

export const __pause = vi.fn(() => {
  state.isRunning = false;
});
export const __resume = vi.fn(() => {
  state.isRunning = true;
});
export const __reset = vi.fn(() => {
  state.isActive = true;
  state.isRunning = true;
  state.remaining = state.duration;
});
export const __complete = vi.fn(() => {
  state.isActive = false;
  state.isRunning = false;
  state.remaining = 0;
  state.onCompleted?.();
});

function useRerender() {
  const [, _rerender] = useState(0);
  return () => _rerender((prev) => prev + 1);
}

const useCountdown = vi.fn(
  ({
    minutes = 0,
    seconds = 0,
    onCompleted,
  }: useCountdownParams): Countdown => {
    const rerender = useRerender();

    useEffect(() => {
      state.duration = minutes * 60 + seconds;
      state.remaining = state.duration;
    }, [minutes, seconds]);

    useEffect(() => {
      state.onCompleted = onCompleted;
    }, [onCompleted]);

    useEffect(() => {
      state.rerender = rerender;
    }, [rerender]);

    const formatted = useMemo(() => {
      const m = Math.floor(state.remaining / 60);
      const s = state.remaining % 60;
      const fm = ("00" + m).slice(-2);
      const fs = ("00" + s).slice(-2);
      return `${fm}:${fs}`;
    }, [state.remaining]);

    return {
      ...state,
      minutes,
      seconds,
      formatted,
      isInactive: !state.isActive,
      isPaused: state.isActive && !state.isRunning,
      pause: () => {
        __pause();
        rerender();
      },
      resume: () => {
        __resume();
        rerender();
      },
      reset: () => {
        __reset();
        rerender();
      },
    };
  }
);

export const __advance = vi.fn((seconds: number) => {
  state.remaining -= seconds;
  if (state.remaining <= 0) {
    __complete();
  }
  state.rerender?.();
});

export default useCountdown;
