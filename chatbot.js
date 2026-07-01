// --- CHATBOT MODULE ---

const API_BASE_URL = window.location.port === '3000' ? '' : 'http://localhost:3000';

export const renderChatbot = () => {
    const chatbotContainer = document.getElementById('advisory-content') || document.getElementById('chatbot-content');
    if (chatbotContainer) {
        chatbotContainer.innerHTML = `
        <div class="rounded-lg border bg-white shadow-sm h-[70vh] flex flex-col">
            <div class="p-4 border-b">
                <h3 class="text-xl font-bold" data-key="chatbot_title">AI Farming Assistant</h3>
                <p class="text-sm text-gray-500" data-key="chatbot_subtitle">Ask me anything about farming</p>
            </div>
            <div id="chatbot-messages" class="flex-1 p-6 space-y-2 overflow-y-auto">
                <!-- Messages will be injected here by the chatbot logic -->
            </div>
            <div class="p-4 border-t bg-gray-50">
                <div id="chatbot-input-container" class="flex items-center gap-2">
                    <input type="text" id="chatbot-input" class="flex-1 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary p-2" placeholder="Ask a question..." data-key-placeholder="chatbot_placeholder">
                    <button id="chatbot-send" class="gradient-primary text-white font-medium py-2 px-4 rounded-lg">Send</button>
                </div>
            </div>
        </div>
        `;
    }
};

export const initializeChatbot = (translations = window.translations || {}) => {
    const messagesContainer = document.getElementById('chatbot-messages');
    const input = document.getElementById('chatbot-input');
    const sendButton = document.getElementById('chatbot-send');
    if (!messagesContainer || !input || !sendButton) return;

    let chatHistory = [];

    const addMessage = (sender, message, isHtml = false) => {
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('chat-message', `chat-message-${sender}`);

        const contentElement = document.createElement('div');
        contentElement.classList.add('chat-bubble');

        if (isHtml) {
            contentElement.innerHTML = message;
        } else {
            contentElement.textContent = message;
        }

        messageWrapper.appendChild(contentElement);
        messagesContainer.appendChild(messageWrapper);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return messageWrapper;
    };

    const renderChatOptions = () => {
        const options = [
            { key: 'weather', 'data-key': 'chatbot_option_weather', text: 'Weather Guidance' },
            { key: 'pest', 'data-key': 'chatbot_option_pest', text: 'Pest Identification' },
            { key: 'crop', 'data-key': 'chatbot_option_crop', text: 'Crop Management' },
            { key: 'soil', 'data-key': 'chatbot_option_soil', text: 'Soil Health' },
            { key: 'market', 'data-key': 'chatbot_option_market', text: 'Market Rates' },
        ];
        const optionsHtml = `
            <div class="chat-options-container flex flex-wrap gap-2 justify-center mt-3">
                ${options.map(opt => `<button class="chat-option-btn border border-green-600 text-green-700 hover:bg-green-50 px-3 py-1 rounded-full text-sm font-medium transition-all" data-option="${opt.key}" data-key="${opt['data-key']}">${translations[opt['data-key']] || opt.text}</button>`).join('')}
            </div>
        `;
        const messageWrapper = addMessage('ai', optionsHtml, true);
        messageWrapper.querySelector('.chat-bubble').style.background = 'transparent';
    };

    const displayWelcomeMessage = () => {
        const welcomeKey = 'chatbot_welcome_options';
        const welcomeText = translations[welcomeKey] || "Hello! I am your AI Farming Assistant. How can I help you today? Please select a topic or type your question below:";
        addMessage('ai', welcomeText);
        renderChatOptions();
    };

    const sendMessageToBackend = async (userText) => {
        const typingIndicator = addMessage('ai', '<div class="typing-indicator"><span>.</span><span>.</span><span>.</span></div>', true);

        try {
            const response = await fetch(`${API_BASE_URL}/api/ai/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ history: chatHistory, message: userText })
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                throw new Error(errData.message || `Server Error (${response.status})`);
            }

            const data = await response.json();
            typingIndicator.remove();

            if (data && data.reply) {
                addMessage('ai', data.reply);
                chatHistory.push({ role: "user", parts: [{ text: userText }] });
                chatHistory.push({ role: "model", parts: [{ text: data.reply }] });
            } else {
                addMessage('ai', 'Sorry, I could not generate advice at this moment.');
            }
        } catch (error) {
            typingIndicator.remove();
            addMessage('ai', `❌ ${error.message}`);
            console.error("Chatbot API Error:", error);
        } finally {
            input.disabled = false;
            sendButton.disabled = false;
            input.focus();
        }
    };

    const handleOptionClick = async (e) => {
        if (!e.target.classList.contains('chat-option-btn')) return;

        const optionText = e.target.textContent;
        const optionsContainer = document.querySelector('.chat-options-container');
        if (optionsContainer && optionsContainer.parentElement && optionsContainer.parentElement.parentElement) {
            optionsContainer.parentElement.parentElement.remove();
        }

        addMessage('user', optionText);
        input.disabled = true;
        sendButton.disabled = true;
        await sendMessageToBackend(`Tell me about ${optionText} for Indian farming.`);
    };

    const handleSend = async () => {
        const userMessage = input.value.trim();
        if (!userMessage) return;

        addMessage('user', userMessage);
        input.value = '';
        input.disabled = true;
        sendButton.disabled = true;

        await sendMessageToBackend(userMessage);
    };

    messagesContainer.addEventListener('click', handleOptionClick);
    sendButton.addEventListener('click', handleSend);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });

    displayWelcomeMessage();
    if (typeof window.translatePage === 'function') window.translatePage();
};

window.renderChatbot = renderChatbot;
window.initializeChatbot = initializeChatbot;
