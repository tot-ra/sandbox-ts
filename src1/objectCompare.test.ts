import { objectCompare } from "./objectCompare.ts";

describe("Basic test", () => {
  test("empty objects should pass", () => {
    const result = objectCompare({}, {});
    expect(result).toEqual(true);
  });

  test("simple case", () => {
    expect(
      objectCompare(
        {
          number: 1,
          string: "abc",
          float: 23.45,
        },
        {
          number: 1,
          string: "abc",
          float: 23.45,
        },
      ),
    ).toEqual(true);
  });

  test("both nulls", () => {
    expect(objectCompare({ a: null }, { a: null })).toEqual(true);
  });

  describe("arrays", () => {
    test("empty array case", () => {
      expect(objectCompare([], [])).toEqual(true);
    });

    test("array case", () => {
      expect(objectCompare([1, 2], [1, 2])).toEqual(true);
    });
    test("array invalid case", () => {
      expect(objectCompare([1, 2], [1, "2"])).toEqual(false);
    });
  });
});
