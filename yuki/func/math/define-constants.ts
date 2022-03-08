import {monkeyPatch_QUARTER_PI} from "./constants/quarter-pi";

defineConstants.monkeyPatch = (): void => {
    monkeyPatch_QUARTER_PI();
}

export function defineConstants() {
    return "Math is fun :)";
}