import { useEffect } from 'react';
import { analytics } from '@/lib/firebase';
import { logEvent } from 'firebase/analytics';
import { useLocation } from 'react-router-dom';
export const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();

    useEffect(() => {
        const initAnalytics = async () => {
            try {
                console.log('[Analytics] Initializing...');
                const analyticsInstance = await analytics();

                if (analyticsInstance) {
                    // Log page view
                    await logEvent(analyticsInstance, 'page_view', {
                        page_path: location.pathname,
                        page_title: document.title,
                        timestamp: new Date().toISOString(),
                        referrer: document.referrer || 'direct'
                    });

                    console.log('[Analytics] Page view event sent:', {
                        path: location.pathname,
                        title: document.title
                    });

                    // Log session data with more details
                    await logEvent(analyticsInstance, 'session_start', {
                        timestamp: new Date().toISOString(),
                        screen_resolution: `${window.screen.width}x${window.screen.height}`,
                        language: navigator.language,
                        platform: navigator.platform,
                        userAgent: navigator.userAgent
                    });

                    console.log('[Analytics] Session start event sent');
                } else {
                    console.warn('[Analytics] Analytics instance not available - Check Firebase config');
                }
            } catch (error) {
                console.error('[Analytics] Error:', error);
            }
        };

        initAnalytics();
    }, [location]);

    return <>{children}</>;
};