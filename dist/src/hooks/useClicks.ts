import { StateUpdater, useEffect } from "preact/hooks";
import { useGlobalState } from "preact-global-state";

let toAdd = 0;
let initialized = false;
let perSecond = 10;

interface useClicks {
  clicks: number
}

export function useClicks(): useClicks {
  const [clicks, setClicks] : [number, StateUpdater<number>]= useGlobalState<number>("clicks", 0);
  useEffect(()=>initUI(setClicks), []);

  return { clicks }
}

const initUI = (setClicks: StateUpdater<number>) => {
  if (initialized) return;
  let lastFrame = Date.now();
  let lastValue = 0;
  const updateUI = (currentFrame: number) => {
    const diff: number = currentFrame - lastFrame;
    const transfer: number = Math.ceil(toAdd * (diff / 500));
    toAdd -= transfer;
    setClicks(lastValue + transfer);
    lastFrame = currentFrame;
    lastValue += transfer;
    requestAnimationFrame(updateUI);
  };
  requestAnimationFrame(updateUI);
  initialized = true;
};

const autoClick = () => toAdd += perSecond

setInterval(autoClick, 1000)