import { assert } from "chai";
import { init, t } from "../src";

describe("t", () => {
  it("should return fallback if key is not initialized", () => {
    init({});
    let translation = t("home", "fallback");
    assert.equal(translation, "fallback");
  });
  it("should return translated value assigned to a key", () => {
    init({ home: "HOME" });
    let translation = t("home");
    assert(translation === "HOME");
  });
  it("should return translated value assigned to a deeply nested key", () => {
    init({ home: { title: "HOME" } });
    let translation = t("home.title");
    assert(translation === "HOME");
  });
});
