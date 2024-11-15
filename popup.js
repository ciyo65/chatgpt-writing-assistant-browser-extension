// popup.js

document.getElementById('saveSettings').addEventListener('click', function() {
    const grammarCheck = document.getElementById('grammarCheck').checked;
    const styleCheck = document.getElementById('styleCheck').checked;
    chrome.storage.sync.set({ grammarCheck, styleCheck }, function() {
        alert('Settings saved!');
    });
});