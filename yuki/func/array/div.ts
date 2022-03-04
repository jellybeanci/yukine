import {safePrototypePatch} from "../../define-prototype";
import {operation} from "./operation";

operation.monkeyPatch();

declare global {
  interface Array<T> {
    div(other: number[]): number[];
  }
}

div.monkeyPatch = (): void => {
  safePrototypePatch(Array, 'div',
      function (other: number[]) {
        return div(this, other);
      }
  );
}

export function div(thisArray: number[], other: number[]): number[] {
  return thisArray.operation(other, (a, b) => a / b);
}