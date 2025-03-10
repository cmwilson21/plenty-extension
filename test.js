import { fetchBook } from "./index.js";
import { expect } from "chai";

describe("fetchBook", function () {
  this.timeout(5000); // Increase timeout to 5000ms

  it("should log the correct ISBN-13 value", async function () {
    const isbn13 = await fetchBook(url);
    expect(isbn13).to.equal("9780062963505"); // Replace with the expected ISBN-13 value
  });
});
