import React from 'react';
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

const mobileImages = [Pic_2, Pic_3, Pic_4, Pic_5, Pic_6, Pic_7, Pic_8, Pic_9, Pic_10, Pic_11, Pic_12, Pic_13, Pic_14, Pic_15, Pic_16, Pic_17, Pic_18, Pic_19, Pic_20, Pic_21, Pic_22, Pic_23, Pic_24, Pic_25, Pic_26, Pic_27, Pic_28, Pic_29, Pic_30, Pic_31, Pic_32, Pic_33, Pic_34, Pic_35];

function MobileGallery() {
  // Split images into 3 roughly equal rows
  const rowCount = 3;
  const imagesPerRow = Math.ceil(mobileImages.length / rowCount);
  const rows = Array.from({ length: rowCount }, (_, i) =>
    mobileImages.slice(i * imagesPerRow, (i + 1) * imagesPerRow)
  );

  return (
    <div className="block md:hidden my-8 mx-4 pt-25">
      <section id='gallery'>
        <h3 className="text-xl font-bold text-green-900 mb-4 text-center">Image Gallery</h3>
        <p className="text-green-900 mb-6 text-center">Swipe to see more images!</p>
        {rows.map((rowImages, rowIdx) => (
          <div
            key={rowIdx}
            className="flex flex-row gap-2 overflow-x-auto scrollbar-hide mb-4"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {rowImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Mobile Gallery Image ${rowIdx * imagesPerRow + index + 1}`}
                className="w-52 h-42 object-cover rounded-xl shadow-lg bg-gray-200 flex-shrink-0"
                onError={e => { e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found'; }}
              />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default MobileGallery;
