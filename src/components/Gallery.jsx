import React, { useState } from 'react';

import Pic_2 from "../assets/pic_2.png";
import Pic_3 from "../assets/pic_3.png";
import Pic_4 from "../assets/pic_4.png";
import Pic_5 from "../assets/pic_5.png";
import Pic_6 from "../assets/pic_6.jpg";
import Pic_7 from "../assets/pic_7.jpg";
import Pic_8 from "../assets/pic_8.jpg";
import Pic_9 from "../assets/pic_9.jpg";
import Pic_10 from "../assets/pic_10.jpg";
import Pic_11 from "../assets/pic_11.jpg";
import Pic_12 from "../assets/pic_12.jpg";
import Pic_13 from "../assets/pic_13.jpg";
import Pic_14 from "../assets/pic_14.jpg";
import Pic_15 from "../assets/pic_15.jpg";
import Pic_16 from "../assets/pic_16.jpg";
import Pic_17 from "../assets/pic_17.jpg";
import Pic_18 from "../assets/pic_18.jpg";
import Pic_19 from "../assets/pic_19.jpg";
import Pic_20 from "../assets/pic_20.jpg";
import Pic_21 from "../assets/pic_21.jpg";
import Pic_22 from "../assets/pic_22.jpg";
import Pic_23 from "../assets/pic_23.jpg";
import Pic_24 from "../assets/pic_24.jpg";
import Pic_25 from "../assets/pic_25.jpg";
import Pic_26 from "../assets/pic_26.jpg";
import Pic_27 from "../assets/pic_27.jpg";
import Pic_28 from "../assets/pic_28.jpg";
import Pic_29 from "../assets/pic_29.jpg";
import Pic_30 from "../assets/pic_30.jpg";
import Pic_31 from "../assets/pic_31.jpg";
import Pic_32 from "../assets/pic_32.jpg";
import Pic_33 from "../assets/pic_33.jpg";
import Pic_34 from "../assets/pic_34.jpg";
import Pic_35 from "../assets/pic_35.jpg";

import { motion, useAnimation } from "framer-motion";

const upperMarquee = [Pic_2, Pic_3, Pic_4, Pic_5, Pic_6, Pic_7, Pic_8, Pic_9, Pic_10, Pic_11, Pic_12, Pic_13, Pic_14, Pic_15, Pic_33, Pic_34, Pic_35];
const lowerMarquee = [Pic_16, Pic_17, Pic_18, Pic_19, Pic_20, Pic_21, Pic_22, Pic_23, Pic_24, Pic_25, Pic_26, Pic_27, Pic_28, Pic_29, Pic_30, Pic_31, Pic_32];
const allImages = [...upperMarquee, ...lowerMarquee];
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
        <>
            {/* Desktop Marquee Gallery */}
            <div className="md:relative hidden md:block my-8 mx-4 md:mx-0">
                {/* ...existing code... */}
                <div className="pointer-events-none absolute top-0 left-0 h-full w-8 z-10"
                    style={{ background: "linear-gradient(to right, #fafcfb 20%, #fafcfb 80%, transparent)" }} />
                <div className="pointer-events-none absolute top-0 right-0 h-full w-8 z-10"
                    style={{ background: "linear-gradient(to left, #fafcfb 20%, #fafcfb 80%, transparent)" }} />
                <section>
                    {/* ...existing code... */}
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
                                    className="w-[40vw] sm:w-1/3 h-40 sm:h-60 object-cover " />
                            ))}
                        </motion.div>
                        <motion.div
                            animate={controlsUpper2}
                            initial={{ x: 0 }}
                            className='flex flex-shrink-0 gap-2'
                        >
                            {upperMarquee.map((image, index) => (
                                <img key={index} src={image} alt={`Marquee Image ${index + 1}`}
                                    className="w-[40vw] sm:w-1/3 h-40 sm:h-60 object-cover " />
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
                                    className="w-[40vw] sm:w-1/3 h-40 sm:h-60 object-cover" />
                            ))}
                        </motion.div>
                        <motion.div
                            animate={controlsLower2}
                            initial={{ x: "-100%" }}
                            className='flex flex-shrink-0 gap-2'
                        >
                            {lowerMarquee.map((image, index) => (
                                <img key={index} src={image} alt={`Marquee Image ${index + 1}`}
                                    className="w-[40vw] sm:w-1/3 h-40 sm:h-60 object-cover" />
                            ))}
                        </motion.div>
                    </div>
                </section>
            </div>

            {/* Mobile Gallery - Show all upperMarquee images with fallback */}
            <div className="block md:hidden my-8 mx-4">
                <section>
                    <div className="grid grid-cols-2 gap-2">
                        {upperMarquee.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-32 object-cover rounded-xl shadow-lg bg-gray-200"
                                onError={e => { e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found'; }}
                            />
                        ))}
                    </div>
                </section>
            </div>

        </>
    );
}

export default Gallery;
