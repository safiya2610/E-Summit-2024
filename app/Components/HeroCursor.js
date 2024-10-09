import React, { useEffect } from 'react';
import LegendaryCursor from 'legendary-cursor';
import texture1 from '../Images/CursorBg.png';

const HeroCursor = () => {
    useEffect(() => {
        if (LegendaryCursor.init) {
            LegendaryCursor.init({
            lineSize: 0.08,
            opacityDecrement: 0.99,
            speedExpFactor: 0.8,
            lineExpFactor: 0.6,
            sparklesCount: 65,
            maxOpacity: 0.99,
            texture1: texture1,
            });
        }

        return () => {
            if (LegendaryCursor.destroy) {
                LegendaryCursor.destroy();
            }
        };
    }, []);

    return (
        <div></div>
    );
};

export default HeroCursor;
