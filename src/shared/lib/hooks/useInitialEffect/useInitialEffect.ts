import { useEffect } from 'react';

export const useInitialEffect = (callback: () => void) => {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }
        // its normal
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
