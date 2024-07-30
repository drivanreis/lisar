// src/tipos/tiposReconhecimentoVoz.ts

export interface ReconhecimentoVoz extends EventTarget {
  start(): void;
  stop(): void;
  onresult: (event: EventoReconhecimentoVoz) => void;
  onstart: () => void;
  onend: () => void;
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
}

export interface EventoReconhecimentoVoz extends Event {
  results: {
    [key: number]: {
      [key: number]: {
        transcript: string;
      };
    };
  };
}

declare global {
  interface Window {
    SpeechRecognition: {
      new (): ReconhecimentoVoz;
    };
    webkitSpeechRecognition: {
      new (): ReconhecimentoVoz;
    };
  }
}
