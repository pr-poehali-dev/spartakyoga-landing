declare global {
  interface Window {
    ym?: ((counterId: number, action: string, target?: string) => void) & {
      a?: unknown[];
      l?: number;
    };
  }
}

const YM_COUNTER_ID = 109326728;

const ensureYm = (): NonNullable<Window["ym"]> => {
  const w = window as Window;
  if (typeof w.ym !== "function") {
    const stub = function (this: unknown, ...args: unknown[]) {
      (stub.a = stub.a || []).push(args);
    } as unknown as NonNullable<Window["ym"]>;
    stub.a = [];
    stub.l = Date.now();
    w.ym = stub;
  }
  return w.ym!;
};

export const reachGoal = (target: string): void => {
  if (typeof window === "undefined") return;
  try {
    const ym = ensureYm();
    ym(YM_COUNTER_ID, "reachGoal", target);
    if (import.meta.env.DEV) {
      console.log(`[metrika] reachGoal: ${target}`);
    }
  } catch (e) {
    console.warn("[metrika] reachGoal failed", e);
  }
};
