import React, { useState } from 'react';
import Bible_2 from "../assets/bible-2.jpg";
import Bible_3 from "../assets/bible-3.jpg";
import Bible_4 from "../assets/bible-4.jpg";
import Bible_5 from "../assets/bible-5.jpg";
import Cross from "../assets/cross.jpg";
import Cross_2 from "../assets/cross-2.jpg";
import { motion, useAnimation } from "framer-motion";

const upperMarquee = [Bible_2, Bible_3, Bible_4, Bible_5, Cross];
const lowerMarquee = [Cross_2, Bible_2, Bible_3, Bible_4, Bible_5];

function Gallery() {
    const controlsUpper1 = useAnimation();
    const controlsUpper2 = useAnimation();
    const controlsLower1 = useAnimation();
    const controlsLower2 = useAnimation();

    const startUpper = () => {
        controlsUpper1.start({
            x: "-100%",
            transition: { duration: 40, repeat: Infinity, ease: "linear" }
        });
        controlsUpper2.start({
            x: "-100%",
            transition: { duration: 40, repeat: Infinity, ease: "linear" }
        });
    };

    const startLower = () => {
        controlsLower1.start({
            x: 0,
            transition: { duration: 40, repeat: Infinity, ease: "linear" }
        });
        controlsLower2.start({
            x: 0,
            transition: { duration: 40, repeat: Infinity, ease: "linear" }
        });
    };

    // start animations on mount
    React.useEffect(() => {
        startUpper();
        startLower();
    }, []);

    return (
        <div className="relative">
            {/* Gradient borders */}
            <div className="pointer-events-none absolute top-0 left-0 h-full w-8 z-10"
                style={{ background: "linear-gradient(to right, #fafcfb 20%, #fafcfb 80%, transparent)" }} />
            <div className="pointer-events-none absolute top-0 right-0 h-full w-8 z-10"
                style={{ background: "linear-gradient(to left, #fafcfb 20%, #fafcfb 80%, transparent)" }} />

            <section>
                {/* Upper row */}
                <div
                    className='flex gap-2 overflow-hidden relative z-0'
                    onMouseEnter={() => {
                        controlsUpper1.stop();
                        controlsUpper2.stop();
                    }}
                    onMouseLeave={startUpper}
                >
                    <motion.div
                        animate={controlsUpper1}
                        initial={{ x: 0 }}
                        className='flex flex-shrink-0 gap-2'
                    >
                        {upperMarquee.map((image, index) => (
                            <img key={index} src={image} alt={`Marquee Image ${index + 1}`}
                                className="w-1/3 h-60 object-cover " />
                        ))}
                    </motion.div>
                    <motion.div
                        animate={controlsUpper2}
                        initial={{ x: 0 }}
                        className='flex flex-shrink-0 gap-2'
                    >
                        {upperMarquee.map((image, index) => (
                            <img key={index} src={image} alt={`Marquee Image ${index + 1}`}
                                className="w-1/3 h-60 object-cover " />
                        ))}
                    </motion.div>
                </div>

                {/* Lower row */}
                <div
                    className='flex gap-2 overflow-hidden mt-2 relative z-0'
                    onMouseEnter={() => {
                        controlsLower1.stop();
                        controlsLower2.stop();
                    }}
                    onMouseLeave={startLower}
                >
                    <motion.div
                        animate={controlsLower1}
                        initial={{ x: "-100%" }}
                        className='flex flex-shrink-0 gap-2'
                    >
                        {lowerMarquee.map((image, index) => (
                            <img key={index} src={image} alt={`Marquee Image ${index + 1}`}
                                className="w-1/3 h-60 object-cover" />
                        ))}
                    </motion.div>
                    <motion.div
                        animate={controlsLower2}
                        initial={{ x: "-100%" }}
                        className='flex flex-shrink-0 gap-2'
                    >
                        {lowerMarquee.map((image, index) => (
                            <img key={index} src={image} alt={`Marquee Image ${index + 1}`}
                                className="w-1/3 h-60 object-cover" />
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default Gallery;
