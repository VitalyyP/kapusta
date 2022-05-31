import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useBooleanToggle, useData } from "./index";

import { getItems, addItem, deleteItem } from "../utils/indexdb";

jest.mock("../utils/indexdb", () => ({
  getItems: jest.fn(),
  addItem: jest.fn(),
  deleteItem: jest.fn(),
}));

describe("useBooleanToggle hook", () => {
  it("should handle toggle", () => {
    const { result } = renderHook(() => useBooleanToggle());

    expect(result.current[0]).toBe(false);

    act(() => result.current[1]());

    expect(result.current[0]).toBe(true);
  });
});

describe("useData hook", () => {});
