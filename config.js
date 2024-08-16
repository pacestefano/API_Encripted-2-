// config.js

// Inserisci la tua chiave API qui in chiaro
const apiKey = 'sk-Y2EQ243dTXiAiVk8gDOSI9QMnj6mttVu7ZkVCuwZTZT3BlbkFJBTqJ4N6S0nLo1jxibk_J0mihDl0HQ0elVyOb6FKssA';

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
