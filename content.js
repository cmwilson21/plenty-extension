try {
  // Extract ISBN-13 number from the Amazon page
  const isbnElement = Array.from(document.querySelectorAll("li")).find((el) =>
    el.textContent.includes("ISBN-13")
  );

  if (isbnElement) {
    const isbnText = isbnElement.textContent.trim();

    // Use a regular expression to capture the ISBN-13 number
    const isbnMatch = isbnText.match(/ISBN-13\s*([\d-]+)/);
    if (isbnMatch && isbnMatch[1]) {
      let isbn13 = isbnMatch[1].replace(/[^\d]/g, ""); // Remove any non-digit characters, including hyphens

      // Use the ISBN-13 to create the Bookshop.org URL
      const bookUrl = `https://bookshop.org/a/55741/${isbn13}`;
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
  const button = document.createElement("button");
  button.textContent = "Support Plenty, Shop Indie";
  button.onclick = () => window.open(url, "_blank");

  // style
  button.style.backgroundColor = "#FFCA4B";
  button.style.color = "#354A21";
  button.style.border = "none";
  button.style.padding = "10px 20px";
  button.style.cursor = "pointer";
  button.style.borderRadius = "5px";
  button.style.marginBottom = "10px";

  const targetDiv = document.getElementById(
    "goodreadsRatingsWidget_feature_div"
  );
  if (targetDiv) {
    targetDiv.appendChild(button);
  } else {
    console.error("Target div not found.");
  }
}
