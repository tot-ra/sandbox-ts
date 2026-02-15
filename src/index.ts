export function objectCompare(o1: Object, o2: Object): Boolean {
  if (Object.keys(o1).length != Object.keys(o2).length) {
    return false;
  }

  // iterate properties
  for (const [k1, v1] of Object.entries(o1)) {
    const v2 = o2[k1];

    // key not found
    if (v2 == undefined) {
      return false;
    }

    // type mismatch for keys
    if (typeof v1 != typeof v2) {
      return false;
    }

    switch (typeof v1) {
      case "string":
      case "number":
        if (v1 !== v2) return false;
        break;
    }

    // is string
    // is int
    // compare arrays
    if (Array.isArray(v1)) {
      return arrayCompare(v1, v2);
    }

    if (v1 instanceof Set) {
      return setCompare(v1);
    }

    if (v1 instanceof Map) {
      return mapCompare(v1, v2);
    }

    throw new Error("unsupported type");
  }

  return true;
}

// TODO: implement
function arrayCompare(v1: Array, v2: Array): boolean {
  return true;
}

// TODO implement
function mapCompare(v1: Map, v2: Map): boolean {
  return true;
}

function setCompare(v1: Set, v2: Set): boolean {
  return true;
}
