chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "redirectToNewUrl") {
    const newUrl = `https://example.com/search?isbn=${message.isbn}`;
    chrome.tabs.update(sender.tab.id, { url: newUrl });
  }
});
