// background.js

// Create context menu items for different writing styles
chrome.runtime.onInstalled.addListener(() => {
    const styles = ["Professional", "Casual", "Polite", "Social Media"];

    styles.forEach(style => {
        chrome.contextMenus.create({
            id: style,
            title: `Convert to ${style} Style`,
            contexts: ["selection"]  // Only show this menu when text is selected
        });
    });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId) {
        const selectedText = info.selectionText;
        const writingStyle = info.menuItemId;
        console.log(`Selected text: "${selectedText}" to be converted to ${writingStyle} style`);

        // Send a message to the content script with the selected writing style and text
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: analyzeSelectedText,
            args: [selectedText, writingStyle]
        });
    }
});

// Function to handle text analysis in content script
function analyzeSelectedText(selectedText, writingStyle) {
    chrome.runtime.sendMessage({ text: selectedText, style: writingStyle });
}

// Handle messages from content script and API requests
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.text && request.style) {
        getSuggestionsFromAPI(request.text, request.style)
            .then(suggestions => {
                chrome.tabs.sendMessage(sender.tab.id, { transformedText: suggestions });
            })
            .catch(error => {
                console.error('Error fetching suggestions from API:', error);
                sendResponse({ error: 'Failed to fetch suggestions.' });
            });

        return true;  // Keeps the message channel open for asynchronous response
    }

    return true;  // Ensures the message channel stays open
});

async function getSuggestionsFromAPI(text, style) {
    const apiKey = 'Replace with your actual API key'; // Replace with your actual API key
    const stylePrompt = `Convert the following text to a ${style.toLowerCase()} writing style: "${text}"`;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4',  // Use the model you have access to, like 'gpt-3.5-turbo'
                messages: [{ role: 'user', content: stylePrompt }],
                max_tokens: 100,
                n: 1,
                stop: null,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const errorData = await response.json();  // Get detailed error info from API
            console.error('API error response:', errorData);
            throw new Error(`API error: ${errorData.error.message || response.statusText}`);
        }

        const data = await response.json();
        console.log('API response data:', data);  // Debugging line

        if (data.choices && data.choices[0] && data.choices[0].message) {
            return data.choices[0].message.content;
        } else {
            throw new Error('Unexpected API response format');
        }
    } catch (error) {
        console.error('Error in getSuggestionsFromAPI:', error);
        throw error;  // Re-throw the error to handle it in the calling function
    }
}

// Keep the service worker alive
if (chrome.alarms) {
    chrome.alarms.create('keepAlive', { periodInMinutes: 4 });

    chrome.alarms.onAlarm.addListener(alarm => {
        if (alarm.name === 'keepAlive') {
            console.log('Service worker is kept alive');
        }
    });
} else {
    console.error('chrome.alarms API is not available or create function is undefined');
}