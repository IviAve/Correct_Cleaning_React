// import Parse from 'parse';


// Parse.initialize("Ean7ER6LcWvTWRbXiE8on65F4S4zwWEnBzQ1zPW8", "wnkEUp5EaP0FO5PHZzQC5UCgGqdsmiu0qZCpaVgy");
// Parse.serverURL = 'https://parseapi.back4app.com/';

// export { Parse }; 


// import Parse from 'parse';


// Parse.initialize(import.meta.env.VITE_APP_ID, import.meta.env.VITE_JS_KEY);
// Parse.serverURL = import.meta.env.VITE_SERVER_URL;

// export { Parse };


import Parse from 'parse';

if (!Parse.applicationId) {
    Parse.initialize(import.meta.env.VITE_APP_ID, import.meta.env.VITE_JS_KEY);
    Parse.serverURL = import.meta.env.VITE_SERVER_URL;
}

export { Parse };