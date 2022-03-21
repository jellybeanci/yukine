(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        var p = n[i] = {exports: {}};
        e[i][0].call(p.exports, (function (r) {
          var n = e[i][1][r];
          return o(n || r)
        }), p, p.exports, r, e, n, t)
      }
      return n[i].exports
    }

    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o
  }

  return r
})()({
  1: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.abs = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    abs.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "abs", (function () {
        return abs(this)
      }))
    };
    abs.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "abs")
    };

    function abs(thisArray) {
      return thisArray.fastMap(Math.abs)
    }

    exports.abs = abs
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 2: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.addBy = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const apply_1 = require("./apply");
    apply_1.apply.monkeyPatch();
    addBy.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "addBy", (function (other) {
        return addBy(this, other)
      }))
    };
    addBy.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "addBy")
    };

    function addBy(thisArray, other) {
      return thisArray.apply(other, ((a, b) => a + b))
    }

    exports.addBy = addBy
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./apply": 4}], 3: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.add = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const operation_1 = require("./operation");
    operation_1.operation.monkeyPatch();
    add.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "add", (function (other) {
        return add(this, other)
      }))
    };
    add.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "add")
    };

    function add(thisArray, other) {
      return thisArray.operation(other, ((a, b) => a + b))
    }

    exports.add = add
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./operation": 35}], 4: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.apply = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    apply.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "apply", (function (value, callbackfn) {
        return apply(this, value, callbackfn)
      }))
    };
    apply.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "apply")
    };

    function apply(thisArray, value, callbackfn) {
      return thisArray.fastMap((currentValue => callbackfn(currentValue, value)))
    }

    exports.apply = apply
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 5: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.arrayCos = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    arrayCos.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "cos", (function () {
        return arrayCos(this)
      }))
    };
    arrayCos.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "cos")
    };

    function arrayCos(thisArray) {
      return thisArray.fastMap(Math.cos)
    }

    exports.arrayCos = arrayCos
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 6: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.arrayCosd = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    const cosd_1 = require("../math/cosd");
    fast_map_1.fastMap.monkeyPatch();
    cosd_1.cosd.monkeyPatch();
    arrayCosd.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "cosd", (function () {
        return arrayCosd(this)
      }))
    };
    arrayCosd.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "cosd")
    };

    function arrayCosd(thisArray) {
      return thisArray.fastMap(Math.cosd)
    }

    exports.arrayCosd = arrayCosd
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "../math/cosd": 51, "./fast-map": 28}], 7: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.arrayCot = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    const cot_1 = require("../math/cot");
    fast_map_1.fastMap.monkeyPatch();
    cot_1.cot.monkeyPatch();
    arrayCot.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "cot", (function () {
        return arrayCot(this)
      }))
    };
    arrayCot.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "cot")
    };

    function arrayCot(thisArray) {
      return thisArray.fastMap(Math.cot)
    }

    exports.arrayCot = arrayCot
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "../math/cot": 52, "./fast-map": 28}], 8: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.arrayCotd = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    const cotd_1 = require("../math/cotd");
    fast_map_1.fastMap.monkeyPatch();
    cotd_1.cotd.monkeyPatch();
    arrayCotd.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "cotd", (function () {
        return arrayCotd(this)
      }))
    };
    arrayCotd.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "cotd")
    };

    function arrayCotd(thisArray) {
      return thisArray.fastMap(Math.cotd)
    }

    exports.arrayCotd = arrayCotd
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "../math/cotd": 53, "./fast-map": 28}], 9: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.arrayCube = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    const cube_1 = require("../math/cube");
    fast_map_1.fastMap.monkeyPatch();
    cube_1.cube.monkeyPatch();
    arrayCube.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "cube", (function () {
        return arrayCube(this)
      }))
    };
    arrayCube.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "cube")
    };

    function arrayCube(thisArray) {
      return thisArray.fastMap(Math.cube)
    }

    exports.arrayCube = arrayCube
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "../math/cube": 54, "./fast-map": 28}], 10: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.arrayEquals = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    arrayEquals.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "equals", (function (other) {
        return arrayEquals(this, other)
      }))
    };
    arrayEquals.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "equals")
    };

    function arrayEquals(thisArray, other) {
      if (thisArray.length !== other.length) return false;
      for (let i = 0, len = thisArray.length; i < len; i++) {
        if (thisArray[i] !== other[i]) return false
      }
      return true
    }

    exports.arrayEquals = arrayEquals
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70}], 11: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.arrayLog = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    arrayLog.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "log", (function () {
        return arrayLog(this)
      }))
    };
    arrayLog.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "log")
    };

    function arrayLog(thisArray) {
      return thisArray.fastMap(Math.log)
    }

    exports.arrayLog = arrayLog
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 12: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.arrayLog10 = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    arrayLog10.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "log10", (function () {
        return arrayLog10(this)
      }))
    };
    arrayLog10.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "log10")
    };

    function arrayLog10(thisArray) {
      return thisArray.fastMap(Math.log10)
    }

    exports.arrayLog10 = arrayLog10
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 13: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.arraySin = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    arraySin.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "sin", (function () {
        return arraySin(this)
      }))
    };
    arraySin.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "sin")
    };

    function arraySin(thisArray) {
      return thisArray.fastMap(Math.sin)
    }

    exports.arraySin = arraySin
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 14: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.arraySind = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    const sind_1 = require("../math/sind");
    fast_map_1.fastMap.monkeyPatch();
    sind_1.sind.monkeyPatch();
    arraySind.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "sind", (function () {
        return arraySind(this)
      }))
    };
    arraySind.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "sind")
    };

    function arraySind(thisArray) {
      return thisArray.fastMap(Math.sind)
    }

    exports.arraySind = arraySind
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "../math/sind": 63, "./fast-map": 28}], 15: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.arraySquare = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    const square_1 = require("../math/square");
    fast_map_1.fastMap.monkeyPatch();
    square_1.square.monkeyPatch();
    arraySquare.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "square", (function () {
        return arraySquare(this)
      }))
    };
    arraySquare.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "square")
    };

    function arraySquare(thisArray) {
      return thisArray.fastMap(Math.square)
    }

    exports.arraySquare = arraySquare
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "../math/square": 64, "./fast-map": 28}], 16: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.arrayTan = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    arrayTan.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "tan", (function () {
        return arrayTan(this)
      }))
    };
    arrayTan.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "tan")
    };

    function arrayTan(thisArray) {
      return thisArray.fastMap(Math.tan)
    }

    exports.arrayTan = arrayTan
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 17: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.arrayTand = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    const tand_1 = require("../math/tand");
    fast_map_1.fastMap.monkeyPatch();
    tand_1.tand.monkeyPatch();
    arrayTand.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "tand", (function () {
        return arrayTand(this)
      }))
    };
    arrayTand.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "tand")
    };

    function arrayTand(thisArray) {
      return thisArray.fastMap(Math.tand)
    }

    exports.arrayTand = arrayTand
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "../math/tand": 65, "./fast-map": 28}], 18: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.arrayTanh = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    arrayTanh.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "tanh", (function () {
        return arrayTanh(this)
      }))
    };
    arrayTanh.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "tanh")
    };

    function arrayTanh(thisArray) {
      return thisArray.fastMap(Math.tanh)
    }

    exports.arrayTanh = arrayTanh
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 19: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.avg = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const sum_1 = require("./sum");
    sum_1.sum.monkeyPatch();
    avg.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "avg", (function () {
        return avg(this)
      }))
    };
    avg.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "avg")
    };

    function avg(thisArray) {
      const len = thisArray.length;
      return thisArray.sum() / len
    }

    exports.avg = avg
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./sum": 43}], 20: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.binarize = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    binarize.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "binarize", (function () {
        return binarize(this)
      }))
    };
    binarize.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "binarize")
    };

    function binarize(thisArray) {
      return thisArray.fastMap((currentValue => !!currentValue ? 1 : 0))
    }

    exports.binarize = binarize
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 21: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.cbrt = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    cbrt.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "cbrt", (function () {
        return cbrt(this)
      }))
    };
    cbrt.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "cbrt")
    };

    function cbrt(thisArray) {
      return thisArray.fastMap(Math.cbrt)
    }

    exports.cbrt = cbrt
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 22: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.ceil = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    ceil.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "ceil", (function () {
        return ceil(this)
      }))
    };
    ceil.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "ceil")
    };

    function ceil(thisArray) {
      return thisArray.fastMap(Math.ceil)
    }

    exports.ceil = ceil
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 23: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.deepEquals = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_equals_1 = require("fast-equals");
    deepEquals.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "deepEquals", (function (other) {
        return deepEquals(this, other)
      }))
    };
    deepEquals.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "deepEquals")
    };

    function deepEquals(thisArray, other) {
      if (thisArray.length !== other.length) return false;
      return (0, fast_equals_1.deepEqual)(thisArray, other)
    }

    exports.deepEquals = deepEquals
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "fast-equals": 75}], 24: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.divBy = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const apply_1 = require("./apply");
    apply_1.apply.monkeyPatch();
    divBy.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "divBy", (function (other) {
        return divBy(this, other)
      }))
    };
    divBy.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "divBy")
    };

    function divBy(thisArray, other) {
      return thisArray.apply(other, ((a, b) => a / b))
    }

    exports.divBy = divBy
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./apply": 4}], 25: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.divFrom = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const apply_1 = require("./apply");
    apply_1.apply.monkeyPatch();
    divFrom.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "divFrom", (function (other) {
        return divFrom(this, other)
      }))
    };
    divFrom.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "divFrom")
    };

    function divFrom(thisArray, other) {
      return thisArray.apply(other, ((a, b) => b / a))
    }

    exports.divFrom = divFrom
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./apply": 4}], 26: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.div = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const operation_1 = require("./operation");
    operation_1.operation.monkeyPatch();
    div.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "div", (function (other) {
        return div(this, other)
      }))
    };
    div.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "div")
    };

    function div(thisArray, other) {
      return thisArray.operation(other, ((a, b) => a / b))
    }

    exports.div = div
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./operation": 35}], 27: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.exp = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    exp.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "exp", (function () {
        return exp(this)
      }))
    };
    exp.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "exp")
    };

    function exp(thisArray) {
      return thisArray.fastMap(Math.exp)
    }

    exports.exp = exp
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 28: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.fastMap = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    fastMap.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "fastMap", (function (callbackfn) {
        return fastMap(this, callbackfn)
      }))
    };
    fastMap.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "fastMap")
    };

    function fastMap(array, callbackfn) {
      const responseArray = Array(array.length);
      for (let i = 0, len = responseArray.length; i < len; i++) {
        responseArray[i] = callbackfn(array[i], i, array)
      }
      return responseArray
    }

    exports.fastMap = fastMap
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70}], 29: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.floor = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    floor.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "floor", (function () {
        return floor(this)
      }))
    };
    floor.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "floor")
    };

    function floor(thisArray) {
      return thisArray.fastMap(Math.floor)
    }

    exports.floor = floor
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 30: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.max = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    max.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "max", (function () {
        return max(this)
      }))
    };
    max.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "max")
    };

    function max(thisArray) {
      return Math.max(...thisArray)
    }

    exports.max = max
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 31: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.min = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    min.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "min", (function () {
        return min(this)
      }))
    };
    min.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "min")
    };

    function min(thisArray) {
      return Math.min(...thisArray)
    }

    exports.min = min
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 32: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.mod = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    mod.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "mod", (function (modulo) {
        return mod(this, modulo)
      }))
    };
    mod.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "mod")
    };

    function mod(thisArray, modulo) {
      return thisArray.fastMap((x => x % modulo))
    }

    exports.mod = mod
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 33: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.multBy = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const apply_1 = require("./apply");
    apply_1.apply.monkeyPatch();
    multBy.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "multBy", (function (other) {
        return multBy(this, other)
      }))
    };
    multBy.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "multBy")
    };

    function multBy(thisArray, other) {
      return thisArray.apply(other, ((a, b) => a * b))
    }

    exports.multBy = multBy
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./apply": 4}], 34: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.mult = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const operation_1 = require("./operation");
    operation_1.operation.monkeyPatch();
    mult.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "mult", (function (other) {
        return mult(this, other)
      }))
    };
    mult.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "mult")
    };

    function mult(thisArray, other) {
      return thisArray.operation(other, ((a, b) => a * b))
    }

    exports.mult = mult
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./operation": 35}], 35: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.operation = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    operation.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "operation", (function (other, callbackfn) {
        return operation(this, other, callbackfn)
      }))
    };
    operation.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "operation")
    };

    function operation(thisArray, other, callbackfn) {
      if (thisArray.length === 0 || thisArray.length !== other.length) {
        throw Error("Array lenghts must agree.")
      }
      return thisArray.fastMap(((currentValue, index) => callbackfn(currentValue, other[index])))
    }

    exports.operation = operation
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 36: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.pow = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    pow.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "pow", (function (power) {
        return pow(this, power)
      }))
    };
    pow.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "pow")
    };

    function pow(thisArray, power) {
      return thisArray.fastMap((currentValue => Math.pow(currentValue, power)))
    }

    exports.pow = pow
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 37: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.prod = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    prod.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "prod", (function (initialValue) {
        return prod(this, initialValue)
      }))
    };
    prod.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "prod")
    };

    function prod(thisArray, initialValue = 1) {
      for (let i = 0, len = thisArray.length; i < len; i++) {
        initialValue *= thisArray[i]
      }
      return initialValue
    }

    exports.prod = prod
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70}], 38: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.round = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    round.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "round", (function () {
        return round(this)
      }))
    };
    round.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "round")
    };

    function round(thisArray) {
      return thisArray.fastMap(Math.round)
    }

    exports.round = round
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 39: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.sqrt = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    fast_map_1.fastMap.monkeyPatch();
    sqrt.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "sqrt", (function () {
        return sqrt(this)
      }))
    };
    sqrt.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "sqrt")
    };

    function sqrt(thisArray) {
      return thisArray.fastMap(Math.sqrt)
    }

    exports.sqrt = sqrt
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28}], 40: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.subBy = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const apply_1 = require("./apply");
    apply_1.apply.monkeyPatch();
    subBy.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "subBy", (function (other) {
        return subBy(this, other)
      }))
    };
    subBy.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "subBy")
    };

    function subBy(thisArray, other) {
      return thisArray.apply(other, ((a, b) => a - b))
    }

    exports.subBy = subBy
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./apply": 4}], 41: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.subFrom = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const apply_1 = require("./apply");
    const remove_patch_1 = require("../../patch/remove-patch");
    apply_1.apply.monkeyPatch();
    subFrom.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "subFrom", (function (other) {
        return subFrom(this, other)
      }))
    };
    subFrom.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "subFrom")
    };

    function subFrom(thisArray, other) {
      return thisArray.apply(other, ((a, b) => b - a))
    }

    exports.subFrom = subFrom
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./apply": 4}], 42: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.sub = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const operation_1 = require("./operation");
    operation_1.operation.monkeyPatch();
    sub.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "sub", (function (other) {
        return sub(this, other)
      }))
    };
    sub.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "sub")
    };

    function sub(thisArray, other) {
      return thisArray.operation(other, ((a, b) => a - b))
    }

    exports.sub = sub
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./operation": 35}], 43: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.sum = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    sum.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "sum", (function (initialValue) {
        return sum(this, initialValue)
      }))
    };
    sum.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "sum")
    };

    function sum(thisArray, initialValue = 0) {
      for (let i = 0, len = thisArray.length; i < len; i++) {
        initialValue += thisArray[i]
      }
      return initialValue
    }

    exports.sum = sum
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70}], 44: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.swap = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    swap.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "swap", (function (s1, s2) {
        return swap(this, s1, s2)
      }))
    };
    swap.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "swap")
    };

    function swap(thisArray, s1, s2) {
      let temp = thisArray[s1];
      thisArray[s1] = thisArray[s2];
      thisArray[s2] = temp
    }

    exports.swap = swap
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70}], 45: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.toBitString = void 0;
    const binarize_1 = require("./binarize");
    const remove_patch_1 = require("../../patch/remove-patch");
    const safe_patcher_1 = require("../../patch/safe-patcher");
    binarize_1.binarize.monkeyPatch();
    toBitString.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "toBitString", (function (seperator) {
        return toBitString(this, seperator)
      }))
    };
    toBitString.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "toBitString")
    };

    function toBitString(thisArray, seperator = "") {
      return thisArray.binarize().join(seperator)
    }

    exports.toBitString = toBitString
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./binarize": 20}], 46: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.toInt = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const fast_map_1 = require("./fast-map");
    const int_1 = require("@jellybeanci/int");
    fast_map_1.fastMap.monkeyPatch();
    toInt.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "toInt", (function () {
        return toInt(this)
      }))
    };
    toInt.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "toInt")
    };

    function toInt(thisArray) {
      return thisArray.fastMap(int_1.int)
    }

    exports.toInt = toInt
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./fast-map": 28, "@jellybeanci/int": 73}], 47: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.zip = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    zip.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Array, "zip", (function () {
        return zip(this)
      }))
    };
    zip.removePatch = () => {
      (0, remove_patch_1.removePatch)(Array.prototype, "zip")
    };

    function zip(thisArray) {
      const rowSize = thisArray.length;
      const colSize = thisArray[0].length;
      const zip = Array(colSize);
      for (let i = 0; i < colSize; i++) {
        const col = Array(rowSize);
        for (let j = 0; j < rowSize; j++) {
          col[j] = thisArray[j][i]
        }
        zip[i] = col
      }
      return zip
    }

    exports.zip = zip
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70}], 48: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.removePatch_HALF_PI = exports.monkeyPatch_HALF_PI = exports.HALF_PI = void 0;
    const safe_patcher_1 = require("../../../patch/safe-patcher");
    const remove_patch_1 = require("../../../patch/remove-patch");
    exports.HALF_PI = 1.5707963267948966;

    function monkeyPatch_HALF_PI() {
      (0, safe_patcher_1.safePatch)(Math, "HALF_PI", exports.HALF_PI)
    }

    exports.monkeyPatch_HALF_PI = monkeyPatch_HALF_PI;

    function removePatch_HALF_PI() {
      (0, remove_patch_1.removePatch)(Math, "HALF_PI")
    }

    exports.removePatch_HALF_PI = removePatch_HALF_PI
  }, {"../../../patch/remove-patch": 69, "../../../patch/safe-patcher": 70}], 49: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.removePatch_QUARTER_PI = exports.monkeyPatch_QUARTER_PI = exports.QUARTER_PI = void 0;
    const safe_patcher_1 = require("../../../patch/safe-patcher");
    const remove_patch_1 = require("../../../patch/remove-patch");
    exports.QUARTER_PI = .7853981633974483;

    function monkeyPatch_QUARTER_PI() {
      (0, safe_patcher_1.safePatch)(Math, "QUARTER_PI", exports.QUARTER_PI)
    }

    exports.monkeyPatch_QUARTER_PI = monkeyPatch_QUARTER_PI;

    function removePatch_QUARTER_PI() {
      (0, remove_patch_1.removePatch)(Math, "QUARTER_PI")
    }

    exports.removePatch_QUARTER_PI = removePatch_QUARTER_PI
  }, {"../../../patch/remove-patch": 69, "../../../patch/safe-patcher": 70}], 50: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.removePatch_TWO_PI = exports.monkeyPatch_TWO_PI = exports.TWO_PI = void 0;
    const safe_patcher_1 = require("../../../patch/safe-patcher");
    const remove_patch_1 = require("../../../patch/remove-patch");
    exports.TWO_PI = 6.283185307179586;

    function monkeyPatch_TWO_PI() {
      (0, safe_patcher_1.safePatch)(Math, "TWO_PI", exports.TWO_PI)
    }

    exports.monkeyPatch_TWO_PI = monkeyPatch_TWO_PI;

    function removePatch_TWO_PI() {
      (0, remove_patch_1.removePatch)(Math, "TWO_PI")
    }

    exports.removePatch_TWO_PI = removePatch_TWO_PI
  }, {"../../../patch/remove-patch": 69, "../../../patch/safe-patcher": 70}], 51: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.cosd = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const deg2rad_1 = require("./deg2rad");
    deg2rad_1.deg2rad.monkeyPatch();
    cosd.monkeyPatch = () => {
      (0, safe_patcher_1.safePatch)(Math, "cosd", (function (x) {
        return cosd(x)
      }))
    };
    cosd.removePatch = () => {
      (0, remove_patch_1.removePatch)(Math, "cosd")
    };

    function cosd(x) {
      return Math.cos(Math.deg2rad(x))
    }

    exports.cosd = cosd
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./deg2rad": 56}], 52: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.cot = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    cot.monkeyPatch = () => {
      (0, safe_patcher_1.safePatch)(Math, "cot", (function (x) {
        return cot(x)
      }))
    };
    cot.removePatch = () => {
      (0, remove_patch_1.removePatch)(Math, "cot")
    };

    function cot(x) {
      return 1 / Math.tan(x)
    }

    exports.cot = cot
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70}], 53: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.cotd = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const deg2rad_1 = require("./deg2rad");
    const cot_1 = require("./cot");
    cot_1.cot.monkeyPatch();
    deg2rad_1.deg2rad.monkeyPatch();
    cotd.monkeyPatch = () => {
      (0, safe_patcher_1.safePatch)(Math, "cotd", (function (x) {
        return cotd(x)
      }))
    };
    cotd.removePatch = () => {
      (0, remove_patch_1.removePatch)(Math, "cotd")
    };

    function cotd(x) {
      return Math.cot(Math.deg2rad(x))
    }

    exports.cotd = cotd
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./cot": 52, "./deg2rad": 56}], 54: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.cube = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    cube.monkeyPatch = () => {
      (0, safe_patcher_1.safePatch)(Math, "cube", (function (x) {
        return cube(x)
      }))
    };
    cube.removePatch = () => {
      (0, remove_patch_1.removePatch)(Math, "cube")
    };

    function cube(x) {
      return x * x * x
    }

    exports.cube = cube
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70}], 55: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.defineConstants = void 0;
    const quarter_pi_1 = require("./constants/quarter-pi");
    const half_pi_1 = require("./constants/half-pi");
    const two_pi_1 = require("./constants/two-pi");
    defineConstants.monkeyPatch = () => {
      (0, quarter_pi_1.monkeyPatch_QUARTER_PI)();
      (0, half_pi_1.monkeyPatch_HALF_PI)();
      (0, two_pi_1.monkeyPatch_TWO_PI)()
    };
    defineConstants.removePatch = () => {
      (0, quarter_pi_1.removePatch_QUARTER_PI)();
      (0, half_pi_1.removePatch_HALF_PI)();
      (0, two_pi_1.removePatch_TWO_PI)()
    };

    function defineConstants() {
      return "Math is fun :)"
    }

    exports.defineConstants = defineConstants
  }, {"./constants/half-pi": 48, "./constants/quarter-pi": 49, "./constants/two-pi": 50}], 56: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.deg2rad = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const DEGREE_AS_RADIAN = .017453292519943295;
    deg2rad.monkeyPatch = () => {
      (0, safe_patcher_1.safePatch)(Math, "deg2rad", (function (degree) {
        return deg2rad(degree)
      }))
    };
    deg2rad.removePatch = () => {
      (0, remove_patch_1.removePatch)(Math, "deg2rad")
    };

    function deg2rad(degree) {
      return degree * DEGREE_AS_RADIAN
    }

    exports.deg2rad = deg2rad
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70}], 57: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.rad2deg = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const RADIAN_AS_DEGREE = 57.29577951308232;
    rad2deg.monkeyPatch = () => {
      (0, safe_patcher_1.safePatch)(Math, "rad2deg", (function (radian) {
        return rad2deg(radian)
      }))
    };
    rad2deg.removePatch = () => {
      (0, remove_patch_1.removePatch)(Math, "rad2deg")
    };

    function rad2deg(radian) {
      return radian * RADIAN_AS_DEGREE
    }

    exports.rad2deg = rad2deg
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70}], 58: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.randomBoolean = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const random_1 = require("@jellybeanci/random");
    randomBoolean.monkeyPatch = () => {
      (0, safe_patcher_1.safePatch)(Math, "randomBoolean", (function () {
        return randomBoolean()
      }))
    };
    randomBoolean.removePatch = () => {
      (0, remove_patch_1.removePatch)(Math, "randomBoolean")
    };

    function randomBoolean() {
      return (0, random_1.randomBoolean)()
    }

    exports.randomBoolean = randomBoolean
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "@jellybeanci/random": 74}], 59: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.randomGaussianRange = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const random_1 = require("@jellybeanci/random");
    randomGaussianRange.monkeyPatch = () => {
      (0, safe_patcher_1.safePatch)(Math, "randomGaussianRange", (function (start, end, degree) {
        return randomGaussianRange(start, end, degree)
      }))
    };
    randomGaussianRange.removePatch = () => {
      (0, remove_patch_1.removePatch)(Math, "randomGaussianRange")
    };

    function randomGaussianRange(start, end, degree) {
      return (0, random_1.randomGaussianRange)(start, end, degree)
    }

    exports.randomGaussianRange = randomGaussianRange
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "@jellybeanci/random": 74}], 60: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.randomGaussian = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const random_1 = require("@jellybeanci/random");
    randomGaussian.monkeyPatch = () => {
      (0, safe_patcher_1.safePatch)(Math, "randomGaussian", (function (degree) {
        return randomGaussian(degree)
      }))
    };
    randomGaussian.removePatch = () => {
      (0, remove_patch_1.removePatch)(Math, "randomGaussian")
    };

    function randomGaussian(degree) {
      return (0, random_1.randomGaussian)(degree)
    }

    exports.randomGaussian = randomGaussian
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "@jellybeanci/random": 74}], 61: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.randomInt = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const random_1 = require("@jellybeanci/random");
    randomInt.monkeyPatch = () => {
      (0, safe_patcher_1.safePatch)(Math, "randomInt", (function (start, end) {
        return randomInt(start, end)
      }))
    };
    randomInt.removePatch = () => {
      (0, remove_patch_1.removePatch)(Math, "randomInt")
    };

    function randomInt(start, end) {
      return (0, random_1.randomInt)(start, end)
    }

    exports.randomInt = randomInt
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "@jellybeanci/random": 74}], 62: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.randomRange = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const random_1 = require("@jellybeanci/random");
    randomRange.monkeyPatch = () => {
      (0, safe_patcher_1.safePatch)(Math, "randomRange", (function (start, end) {
        return randomRange(start, end)
      }))
    };
    randomRange.removePatch = () => {
      (0, remove_patch_1.removePatch)(Math, "randomRange")
    };

    function randomRange(start, end) {
      return (0, random_1.randomRange)(start, end)
    }

    exports.randomRange = randomRange
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "@jellybeanci/random": 74}], 63: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.sind = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const deg2rad_1 = require("./deg2rad");
    deg2rad_1.deg2rad.monkeyPatch();
    sind.monkeyPatch = () => {
      (0, safe_patcher_1.safePatch)(Math, "sind", (function (x) {
        return sind(x)
      }))
    };
    sind.removePatch = () => {
      (0, remove_patch_1.removePatch)(Math, "sind")
    };

    function sind(x) {
      return Math.sin(Math.deg2rad(x))
    }

    exports.sind = sind
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./deg2rad": 56}], 64: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.square = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    square.monkeyPatch = () => {
      (0, safe_patcher_1.safePatch)(Math, "square", (function (x) {
        return square(x)
      }))
    };
    square.removePatch = () => {
      (0, remove_patch_1.removePatch)(Math, "square")
    };

    function square(x) {
      return x * x
    }

    exports.square = square
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70}], 65: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.tand = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    const deg2rad_1 = require("./deg2rad");
    deg2rad_1.deg2rad.monkeyPatch();
    tand.monkeyPatch = () => {
      (0, safe_patcher_1.safePatch)(Math, "tand", (function (x) {
        return tand(x)
      }))
    };
    tand.removePatch = () => {
      (0, remove_patch_1.removePatch)(Math, "tand")
    };

    function tand(x) {
      return Math.tan(Math.deg2rad(x))
    }

    exports.tand = tand
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70, "./deg2rad": 56}], 66: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.isValid = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    isValid.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Number, "isValid", (function () {
        return isValid(this)
      }))
    };
    isValid.removePatch = () => {
      (0, remove_patch_1.removePatch)(Number, "isValid")
    };

    function isValid(thisNumber) {
      return !Number.isNaN(thisNumber) && Number.isFinite(thisNumber)
    }

    exports.isValid = isValid
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70}], 67: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.numberEquals = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    numberEquals.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(Number, "equals", (function (number, epsilon = Number.EPSILON) {
        return numberEquals(this, number, epsilon)
      }))
    };
    numberEquals.removePatch = () => {
      (0, remove_patch_1.removePatch)(Number, "equals")
    };

    function numberEquals(thisNumber, other, epsilon = Number.EPSILON) {
      return Math.abs(thisNumber - other) < Math.abs(epsilon)
    }

    exports.numberEquals = numberEquals
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70}], 68: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.stringEquals = void 0;
    const safe_patcher_1 = require("../../patch/safe-patcher");
    const remove_patch_1 = require("../../patch/remove-patch");
    stringEquals.monkeyPatch = () => {
      (0, safe_patcher_1.safePrototypePatch)(String, "equals", (function (other) {
        return stringEquals(this, other)
      }))
    };
    stringEquals.removePatch = () => {
      (0, remove_patch_1.removePatch)(String, "equals")
    };

    function stringEquals(thisString, other) {
      return thisString.valueOf().normalize() === other.valueOf().normalize()
    }

    exports.stringEquals = stringEquals
  }, {"../../patch/remove-patch": 69, "../../patch/safe-patcher": 70}], 69: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.removePatch = void 0;
    const is_defined_1 = require("../utils/is-defined");

    function removePatch(target, propertyName) {
      if (target === undefined || target === null) return;
      if ((0, is_defined_1.isDefined)(target[propertyName])) {
        delete target[propertyName]
      }
    }

    exports.removePatch = removePatch
  }, {"../utils/is-defined": 71}], 70: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.safePatch = exports.safePrototypePatch = void 0;
    const is_defined_1 = require("../utils/is-defined");

    function doIfNotDefined(property, name, callback) {
      if (!(0, is_defined_1.isDefined)(property)) return callback()
    }

    function safePrototypePatch(target, name, value) {
      safePatch(target.prototype, name, value)
    }

    exports.safePrototypePatch = safePrototypePatch;

    function safePatch(target, name, value) {
      doIfNotDefined(target[name], name, (() => {
        Object.defineProperty(target, name, {value: value, enumerable: false, configurable: true, writable: true})
      }))
    }

    exports.safePatch = safePatch
  }, {"../utils/is-defined": 71}], 71: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.isDefined = void 0;

    function isDefined(target) {
      return typeof target !== "undefined"
    }

    exports.isDefined = isDefined
  }, {}], 72: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.deactivateIt = exports.activateIt = void 0;
    const fast_map_1 = require("./func/array/fast-map");
    const apply_1 = require("./func/array/apply");
    const abs_1 = require("./func/array/abs");
    const operation_1 = require("./func/array/operation");
    const add_1 = require("./func/array/add");
    const add_by_1 = require("./func/array/add-by");
    const sub_1 = require("./func/array/sub");
    const sub_by_1 = require("./func/array/sub-by");
    const sub_from_1 = require("./func/array/sub-from");
    const mult_1 = require("./func/array/mult");
    const mult_by_1 = require("./func/array/mult-by");
    const div_1 = require("./func/array/div");
    const div_by_1 = require("./func/array/div-by");
    const div_from_1 = require("./func/array/div-from");
    const sum_1 = require("./func/array/sum");
    const prod_1 = require("./func/array/prod");
    const avg_1 = require("./func/array/avg");
    const sqrt_1 = require("./func/array/sqrt");
    const cbrt_1 = require("./func/array/cbrt");
    const floor_1 = require("./func/array/floor");
    const ceil_1 = require("./func/array/ceil");
    const round_1 = require("./func/array/round");
    const min_1 = require("./func/array/min");
    const max_1 = require("./func/array/max");
    const mod_1 = require("./func/array/mod");
    const exp_1 = require("./func/array/exp");
    const pow_1 = require("./func/array/pow");
    const array_square_1 = require("./func/array/array-square");
    const array_cube_1 = require("./func/array/array-cube");
    const array_sin_1 = require("./func/array/array-sin");
    const array_sind_1 = require("./func/array/array-sind");
    const array_cos_1 = require("./func/array/array-cos");
    const array_cosd_1 = require("./func/array/array-cosd");
    const array_tan_1 = require("./func/array/array-tan");
    const array_tand_1 = require("./func/array/array-tand");
    const array_tanh_1 = require("./func/array/array-tanh");
    const array_cot_1 = require("./func/array/array-cot");
    const array_cotd_1 = require("./func/array/array-cotd");
    const array_log_1 = require("./func/array/array-log");
    const array_log10_1 = require("./func/array/array-log10");
    const zip_1 = require("./func/array/zip");
    const swap_1 = require("./func/array/swap");
    const to_int_1 = require("./func/array/to-int");
    const binarize_1 = require("./func/array/binarize");
    const to_bit_string_1 = require("./func/array/to-bit-string");
    const array_equals_1 = require("./func/array/array-equals");
    const deep_equals_1 = require("./func/array/deep-equals");
    const define_constants_1 = require("./func/math/define-constants");
    const sind_1 = require("./func/math/sind");
    const cosd_1 = require("./func/math/cosd");
    const tand_1 = require("./func/math/tand");
    const cot_1 = require("./func/math/cot");
    const cotd_1 = require("./func/math/cotd");
    const square_1 = require("./func/math/square");
    const cube_1 = require("./func/math/cube");
    const deg2rad_1 = require("./func/math/deg2rad");
    const rad2deg_1 = require("./func/math/rad2deg");
    const random_boolean_1 = require("./func/math/random-boolean");
    const random_gaussian_1 = require("./func/math/random-gaussian");
    const random_gaussian_range_1 = require("./func/math/random-gaussian-range");
    const random_int_1 = require("./func/math/random-int");
    const random_range_1 = require("./func/math/random-range");
    const is_valid_1 = require("./func/number/is-valid");
    const number_equals_1 = require("./func/number/number-equals");
    const string_equals_1 = require("./func/string/string-equals");
    const monkeys = [fast_map_1.fastMap, apply_1.apply, operation_1.operation, abs_1.abs, add_1.add, add_by_1.addBy, sub_1.sub, sub_by_1.subBy, sub_from_1.subFrom, mult_1.mult, mult_by_1.multBy, div_1.div, div_by_1.divBy, div_from_1.divFrom, sum_1.sum, prod_1.prod, avg_1.avg, sqrt_1.sqrt, cbrt_1.cbrt, floor_1.floor, ceil_1.ceil, round_1.round, min_1.min, max_1.max, mod_1.mod, exp_1.exp, pow_1.pow, array_square_1.arraySquare, array_cube_1.arrayCube, array_sin_1.arraySin, array_sind_1.arraySind, array_cos_1.arrayCos, array_cosd_1.arrayCosd, array_tan_1.arrayTan, array_tand_1.arrayTand, array_tanh_1.arrayTanh, array_cot_1.arrayCot, array_cotd_1.arrayCotd, array_log_1.arrayLog, array_log10_1.arrayLog10, zip_1.zip, swap_1.swap, to_int_1.toInt, binarize_1.binarize, to_bit_string_1.toBitString, array_equals_1.arrayEquals, deep_equals_1.deepEquals, define_constants_1.defineConstants, sind_1.sind, cosd_1.cosd, cot_1.cot, cotd_1.cotd, tand_1.tand, square_1.square, cube_1.cube, deg2rad_1.deg2rad, rad2deg_1.rad2deg, random_boolean_1.randomBoolean, random_gaussian_1.randomGaussian, random_gaussian_range_1.randomGaussianRange, random_int_1.randomInt, random_range_1.randomRange, is_valid_1.isValid, number_equals_1.numberEquals, string_equals_1.stringEquals];

    function activateIt() {
      for (const monkey of monkeys) {
        monkey.monkeyPatch()
      }
    }

    exports.activateIt = activateIt;

    function deactivateIt() {
      for (const monkey of monkeys) {
        monkey.removePatch()
      }
    }

    exports.deactivateIt = deactivateIt
  }, {
    "./func/array/abs": 1,
    "./func/array/add": 3,
    "./func/array/add-by": 2,
    "./func/array/apply": 4,
    "./func/array/array-cos": 5,
    "./func/array/array-cosd": 6,
    "./func/array/array-cot": 7,
    "./func/array/array-cotd": 8,
    "./func/array/array-cube": 9,
    "./func/array/array-equals": 10,
    "./func/array/array-log": 11,
    "./func/array/array-log10": 12,
    "./func/array/array-sin": 13,
    "./func/array/array-sind": 14,
    "./func/array/array-square": 15,
    "./func/array/array-tan": 16,
    "./func/array/array-tand": 17,
    "./func/array/array-tanh": 18,
    "./func/array/avg": 19,
    "./func/array/binarize": 20,
    "./func/array/cbrt": 21,
    "./func/array/ceil": 22,
    "./func/array/deep-equals": 23,
    "./func/array/div": 26,
    "./func/array/div-by": 24,
    "./func/array/div-from": 25,
    "./func/array/exp": 27,
    "./func/array/fast-map": 28,
    "./func/array/floor": 29,
    "./func/array/max": 30,
    "./func/array/min": 31,
    "./func/array/mod": 32,
    "./func/array/mult": 34,
    "./func/array/mult-by": 33,
    "./func/array/operation": 35,
    "./func/array/pow": 36,
    "./func/array/prod": 37,
    "./func/array/round": 38,
    "./func/array/sqrt": 39,
    "./func/array/sub": 42,
    "./func/array/sub-by": 40,
    "./func/array/sub-from": 41,
    "./func/array/sum": 43,
    "./func/array/swap": 44,
    "./func/array/to-bit-string": 45,
    "./func/array/to-int": 46,
    "./func/array/zip": 47,
    "./func/math/cosd": 51,
    "./func/math/cot": 52,
    "./func/math/cotd": 53,
    "./func/math/cube": 54,
    "./func/math/define-constants": 55,
    "./func/math/deg2rad": 56,
    "./func/math/rad2deg": 57,
    "./func/math/random-boolean": 58,
    "./func/math/random-gaussian": 60,
    "./func/math/random-gaussian-range": 59,
    "./func/math/random-int": 61,
    "./func/math/random-range": 62,
    "./func/math/sind": 63,
    "./func/math/square": 64,
    "./func/math/tand": 65,
    "./func/number/is-valid": 66,
    "./func/number/number-equals": 67,
    "./func/string/string-equals": 68
  }], 73: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.int = void 0;

    function int(number) {
      return ~~number
    }

    exports.int = int
  }, {}], 74: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.randomInt = exports.randomBoolean = exports.randomGaussianRange = exports.randomRange = exports.randomGaussian = void 0;
    const int_1 = require("@jellybeanci/int");

    function randomGaussian(degree = 3) {
      let rand = 0;
      for (let i = 0; i < degree; i++) {
        rand += Math.random()
      }
      const gauss = rand / degree;
      return gauss * 2 - 1
    }

    exports.randomGaussian = randomGaussian;

    function randomRange(start, end) {
      const min = !!end ? start : 0;
      const max = !!end ? end : start;
      return min + Math.random() * (max - min)
    }

    exports.randomRange = randomRange;

    function randomGaussianRange(start, end, degree = 3) {
      const min = !!end ? start : 0;
      const max = !!end ? end : start;
      return min + .5 * (1 + randomGaussian(degree)) * (max - min)
    }

    exports.randomGaussianRange = randomGaussianRange;

    function randomBoolean() {
      return Math.random() < .5
    }

    exports.randomBoolean = randomBoolean;

    function randomInt(start, end) {
      return (0, int_1.int)(randomRange(start, end))
    }

    exports.randomInt = randomInt
  }, {"@jellybeanci/int": 73}], 75: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var HAS_WEAKSET_SUPPORT = typeof WeakSet === "function";
    var keys = Object.keys;

    function sameValueZeroEqual(a, b) {
      return a === b || a !== a && b !== b
    }

    function isPlainObject(value) {
      return value.constructor === Object || value.constructor == null
    }

    function isPromiseLike(value) {
      return !!value && typeof value.then === "function"
    }

    function isReactElement(value) {
      return !!(value && value.$$typeof)
    }

    function getNewCacheFallback() {
      var values = [];
      return {
        add: function (value) {
          values.push(value)
        }, has: function (value) {
          return values.indexOf(value) !== -1
        }
      }
    }

    var getNewCache = function (canUseWeakMap) {
      if (canUseWeakMap) {
        return function _getNewCache() {
          return new WeakSet
        }
      }
      return getNewCacheFallback
    }(HAS_WEAKSET_SUPPORT);

    function createCircularEqualCreator(isEqual) {
      return function createCircularEqual(comparator) {
        var _comparator = isEqual || comparator;
        return function circularEqual(a, b, indexOrKeyA, indexOrKeyB, parentA, parentB, cache) {
          if (cache === void 0) {
            cache = getNewCache()
          }
          var isCacheableA = !!a && typeof a === "object";
          var isCacheableB = !!b && typeof b === "object";
          if (isCacheableA || isCacheableB) {
            var hasA = isCacheableA && cache.has(a);
            var hasB = isCacheableB && cache.has(b);
            if (hasA || hasB) {
              return hasA && hasB
            }
            if (isCacheableA) {
              cache.add(a)
            }
            if (isCacheableB) {
              cache.add(b)
            }
          }
          return _comparator(a, b, cache)
        }
      }
    }

    function areArraysEqual(a, b, isEqual, meta) {
      var index = a.length;
      if (b.length !== index) {
        return false
      }
      while (index-- > 0) {
        if (!isEqual(a[index], b[index], index, index, a, b, meta)) {
          return false
        }
      }
      return true
    }

    function areMapsEqual(a, b, isEqual, meta) {
      var isValueEqual = a.size === b.size;
      if (isValueEqual && a.size) {
        var matchedIndices_1 = {};
        var indexA_1 = 0;
        a.forEach((function (aValue, aKey) {
          if (isValueEqual) {
            var hasMatch_1 = false;
            var matchIndexB_1 = 0;
            b.forEach((function (bValue, bKey) {
              if (!hasMatch_1 && !matchedIndices_1[matchIndexB_1]) {
                hasMatch_1 = isEqual(aKey, bKey, indexA_1, matchIndexB_1, a, b, meta) && isEqual(aValue, bValue, aKey, bKey, a, b, meta);
                if (hasMatch_1) {
                  matchedIndices_1[matchIndexB_1] = true
                }
              }
              matchIndexB_1++
            }));
            indexA_1++;
            isValueEqual = hasMatch_1
          }
        }))
      }
      return isValueEqual
    }

    var OWNER = "_owner";
    var hasOwnProperty = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);

    function areObjectsEqual(a, b, isEqual, meta) {
      var keysA = keys(a);
      var index = keysA.length;
      if (keys(b).length !== index) {
        return false
      }
      if (index) {
        var key = void 0;
        while (index-- > 0) {
          key = keysA[index];
          if (key === OWNER) {
            var reactElementA = isReactElement(a);
            var reactElementB = isReactElement(b);
            if ((reactElementA || reactElementB) && reactElementA !== reactElementB) {
              return false
            }
          }
          if (!hasOwnProperty(b, key) || !isEqual(a[key], b[key], key, key, a, b, meta)) {
            return false
          }
        }
      }
      return true
    }

    function areRegExpsEqual(a, b) {
      return a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.unicode === b.unicode && a.sticky === b.sticky && a.lastIndex === b.lastIndex
    }

    function areSetsEqual(a, b, isEqual, meta) {
      var isValueEqual = a.size === b.size;
      if (isValueEqual && a.size) {
        var matchedIndices_2 = {};
        a.forEach((function (aValue, aKey) {
          if (isValueEqual) {
            var hasMatch_2 = false;
            var matchIndex_1 = 0;
            b.forEach((function (bValue, bKey) {
              if (!hasMatch_2 && !matchedIndices_2[matchIndex_1]) {
                hasMatch_2 = isEqual(aValue, bValue, aKey, bKey, a, b, meta);
                if (hasMatch_2) {
                  matchedIndices_2[matchIndex_1] = true
                }
              }
              matchIndex_1++
            }));
            isValueEqual = hasMatch_2
          }
        }))
      }
      return isValueEqual
    }

    var HAS_MAP_SUPPORT = typeof Map === "function";
    var HAS_SET_SUPPORT = typeof Set === "function";

    function createComparator(createIsEqual) {
      var isEqual = typeof createIsEqual === "function" ? createIsEqual(comparator) : function (a, b, indexOrKeyA, indexOrKeyB, parentA, parentB, meta) {
        return comparator(a, b, meta)
      };

      function comparator(a, b, meta) {
        if (a === b) {
          return true
        }
        if (a && b && typeof a === "object" && typeof b === "object") {
          if (isPlainObject(a) && isPlainObject(b)) {
            return areObjectsEqual(a, b, isEqual, meta)
          }
          var aShape = Array.isArray(a);
          var bShape = Array.isArray(b);
          if (aShape || bShape) {
            return aShape === bShape && areArraysEqual(a, b, isEqual, meta)
          }
          aShape = a instanceof Date;
          bShape = b instanceof Date;
          if (aShape || bShape) {
            return aShape === bShape && sameValueZeroEqual(a.getTime(), b.getTime())
          }
          aShape = a instanceof RegExp;
          bShape = b instanceof RegExp;
          if (aShape || bShape) {
            return aShape === bShape && areRegExpsEqual(a, b)
          }
          if (isPromiseLike(a) || isPromiseLike(b)) {
            return a === b
          }
          if (HAS_MAP_SUPPORT) {
            aShape = a instanceof Map;
            bShape = b instanceof Map;
            if (aShape || bShape) {
              return aShape === bShape && areMapsEqual(a, b, isEqual, meta)
            }
          }
          if (HAS_SET_SUPPORT) {
            aShape = a instanceof Set;
            bShape = b instanceof Set;
            if (aShape || bShape) {
              return aShape === bShape && areSetsEqual(a, b, isEqual, meta)
            }
          }
          return areObjectsEqual(a, b, isEqual, meta)
        }
        return a !== a && b !== b
      }

      return comparator
    }

    var deepEqual = createComparator();
    var shallowEqual = createComparator((function () {
      return sameValueZeroEqual
    }));
    var circularDeepEqual = createComparator(createCircularEqualCreator());
    var circularShallowEqual = createComparator(createCircularEqualCreator(sameValueZeroEqual));
    exports.circularDeepEqual = circularDeepEqual;
    exports.circularShallowEqual = circularShallowEqual;
    exports.createCustomEqual = createComparator;
    exports.deepEqual = deepEqual;
    exports.sameValueZeroEqual = sameValueZeroEqual;
    exports.shallowEqual = shallowEqual
  }, {}]
}, {}, [72]);
