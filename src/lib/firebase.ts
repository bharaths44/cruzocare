import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Log environment variables
const logEnvVariables = () => {
    console.group('Firebase Configuration');
    console.log('API Key:', import.meta.env.VITE_FIREBASE_API_KEY ? '✅ Set' : '❌ Missing');
    console.log('Auth Domain:', import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? '✅ Set' : '❌ Missing');
    console.log('Project ID:', import.meta.env.VITE_FIREBASE_PROJECT_ID ? '✅ Set' : '❌ Missing');
    console.log('Storage Bucket:', import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ? '✅ Set' : '❌ Missing');
    console.log('Messaging Sender ID:', import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ? '✅ Set' : '❌ Missing');
    console.log('App ID:', import.meta.env.VITE_FIREBASE_APP_ID ? '✅ Set' : '❌ Missing');
    console.log('Measurement ID:', import.meta.env.VITE_FIREBASE_MEASUREMENT_ID ? '✅ Set' : '❌ Missing');
    console.groupEnd();
};

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Log environment variables in development
if (import.meta.env.DEV) {
    logEnvVariables();
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics and export it
export const analytics = async () => {
    try {
        if (await isSupported()) {
            const analyticsInstance = getAnalytics(app);
            console.log('[Analytics] Successfully initialized');
            return analyticsInstance;
        }
    } catch (error) {
        console.error('[Analytics] Error:', error);
    }
    return null;
};

export default app;