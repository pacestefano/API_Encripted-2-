// config.js

// Inserisci la tua chiave API qui in chiaro
const apiKey = 'sk-NZsdjhu7jEQmD7EcGkNMjTNPCgX7A2Ku-Pdi0iby4AT3BlbkFJc0DkWjiDnABhx0F9BYGvusVeseT3IE7BNdDmy4THIA';

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
