// src/tipos/tiposReconhecimentoVoz.ts

export interface tpReconhecimentoVoz extends EventTarget {
  start(): void;
  stop(): void;
  onresult: (event: tpEventoReconhecimentoVoz) => void;
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
}

export interface tpEventoReconhecimentoVoz extends Event {
  results: {
    [key: number]: {
      [key: number]: {
        transcript: string;
      };
    };
  };
}

export interface tpWindow {
  SpeechRecognition: {
    new (): tpReconhecimentoVoz;
  };
  webkitSpeechRecognition: {
    new (): tpReconhecimentoVoz;
  };
}
