import { describe, expect, test } from "@jest/globals";
import { useGetRandomWords } from "../hooks/useGetRandomWords";

describe("sum module", () => {
  test("random words generation ukrainian 100", () => {
    const result = useGetRandomWords("UA", 100);
    console.log(result);
    expect(result.split(" ").length).toBe(100);
  });
});

describe("sum module", () => {
  test("random words generation english 100", () => {
    const result = useGetRandomWords("EN", 100);
    expect(result.split(" ").length).toBe(100);
  });
});

// describe("sum module", () => {
//   test("random number generation", () => {

//   });

// });
