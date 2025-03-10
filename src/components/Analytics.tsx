import { useEffect } from 'react';
import { analytics } from '@/lib/firebase';
import { logEvent } from 'firebase/analytics';
import { useLocation } from 'react-router-dom';

export const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();

    useEffect(() => {
        const initAnalytics = async () => {
            const analyticsInstance = await analytics();
            if (analyticsInstance) {
                logEvent(analyticsInstance, 'page_view', {
                    page_path: location.pathname,
                    page_title: document.title
                });
            }
        };

        initAnalytics();
    }, [location]);

    return <>{children}</>;
};