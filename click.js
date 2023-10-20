chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: "https://optifine.net/downloads" });
});