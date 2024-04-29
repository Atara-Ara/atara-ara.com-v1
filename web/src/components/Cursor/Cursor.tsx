import './Cursor.sass';
import { useState, useEffect } from 'react';

export const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        setIsMobileDevice(/android|webos|iphone|ipad|ipod|blackberry|windows phone/.test(userAgent));

        const updateCursorPosition = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = () => {
            setIsMouseDown(true);
        };

        const handleMouseUp = () => {
            setIsMouseDown(false);
        };

        document.addEventListener('mousemove', updateCursorPosition);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div className={`cursor ${isMouseDown ? 'mouse-down' : ''} ${isMobileDevice ? 'hide-on-mobile' : ''}`} style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
    );
};
