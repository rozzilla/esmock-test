import esmock from "esmock";
import { it } from "node:test";
import { equal } from "node:assert";

it("sum", async () => {
  const { main } = await esmock("../main.js", {
    "../sum.js": {
      sum: () => 42,
    },
  });

  equal(main(), 42);
});
