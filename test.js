import { fetchBook } from "./index.js";
import { expect } from "chai";

describe("fetchBook", function () {
  this.timeout(5000); // Increase timeout to 5000ms

  it("should log the correct ISBN-13 value", async function () {
    // const url = "https://www.amazon.com/Adventures-Amina-al-Sirafi-Novel/dp/0062963503/ref=sr_1_1?crid=3OXLLKOYJ0AU9&dib=eyJ2IjoiMSJ9.WLCSIvj0JiF1N61Y0ns7Aw3N7kj00fq8QmoHPv8TWAP-qaknk95J09YWGM5VPyVlEgjMeOL97wNSUCNfrE2BSA.W3jLYAnGnopr50DrW71v9A59EEE3NHCMIF1bmV7SnJ8&dib_tag=se&keywords=amina+al+sirafi&qid=1724806516&sprefix=amina+al+si%2Caps%2C111&sr=8-1";
    const isbn13 = await fetchBook(url);
    expect(isbn13).to.equal("9780062963505"); // Replace with the expected ISBN-13 value
  });
});
