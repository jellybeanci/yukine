import {monkeyPatch_QUARTER_PI} from "./constants/quarter-pi";
import {monkeyPatch_HALF_PI} from "./constants/half-pi";
import {monkeyPatch_TWO_PI} from "./constants/two-pi";

defineConstants.monkeyPatch = (): void => {
    monkeyPatch_QUARTER_PI();
    monkeyPatch_HALF_PI();
    monkeyPatch_TWO_PI();
}

export function defineConstants() {
    return "Math is fun :)";
}