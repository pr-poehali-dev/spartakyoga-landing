declare global {
  interface Window {
    ym?: (counterId: number, action: string, target: string) => void;
  }
}

const YM_COUNTER_ID = 109326728;

export const reachGoal = (target: string): void => {
  if (typeof window !== "undefined" && typeof window.ym === "function") {
    window.ym(YM_COUNTER_ID, "reachGoal", target);
  }
};
