chrome.storage.local.get("lastLink", ({ lastLink }) => {
  const linkDiv = document.getElementById("link");
  linkDiv.textContent = lastLink;
});

document.getElementById("copy").onclick = async () => {
  const { lastLink } = await chrome.storage.local.get("lastLink");
  navigator.clipboard.writeText(lastLink);
};
