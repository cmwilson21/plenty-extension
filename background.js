chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "redirectToNewUrl") {
    (async () => {
      try {
        const result = (await chrome.storage.session.get([message.url]))[
          message.url
        ];

        if (
          result &&
          (result.ok || Date.now() - result.time < 1000 * 60 * 60 * 12)
        ) {
          sendResponse({
            cached: true,
            ok: result.ok,
          });
          return;
        }

        const response = await fetch(message.url);
        sendResponse({
          status: response.status,
          ok: response.ok,
          result: JSON.stringify(result),
        });
        await chrome.storage.session.set({
          [message.url]: { ok: response.ok, time: Date.now() },
        });
      } catch (error) {
        sendResponse({ error: error.message, ok: false });
      }
    })();
  }

  return true;
});
