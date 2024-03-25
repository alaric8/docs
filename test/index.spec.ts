import { expect, test } from "vitest";
import { accessObject, nav, siderbar } from "../.vitepress/utils";
import fastGlob from "fast-glob";
import FastGlob from "fast-glob";
import path from "path";
test("nav", () => {
  const result = nav(["**/*"]);
  console.log(result);
});
test("convertPathToTree", () => {
  const result = siderbar(["vscode*/**/*.md", "!public"]);
  console.log(JSON.stringify(result));
  expect(1 + 1).toBe(2);
});
