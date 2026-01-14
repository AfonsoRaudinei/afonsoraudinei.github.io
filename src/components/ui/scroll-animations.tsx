import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

// Fade in with direction on scroll
export const ScrollReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up",
  duration = 0.6
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 }
  };
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        y: 0 
      } : {}}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

// Parallax effect
export const Parallax = ({ 
  children, 
  className = "",
  speed = 0.3,
  direction = "up"
}: ParallaxProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    direction === "up" ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed]
  );
  
  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

// Stagger children animations
export const StaggerContainer = ({ 
  children, 
  className = "",
  staggerDelay = 0.1
}: StaggerContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export const StaggerItem = ({ children, className = "" }: StaggerItemProps) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 20, scale: 0.95 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.4, 0.25, 1]
        }
      }
    }}
  >
    {children}
  </motion.div>
);

interface ScaleOnScrollProps {
  children: ReactNode;
  className?: string;
}

// Scale effect on scroll
export const ScaleOnScroll = ({ children, className = "" }: ScaleOnScrollProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  
  return (
    <motion.div ref={ref} className={className} style={{ scale, opacity }}>
      {children}
    </motion.div>
  );
};

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}

// Floating animation (decorative elements)
export const FloatingElement = ({ 
  children, 
  className = "",
  amplitude = 10,
  duration = 4
}: FloatingElementProps) => (
  <motion.div
    className={className}
    animate={{
      y: [-amplitude, amplitude, -amplitude]
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

interface HeroParallaxProps {
  children: ReactNode;
  className?: string;
}

// Hero section with parallax background layers
export const HeroParallax = ({ children, className = "" }: HeroParallaxProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  
  return (
    <motion.div 
      ref={ref} 
      className={className}
      style={{ y, opacity }}
    >
      {children}
    </motion.div>
  );
};
