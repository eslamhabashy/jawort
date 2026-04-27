import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/* ─── Falling Rose Petals Canvas ───────────────────────── */
const PetalCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create petals with randomised properties
    const petals = Array.from({ length: 28 }, () => ({
      x: Math.random() * (canvas.width || 414),
      y: Math.random() * (canvas.height || 896) - (canvas.height || 896),
      w: 5 + Math.random() * 9,
      h: 8 + Math.random() * 13,
      speed: 0.4 + Math.random() * 0.9,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.008 + Math.random() * 0.018,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.04,
      opacity: 0.18 + Math.random() * 0.38,
      // Alternate between blush pink and champagne gold tones
      hue: Math.random() > 0.5 ? '#e8c4c4' : '#d4a87a',
    }));

    const drawPetal = (p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.hue;
      ctx.beginPath();
      // Teardrop / petal shape
      ctx.moveTo(0, -p.h);
      ctx.bezierCurveTo(p.w, -p.h * 0.5, p.w, p.h * 0.3, 0, p.h);
      ctx.bezierCurveTo(-p.w, p.h * 0.3, -p.w, -p.h * 0.5, 0, -p.h);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petals.forEach(p => {
        p.y += p.speed;
        p.wobble += p.wobbleSpeed;
        p.x += Math.sin(p.wobble) * 0.7;
        p.rotation += p.rotSpeed;
        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
        drawPetal(p);
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}
    />
  );
};

/* ─── Animated SVG Ornament ────────────────────────────── */
const WeddingOrnament = () => (
  <motion.svg
    width="220" height="28" viewBox="0 0 220 28"
    style={{ overflow: 'visible', margin: '0 auto 20px', display: 'block' }}
    initial="hidden" animate="visible"
  >
    {/* Left line */}
    <motion.line x1="0" y1="14" x2="88" y2="14"
      stroke="#B38E66" strokeWidth="0.8"
      variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
      transition={{ duration: 1.4, delay: 0.3, ease: 'easeInOut' }}
    />
    {/* Diamond left */}
    <motion.polygon points="92,14 98,10 104,14 98,18"
      fill="#B38E66"
      variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
      transition={{ duration: 0.4, delay: 1.6 }}
      style={{ transformOrigin: '98px 14px' }}
    />
    {/* Center ring */}
    <motion.circle cx="110" cy="14" r="8"
      fill="none" stroke="#B38E66" strokeWidth="1.2"
      variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
      transition={{ duration: 0.8, delay: 1.8, ease: 'easeOut' }}
    />
    {/* Inner dot */}
    <motion.circle cx="110" cy="14" r="2"
      fill="#B38E66"
      variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
      transition={{ duration: 0.3, delay: 2.5 }}
      style={{ transformOrigin: '110px 14px' }}
    />
    {/* Diamond right */}
    <motion.polygon points="116,14 122,10 128,14 122,18"
      fill="#B38E66"
      variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
      transition={{ duration: 0.4, delay: 1.6 }}
      style={{ transformOrigin: '122px 14px' }}
    />
    {/* Right line */}
    <motion.line x1="132" y1="14" x2="220" y2="14"
      stroke="#B38E66" strokeWidth="0.8"
      variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
      transition={{ duration: 1.4, delay: 0.3, ease: 'easeInOut' }}
    />
  </motion.svg>
);

/* ─── Text Reveal Wrapper (curtain from left) ──────────── */
const TextReveal = ({ children, delay = 0, style = {} }) => (
  <div style={{ position: 'relative', overflow: 'hidden', display: 'inline-block', ...style }}>
    <motion.div
      initial={{ y: '105%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  </div>
);

/* ─── Main Hero ─────────────────────────────────────────── */
const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      style={{
        height: '100vh',
        padding: '0 24px',
        textAlign: 'center',
        backgroundColor: 'var(--parchment)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 55%, rgba(179,142,102,0.10) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      {/* Falling petals */}
      <PetalCanvas />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto',
        transform: 'translateY(20px)'
      }}>

        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1.6, delay: 0.2, ease: 'easeOut' }}
          style={{
            fontSize: '0.7rem', textTransform: 'uppercase',
            color: 'var(--accent-gold)', fontWeight: '600',
            marginBottom: '20px', display: 'block'
          }}
        >
          {t('hero.overline', { defaultValue: 'Digital Wedding Invitations' })}
        </motion.div>

        {/* Ornament */}
        <div style={{ marginBottom: '24px' }}>
          <WeddingOrnament />
        </div>

        {/* Headline — each line slides up from behind a mask */}
        <div style={{ marginBottom: '32px', lineHeight: 1 }}>
          {t('hero.title', { defaultValue: 'Dein Jawort.\nUnvergesslich.' })
            .split('\n').map((line, i) => (
              <div key={i} style={{ overflow: 'hidden', display: 'block' }}>
                <motion.h1
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1, delay: 0.9 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontSize: 'clamp(2.8rem, 10vw, 6.5rem)',
                    lineHeight: 1.05,
                    color: 'var(--warm-black)',
                    display: 'block',
                    margin: 0,
                  }}
                >
                  {line}
                </motion.h1>
              </div>
            ))
          }
        </div>

        {/* Divider shimmer line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5, ease: 'easeOut' }}
          style={{
            width: '60px', height: '1px',
            background: 'var(--accent-gold)',
            margin: '0 auto 28px',
            transformOrigin: 'center'
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7, ease: 'easeOut' }}
          style={{
            fontSize: 'clamp(0.95rem, 2.2vw, 1.3rem)',
            maxWidth: '580px', margin: '0 auto 48px',
            color: 'rgba(26, 23, 20, 0.65)', fontWeight: '300',
            lineHeight: 1.8
          }}
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.0, ease: 'easeOut' }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button className="premium-button">
            {t('hero.ctaPrimary')}
          </button>
          <button 
            className="premium-button secondary"
            onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.ctaSecondary')}
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)' }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', opacity: 0.3 }}
        >
          <div style={{ width: '1px', height: '40px', background: 'var(--accent-gold)' }} />
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent-gold)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
