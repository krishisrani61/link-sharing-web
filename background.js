chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "share-link",
    title: "Generate Shareable Link",
    contexts: ["page", "link"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  const url = info.linkUrl || info.pageUrl;

  const response = await fetch("https://link-sharing-backend.ikrish61.workers.dev/api/share", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url })
  });

  const data = await response.json();
  const code = data.code;
  const shortLink = `https://link-sharing-backend.ikrish61.workers.dev/${code}`;

  await chrome.storage.local.set({ lastLink: shortLink });

  chrome.action.openPopup();
});
