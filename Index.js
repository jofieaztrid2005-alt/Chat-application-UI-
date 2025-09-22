function sendMessage() {
  const input = document.getElementById('message-input');
  const message = input.value.trim();
  const chatBox = document.getElementById('chat-box');

  if (message !== '') {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'sent');
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate a reply after 1 second (you can remove this in real implementation)
    setTimeout(() => {
      const replyDiv = document.createElement('div');
      replyDiv.classList.add('message', 'received');
      replyDiv.innerText = 'This is a mock reply.';
      chatBox.appendChild(replyDiv);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }
}
