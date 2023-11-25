const all = require("../all");
const selected = require("../selected");
const { it, mock } = require("node:test");
const { equal } = require("node:assert");
const op = require("../sum");

it("all", async () => {
  mock.method(op, "sum", () => 42);
  equal(all.main(), 42);
});

it("selected", async () => {
  mock.method(op, "sum", () => 42);
  equal(selected.main(), 2);
});
