function sendToPocket(tabs) {
  tabs.forEach(function(chrometab) {
    var url = encodeURIComponent(chrometab.url);
    var id = chrometab.id;
    var prefix = "http://getpocket.com/edit?url=";
    var newurl = prefix + url;
    chrome.tabs.update(id, { url: newurl });
  });
}

// Called when the user clicks on the browser action icon.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({ url: "http://*/*", currentWindow: true }, sendToPocket );
  chrome.tabs.query({ url: "https://*/*", currentWindow: true }, sendToPocket );
});
