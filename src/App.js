import HyTechAi from './components/HyTechAI';
import './App.css';

function App() {
  return (
    <>
      <HyTechAi 
	  aiModel="gpt-4"
	  aiPrompt="Hello There"
	  aiName="Generic AI app"
	  aiMessage="Hello, I'm AI app, Ask me anything!"
	  senderName="You"
	  typingLoad="you AI is typing..."
	  buttonText="Ask"
	/>
    </>
  );
}

export default App;
