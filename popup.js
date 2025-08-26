// popup.js

document.addEventListener('DOMContentLoaded', async () => {
    const apiKeyInput = document.getElementById('apiKey');
    const saveButton = document.getElementById('saveSettings');
    const statusMessage = document.getElementById('status-message');

    // Load saved API key
    try {
        const data = await chrome.storage.sync.get('apiKey');
        if (data.apiKey) {
            apiKeyInput.value = data.apiKey;
        }
    } catch (error) {
        console.error('Error loading API key:', error);
    }

    // Save API key
    saveButton.addEventListener('click', async () => {
        const apiKey = apiKeyInput.value.trim();

        if (!apiKey) {
            statusMessage.textContent = 'Please enter a valid API key.';
            statusMessage.className = 'error';
            return;
        }

        try {
            await chrome.storage.sync.set({ apiKey });
            statusMessage.textContent = 'API key saved successfully!';
            statusMessage.className = 'success';
        } catch (error) {
            console.error('Error saving API key:', error);
            statusMessage.textContent = 'Failed to save API key.';
            statusMessage.className = 'error';
        }
    });
});