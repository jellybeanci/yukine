import {monkeyPatch_QUARTER_PI, removePatch_QUATER_PI} from "./constants/quarter-pi";
import {monkeyPatch_HALF_PI, removePatch_HALF_PI} from "./constants/half-pi";
import {monkeyPatch_TWO_PI, removePatch_TWO_PI} from "./constants/two-pi";

defineConstants.monkeyPatch = (): void => {
    monkeyPatch_QUARTER_PI();
    monkeyPatch_HALF_PI();
    monkeyPatch_TWO_PI();
}

defineConstants.removePatch = (): void => {
    removePatch_QUATER_PI();
    removePatch_HALF_PI();
    removePatch_TWO_PI();
}

export function defineConstants(): string {
    return 'Math is fun :)';
}