import React, { useState } from 'react';
import { EventoReconhecimentoVoz } from '../types/tiposReconhecimentoVoz';

const ReconhecimentoVoz: React.FC = () => {
  const [transcript, setTranscript] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  

  const startRecognition = () => {
    const ReconhecimentoVozAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!ReconhecimentoVozAPI) {
      console.error('Speech Recognition API não é suportada neste navegador.');
      return;
    }
    const reconhecimento = new ReconhecimentoVozAPI();
    reconhecimento.lang = 'pt-BR'; // Defina o idioma conforme necessário
    reconhecimento.interimResults = false;
    reconhecimento.maxAlternatives = 1;

    reconhecimento.onresult = (event: EventoReconhecimentoVoz) => {
      const transcriptResult = event.results[0][0].transcript;
      setTranscript(transcriptResult);
      handleChatGPTRequest(transcriptResult);
    };

    reconhecimento.start();
  };

  const handleChatGPTRequest = async (text: string) => {
    // Aqui você fará a integração com a API do ChatGPT.
    // Simulando uma resposta do ChatGPT:
    const simulatedResponse = `Você disse: ${text}`;
    setResponse(simulatedResponse);
    speak(simulatedResponse);
  };

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR'; // Defina o idioma conforme necessário
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <button onClick={startRecognition}>Iniciar Reconhecimento</button>
      <p>Transcrição: {transcript}</p>
      <p>Resposta: {response}</p>
    </div>
  );
};

export default ReconhecimentoVoz;
