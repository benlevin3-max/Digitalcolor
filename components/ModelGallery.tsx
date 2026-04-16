'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const gridItems: { type: 'image' | 'video'; src: string; alt: string; colorName: string }[] = [
  { type: 'image', src: '/images/models/shutterstock_116571988.jpg',  alt: 'Ash blonde model',     colorName: 'Ash Blonde'     },
  { type: 'image', src: '/images/models/shutterstock_1957607380.jpg', alt: 'Copper gold model',    colorName: 'Copper Gold'    },
  { type: 'image', src: '/images/models/shutterstock_1957607569.jpg', alt: 'Vibrant orange model', colorName: 'Vibrant Orange' },
  { type: 'video', src: '/images/models/shutterstock_1093732031.mov', alt: 'Color story video',    colorName: 'Color Story'    },
  { type: 'image', src: '/images/models/shutterstock_2072086160.jpg', alt: 'Espresso model',       colorName: 'Espresso'       },
  { type: 'image', src: '/images/models/shutterstock_2072237720.jpg', alt: 'Sandy curls model',    colorName: 'Sandy Curls'    },
  { type: 'image', src: '/images/models/shutterstock_2235368873.jpg', alt: 'Deep espresso model',  colorName: 'Deep Espresso'  },
  { type: 'image', src: '/images/models/shutterstock_2235368911.jpg', alt: 'Rich brunette model',  colorName: 'Rich Brunette'  },
  { type: 'image', src: '/images/models/shutterstock_2262422611.jpg', alt: 'Rose gold model',      colorName: 'Rose Gold'      },
  { type: 'image', src: '/images/models/shutterstock_2449262437.jpg', alt: 'Caramel dream model',  colorName: 'Caramel Dream'  },
  { type: 'image', src: '/images/models/shutterstock_2500604319.jpg', alt: 'Dark brunette model',  colorName: 'Dark Brunette'  },
  { type: 'image', src: '/images/models/shutterstock_2511651005.jpg', alt: 'Warm brown model',     colorName: 'Warm Brown'     },
];

export default function ModelGallery() {
  return (
    <section id="results" className="section-white py-28 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Results</p>
          <h2 className="headline-lg mb-5">1,000+ Shades.</h2>
          <p className="body-text max-w-[480px] mx-auto">
            Every client. Every vision. Formulated in seconds.
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {gridItems.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              )}

              {/* Gradient + color name overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-semibold text-[15px] leading-none">{item.colorName}</p>
              </div>

              {/* Video badge */}
              {item.type === 'video' && (
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-1 rounded-full tracking-wide uppercase">
                  Video
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
