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
      console.error("PE: ISBN-13 format is incorrect");
    }
  } else {
    console.error("PE: ISBN-13 element not found on Amazon page");
  }
} catch (error) {
  console.error("PE: Error in script execution:", error);
}
async function checkIfUrlExists(url) {
  const response = await chrome.runtime.sendMessage({
    action: "redirectToNewUrl",
    url: url,
  });
  console.log("PE: Response from background script:", response);
  return response.ok;
}

// Updated insertButton function
async function insertButton(url) {
  const button = document.createElement("button");
  button.textContent = "Support Plenty, Shop Indie";
  button.onclick = () => window.open(url, "_blank");

  // style
  button.disabled = true;
  button.style.border = "none";
  button.style.padding = "8px 10px";
  button.style.fontSize = "16px";
  button.style.cursor = "not-allowed";
  button.style.borderRadius = "5px";
  button.style.marginBottom = "10px";
  const targetDiv = document.getElementById("centerAttributesColumns");

  if (targetDiv) {
    targetDiv.after(button);
    if (await checkIfUrlExists(url)) {
      button.style.backgroundColor = "#3DED97";
      button.style.color = "#354A21";
      button.style.cursor = "pointer";
      button.disabled = false;
    }
  } else {
    console.error("PE: Target div not found.");
  }
}
