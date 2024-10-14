function insertButton(bookUrl) {
  const button = document.createElement("button");
  button.textContent = "Support Local Bookstores, Shop Indie";
  button.style.display = "block";
  button.style.marginTop = "10px";
  button.onclick = () => {
    window.open(bookUrl, "_blank");
  };

  // Find the price element and insert the button after it
  const priceElement = document.querySelector(
    ".a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay"
  );
  if (priceElement) {
    priceElement.insertAdjacentElement("afterend", button);
  } else {
    console.error("Price element not found on Amazon page");
  }
}

//

try {
  // Extract ISBN-13 number from the Amazon page
  const isbnElement = Array.from(document.querySelectorAll("li")).find((el) =>
    el.textContent.includes("ISBN-13")
  );
  console.log("ISBN Element:", isbnElement);

  if (isbnElement) {
    const isbnText = isbnElement.textContent.trim();
    console.log("ISBN Text:", isbnText);

    // Use a regular expression to capture the ISBN-13 number
    const isbnMatch = isbnText.match(/ISBN-13\s*([\d-]+)/);
    if (isbnMatch && isbnMatch[1]) {
      let isbn13 = isbnMatch[1].replace(/[^\d]/g, ""); // Remove any non-digit characters, including hyphens
      console.log("ISBN-13 found:", isbn13);

      // Use the ISBN-13 to create the Bookshop.org URL
      const bookUrl = `https://bookshop.org/a/55741/${isbn13}`;
      console.log("Book URL:", bookUrl);
      insertButton(bookUrl);
    } else {
      console.error("ISBN-13 format is incorrect");
    }
  } else {
    console.error("ISBN-13 element not found on Amazon page");
  }
} catch (error) {
  console.error("Error in script execution:", error);
}

// Updated insertButton function
function insertButton(url) {
  console.log("Inserting button with URL:", url);
  const button = document.createElement("button");
  button.textContent = "Support Plenty, Shop Indie";
  button.onclick = () => window.open(url, "_blank");

  // style
  button.style.backgroundColor = "#FFCA4B";
  button.style.color = "black";
  button.style.border = "none";
  button.style.padding = "10px 20px";
  button.style.cursor = "pointer";

  const targetDiv = document.getElementById(
    "goodreadsRatingsWidget_feature_div"
  );
  if (targetDiv) {
    targetDiv.appendChild(button);
    console.log("Button inserted successfully.");
  } else {
    console.error("Target div not found.");
  }
}
