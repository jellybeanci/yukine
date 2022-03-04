import {safePrototypePatch} from "../../define-prototype";
import {apply} from "./apply";

apply.monkeyPatch();

declare global {
  interface Array<T> {
    divFrom(other: number): number[];
  }
}

divFrom.monkeyPatch = (): void => {
  safePrototypePatch(Array, 'divFrom',
      function (other: number) {
        return divFrom(this, other);
      }
  );
}

export function divFrom(thisArray: number[], other: number): number[] {
  return thisArray.apply(other, (a, b) => b / a);
}