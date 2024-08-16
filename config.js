// config.js

// Inserisci la tua chiave API qui in chiaro
const apiKey = 'sk-ichTICPsx3-m6OEW62dQlktgwddPEszRHIFzhe6-fLT3BlbkFJIVzaXPEJMfCh3lbR3BLUaLGyfweX41lIXky6uT9AEA';

// Codifica la chiave API in base64 per offuscarla
const encodedApiKey = btoa(apiKey);

// Funzione per decodificare la chiave API
function decodeApiKey(encodedKey) {
    return atob(encodedKey);
}

// Decodifica della chiave API
const OPENAI_API_KEY = decodeApiKey(encodedApiKey);

// Esportiamo la chiave API decodificata per l'uso in altri file
export { OPENAI_API_KEY };
