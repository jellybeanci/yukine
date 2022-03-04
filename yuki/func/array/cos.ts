import {safePrototypePatch} from "../../define-prototype";
import {fastMap} from "./fast-map";

fastMap.monkeyPatch();

declare global {
  interface Array<T> {
    cos(): number[];
  }
}

cos.monkeyPatch = (): void => {
  safePrototypePatch(Array, 'cos',
      function () {
        return cos(this);
      }
  );
}

export function cos(thisArray: number[]): number[] {
  return thisArray.fastMap(Math.cos);
}