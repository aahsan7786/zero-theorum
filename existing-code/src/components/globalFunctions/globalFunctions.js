import { useEffect } from 'react';

// DETECT EMPTY OBJECT //
export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};

// TRANSFORM URL LINK //
export const toURLTransform = (text) => {
    return text.toLowerCase().replace(/\s/g, '-');
};

// DETECT CLICK OUTSIDE COMPONENT //
export function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = event => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }

                handler(event);
            };

            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        },
        [ref, handler]
    );
}
