
# ChatGPT Writing Assistant Chrome & Brave Extension

## Overview

ChatGPT Writing Assistant is a Chrome extension that allows users to improve their writing directly in Google Docs and other text input fields by selecting different writing styles (Professional, Casual, Polite, Social Media). The extension uses OpenAI's GPT-4 model to suggest style changes and reformat the text based on user preference.

## Features

- **Context Menu for Writing Styles**: Right-click on selected text to choose from various writing styles (Professional, Casual, Polite, Social Media).
- **Real-time Text Transformation**: The selected text is automatically converted to the chosen style using OpenAI's API.
- **Support for Multiple Text Fields**: Works with text areas, input fields, and content-editable elements on most websites.

## Installation

### Step 1: Clone or Download the Repository

To get started, clone or download this repository to your local machine:

\`\`\`bash
git clone https://github.com/your-username/chatgpt-writing-assistant.git
\`\`\`

### Step 2: Open Chrome Extensions Page

1. Open Chrome and navigate to the **Extensions** page by typing \`chrome://extensions/\` in the address bar.
2. Enable **Developer Mode** (toggle in the top right corner).

### Step 3: Load the Extension

1. Click the **Load unpacked** button in the Chrome Extensions page.
2. Select the folder where you cloned or downloaded the \`chatgpt-writing-assistant\` repository.
3. The extension should now be visible in your list of Chrome extensions.

### Step 4: Set Up OpenAI API Key

To use the extension, you'll need your own OpenAI API key. Follow these steps:

1. Click on the ChatGPT Writing Assistant icon in your Chrome toolbar to open the settings popup.
2. Enter your OpenAI API key in the designated input field.
3. Click "Save Key". Your API key will be securely stored.
4. You can obtain an API key by signing up at [OpenAI](https://platform.openai.com).

### Step 5: Use the Extension

1. **Select Text**: Open a webpage with text input fields or a content-editable area (such as Google Docs).
2. **Right-click**: Highlight the text you want to change, then right-click.
3. **Choose Writing Style**: From the context menu, select one of the following writing styles:
   - Professional
   - Casual
   - Polite
   - Social Media
4. **Text Transforms**: The extension will contact the OpenAI API, process the text, and replace the selected text with the chosen writing style.


## Development Setup

### Prerequisites

- [Google Chrome](https://www.google.com/chrome/)
- [Node.js](https://nodejs.org/) (if you plan on using build tools or package managers)

### Installation Steps

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/chatgpt-writing-assistant.git
   cd chatgpt-writing-assistant
   \`\`\`
2. Make any necessary modifications or improvements to the extension.
3. Reload the extension in \`chrome://extensions/\`.

### Optional - Run Extension in Incognito Mode

1. Go to \`chrome://extensions/\`.
2. Find the ChatGPT Writing Assistant extension and enable "Allow in Incognito."

## Technologies Used

- **JavaScript**: Core logic for Chrome extension.
- **OpenAI GPT-4 API**: Provides text transformation based on writing styles.
- **Chrome Extensions API**: Uses context menus, scripting, and background workers.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch: \`git checkout -b my-new-feature\`.
3. Commit your changes: \`git commit -m 'Add some feature'\`.
4. Push to the branch: \`git push origin my-new-feature\`.
5. Submit a pull request.

Please make sure your code passes any tests before submitting!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Issues and Feedback

Feel free to open an issue if you have any questions, bugs, or feature requests. You can also email me at: [ciyo65@gmail.com].

## Roadmap

- **New Writing Styles**: Add more specialized writing styles (e.g., Legal, Technical).
- **User Preferences**: Save the user's most-used style as the default.
- **More Language Support**: Enable support for other languages besides English.

## Contact

For questions, feedback, or contributions, feel free to contact me at: [ciyo65@gmail.com].

---

### Happy Writing! 😊
