// content.js

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.transformedText) {
        replaceSelectedText(message.transformedText);
    }
});

// Replace selected text with transformed text
function replaceSelectedText(newText) {
    const activeElement = document.activeElement;

    if (activeElement.tagName === 'TEXTAREA' || (activeElement.tagName === 'INPUT' && activeElement.type === 'text')) {
        const start = activeElement.selectionStart;
        const end = activeElement.selectionEnd;

        activeElement.setRangeText(newText, start, end, 'end');
    } else if (activeElement.isContentEditable) {
        document.execCommand('insertText', false, newText);
    }
}

// Retry logic function (if needed)
async function retryAnalyzeText(text, retries = 5, delay = 2000) {
    for (let attempt = 0; attempt < retries; attempt++) {
        try {
            const response = await chrome.runtime.sendMessage({ text: text });
            console.log('Received response from background:', response);  // Debugging line
            return response;
        } catch (error) {
            if (error.message.includes('Extension context invalidated') && attempt < retries - 1) {
                console.warn(`Service worker invalidated. Retrying message... Attempt ${attempt + 1}`);
                await new Promise(resolve => setTimeout(resolve, delay));  // Wait before retrying
            } else {
                console.error('Error sending message to background:', error);
                throw error;
            }
        }
    }
}