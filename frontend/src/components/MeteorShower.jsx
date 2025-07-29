import React from 'react';
import { motion } from 'framer-motion';

const METEOR_COUNT = 12;
const meteors = Array.from({ length: METEOR_COUNT });

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default function MeteorShower() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 1,
      overflow: 'hidden',
    }}>
      {meteors.map((_, i) => {
        const left = `${random(0, 100)}vw`;
        const delay = random(0, 6);
        const duration = random(1.8, 3.5);
        const length = random(120, 220);
        const topStart = `-${length}px`;
        const topEnd = `100vh`;
        return (
          <motion.div
            key={i}
            initial={{ top: topStart, left, opacity: 0 }}
            animate={{
              top: topEnd,
              left,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatDelay: random(1, 3),
              ease: 'easeIn',
            }}
            style={{
              position: 'absolute',
              width: 2,
              height: length,
              background: 'linear-gradient(180deg, #fff 0%, #246bfd 100%)',
              borderRadius: 2,
              filter: 'blur(1.5px)',
              opacity: 0.7,
              transform: 'rotate(20deg)',
              zIndex: 1,
            }}
          />
        );
      })}
    </div>
  );
} 