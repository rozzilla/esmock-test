const all = require("../main");
const { it } = require("node:test");
const { equal } = require("node:assert");

it("sum", async () => {
  const original = all.main;
  all.main = () => 42;
  equal(all.main(), 42, "manual mock");
  all.main = original;
  equal(all.main(), 2, "revert");
});
