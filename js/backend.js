const STORAGE_TOKEN = 'ARYFIGWZGARDPQX4MMS91O4YD4Y4QSN3XY4QNDEK';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';

/**
 * An asynchronous function that sends a POST request to a predefined URL (STORAGE_URL)
 * with a payload that includes a key, a value, and a token (STORAGE_TOKEN).
 * The payload is converted into a stringified JSON object before being sent.
 * Once the server responds, the response is parsed back into JSON format and returned.
 */
async function setItem(key, value) {
    const payload = {key, value, token: STORAGE_TOKEN};
    return fetch(STORAGE_URL, {method: 'POST', body: JSON.stringify(payload)}).then((res) => res.json());
}

/**
 * This asynchronous function sends a GET request to a predefined URL (STORAGE_URL),
 * with a query string that includes a key and a token (STORAGE_TOKEN).
 * The server's response is then parsed into JSON format.
 * If the server's response contains a 'data' property, the value of 'data.value' is returned.
 * If the 'data' property is not present, an error is thrown indicating that no data could be found for the provided key.
 */
async function getItem(key) {
    const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    return fetch(url)
        .then((res) => res.json())
        .then((res) => {
            if (res.data) {
                return res.data.value;
            }
            throw `Could not find data with key: "${key}".`;
        });
}
