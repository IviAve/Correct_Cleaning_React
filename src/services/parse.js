



import Parse from 'parse';

if (!Parse.applicationId) {
    Parse.initialize(import.meta.env.VITE_APP_ID, import.meta.env.VITE_JS_KEY);
    Parse.serverURL = import.meta.env.VITE_SERVER_URL;
}

export { Parse };