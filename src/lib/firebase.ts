import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, setUserProperties, logEvent, setAnalyticsCollectionEnabled } from "firebase/analytics";

// Log environment variables with values for debugging
const logEnvVariables = () => {
    console.group('Firebase Configuration Values:');
    const configs = {
        'API Key': import.meta.env.VITE_FIREBASE_API_KEY,
        'Auth Domain': import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        'Project ID': import.meta.env.VITE_FIREBASE_PROJECT_ID,
        'Storage Bucket': import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        'Messaging Sender ID': import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        'App ID': import.meta.env.VITE_FIREBASE_APP_ID,
        'Measurement ID': import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
    };

    Object.entries(configs).forEach(([key, value]) => {
        console.log(`${key}:`, value ? value : '❌ Missing');
    });
    console.groupEnd();

    // Validate required fields
    if (!configs['Project ID']) {
        throw new Error('Firebase Project ID is required but missing');
    }
};

// Initialize Firebase with validation
const initializeFirebase = () => {
    // Log environment variables in development
    if (import.meta.env.DEV) {
        logEnvVariables();
    }

    const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
        measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
    };

    // Validate required config
    if (!firebaseConfig.projectId) {
        throw new Error('Firebase initialization failed: projectId is required');
    }

    return initializeApp(firebaseConfig);
};

// Initialize Firebase
const app = initializeFirebase();

// Initialize Analytics and export it
export const analytics = async () => {
    try {
        if (await isSupported()) {
            const analyticsInstance = getAnalytics(app);
            setAnalyticsCollectionEnabled(analyticsInstance, true);
            // Set some user properties for testing
            setUserProperties(analyticsInstance, {
                user_type: 'test_user',
                environment: import.meta.env.MODE
            });

            // Send a test event
            logEvent(analyticsInstance, 'test_initialization', {
                timestamp: new Date().toISOString(),
                environment: import.meta.env.MODE
            });

            console.log('[Analytics] Successfully initialized');
            console.log('[Analytics] Debug mode:', import.meta.env.DEV ? 'enabled' : 'disabled');
            console.log('[Analytics] Project ID:', import.meta.env.VITE_FIREBASE_PROJECT_ID);

            return analyticsInstance;
        }
    } catch (error) {
        console.error('[Analytics] Error:', error);
        console.error('[Analytics] Project ID:', import.meta.env.VITE_FIREBASE_PROJECT_ID);
    }
    return null;
};

export default app;