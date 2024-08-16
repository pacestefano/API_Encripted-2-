// config.js

// Inserisci la tua chiave API qui in chiaro
const apiKey = 'sk-pLZLS5xiLkzUmmwz0xeCbKwv3OzYde128Ek-0cGYEXT3BlbkFJQtPWTN3ni9SP5pYJDPNF2-OglUmkUBPzjtkYAIvqcA';

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
