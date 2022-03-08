import {monkeyPatch_QUARTER_PI} from "./constants/quarter-pi";
import {monkeyPatch_HALF_PI} from "./constants/half-pi";

defineConstants.monkeyPatch = (): void => {
    monkeyPatch_QUARTER_PI();
    monkeyPatch_HALF_PI();
}

export function defineConstants() {
    return "Math is fun :)";
}