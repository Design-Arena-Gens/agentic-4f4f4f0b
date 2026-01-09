'use client';

import { useState } from 'react';

export default function BusinessCard() {
  const [showFront, setShowFront] = useState(true);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Montserrat, sans-serif'
    }}>
      <div style={{
        marginBottom: '30px',
        display: 'flex',
        gap: '15px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <button
          onClick={() => setShowFront(true)}
          style={{
            padding: '12px 30px',
            background: showFront ? '#1e3a8a' : 'white',
            color: showFront ? 'white' : '#1e3a8a',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          Front Side
        </button>
        <button
          onClick={() => setShowFront(false)}
          style={{
            padding: '12px 30px',
            background: !showFront ? '#1e3a8a' : 'white',
            color: !showFront ? 'white' : '#1e3a8a',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          Back Side
        </button>
        <button
          onClick={() => window.print()}
          style={{
            padding: '12px 30px',
            background: '#059669',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          🖨️ Print Card
        </button>
      </div>

      <div style={{
        width: '1050px',
        height: '650px',
        maxWidth: '95vw',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {showFront ? <FrontSide /> : <BackSide />}
      </div>

      <div style={{
        marginTop: '30px',
        color: 'white',
        fontSize: '14px',
        textAlign: 'center',
        opacity: 0.9
      }}>
        <p style={{ margin: '5px 0' }}>Standard Business Card Size: 3.5" × 2" (85mm × 55mm)</p>
        <p style={{ margin: '5px 0' }}>Print-Ready at 300 DPI</p>
      </div>

      <style jsx global>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          @page {
            size: 3.5in 2in;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
}

function FrontSide() {
  return (
    <div style={{
      width: '1050px',
      height: '650px',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px'
    }}>
      {/* Geometric Pattern Background */}
      <svg style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.08
      }}>
        <defs>
          <pattern id="geometric" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="30" fill="none" stroke="#d4af37" strokeWidth="1" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="#d4af37" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="10" fill="none" stroke="#d4af37" strokeWidth="0.5" />
            <line x1="20" y1="50" x2="80" y2="50" stroke="#d4af37" strokeWidth="0.5" />
            <line x1="50" y1="20" x2="50" y2="80" stroke="#d4af37" strokeWidth="0.5" />
            <line x1="30" y1="30" x2="70" y2="70" stroke="#d4af37" strokeWidth="0.3" />
            <line x1="70" y1="30" x2="30" y2="70" stroke="#d4af37" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geometric)" />
      </svg>

      {/* Quantum-inspired decoration */}
      <div style={{
        position: 'absolute',
        top: '30px',
        right: '40px',
        width: '120px',
        height: '120px',
        opacity: 0.15
      }}>
        <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
          <circle cx="50" cy="50" r="40" fill="none" stroke="#d4af37" strokeWidth="1" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#d4af37" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#d4af37" strokeWidth="1" />
          <circle cx="50" cy="50" r="3" fill="#d4af37" />
          <circle cx="50" cy="20" r="2.5" fill="#d4af37" />
          <circle cx="50" cy="80" r="2.5" fill="#d4af37" />
          <circle cx="20" cy="50" r="2.5" fill="#d4af37" />
          <circle cx="80" cy="50" r="2.5" fill="#d4af37" />
        </svg>
      </div>

      {/* Photo Placeholder */}
      <div style={{
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(255, 215, 0, 0.2))',
        border: '3px solid rgba(212, 175, 55, 0.5)',
        marginBottom: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          textAlign: 'center',
          color: 'rgba(255,255,255,0.6)',
          fontSize: '14px',
          fontWeight: '300',
          lineHeight: '1.6',
          padding: '20px'
        }}>
          Photo<br/>Placeholder<br/>
          <span style={{ fontSize: '11px', opacity: 0.7 }}>25mm diameter</span>
        </div>
      </div>

      {/* Name */}
      <h1 style={{
        fontSize: '52px',
        fontWeight: '700',
        color: '#d4af37',
        margin: '0 0 15px 0',
        letterSpacing: '2px',
        textAlign: 'center',
        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
        position: 'relative',
        zIndex: 1
      }}>
        EMAL ZIRAK
      </h1>

      {/* Decorative line */}
      <div style={{
        width: '80px',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
        marginBottom: '20px'
      }} />

      {/* Titles */}
      <div style={{
        textAlign: 'center',
        color: 'white',
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '1.8',
        letterSpacing: '0.5px',
        maxWidth: '800px',
        position: 'relative',
        zIndex: 1
      }}>
        <p style={{ margin: '8px 0' }}>
          <span style={{ color: '#d4af37', fontWeight: '600' }}>Inventor of Zinas Language</span>
        </p>
        <p style={{ margin: '8px 0', fontSize: '16px', opacity: 0.9 }}>
          Author • Psychologist • Student
        </p>
      </div>

      {/* Bottom decorative element */}
      <div style={{
        position: 'absolute',
        bottom: '25px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '200px',
        height: '3px',
        background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent)',
        opacity: 0.6
      }} />
    </div>
  );
}

function BackSide() {
  return (
    <div style={{
      width: '1050px',
      height: '650px',
      background: 'white',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex'
    }}>
      {/* Left Side - Navy Background */}
      <div style={{
        flex: '0 0 420px',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)',
        padding: '50px 40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background pattern */}
        <svg style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.05
        }}>
          <defs>
            <pattern id="backPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 30 60 M 0 30 L 60 30" stroke="#d4af37" strokeWidth="1" />
              <circle cx="30" cy="30" r="15" fill="none" stroke="#d4af37" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#backPattern)" />
        </svg>

        {/* Stylized Z Logo */}
        <div style={{
          width: '100px',
          height: '100px',
          marginBottom: '30px',
          position: 'relative',
          zIndex: 1
        }}>
          <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#d4af37', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#ffd700', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <text
              x="50"
              y="70"
              fontSize="70"
              fontWeight="700"
              fill="url(#goldGradient)"
              textAnchor="middle"
              fontFamily="Montserrat, sans-serif"
            >
              Z
            </text>
            <circle cx="50" cy="50" r="45" fill="none" stroke="url(#goldGradient)" strokeWidth="2" opacity="0.3" />
          </svg>
        </div>

        {/* Title */}
        <h2 style={{
          fontSize: '22px',
          fontWeight: '600',
          color: '#d4af37',
          textAlign: 'center',
          lineHeight: '1.5',
          margin: '0',
          letterSpacing: '0.5px',
          position: 'relative',
          zIndex: 1
        }}>
          Emal Zirak
        </h2>
        <div style={{
          width: '60px',
          height: '1.5px',
          background: '#d4af37',
          margin: '15px 0'
        }} />
        <p style={{
          fontSize: '16px',
          fontWeight: '400',
          color: 'rgba(255,255,255,0.9)',
          textAlign: 'center',
          lineHeight: '1.6',
          margin: '0',
          position: 'relative',
          zIndex: 1
        }}>
          Inventor of<br/>Zinas Language
        </p>

        {/* Quantum decoration */}
        <div style={{
          marginTop: '30px',
          width: '80px',
          height: '80px',
          opacity: 0.2,
          position: 'relative',
          zIndex: 1
        }}>
          <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
            <circle cx="50" cy="50" r="35" fill="none" stroke="#d4af37" strokeWidth="1" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="#d4af37" strokeWidth="1" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="#d4af37" strokeWidth="1" />
            <circle cx="50" cy="50" r="2" fill="#d4af37" />
            <circle cx="50" cy="15" r="2" fill="#d4af37" />
            <circle cx="50" cy="85" r="2" fill="#d4af37" />
            <circle cx="15" cy="50" r="2" fill="#d4af37" />
            <circle cx="85" cy="50" r="2" fill="#d4af37" />
            <line x1="50" y1="50" x2="50" y2="15" stroke="#d4af37" strokeWidth="0.5" opacity="0.5" />
            <line x1="50" y1="50" x2="85" y2="50" stroke="#d4af37" strokeWidth="0.5" opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Right Side - White Background with Contact Info */}
      <div style={{
        flex: 1,
        padding: '50px 50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'white',
        position: 'relative'
      }}>
        {/* Subtle background decoration */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '200px',
          height: '200px',
          opacity: 0.03,
          pointerEvents: 'none'
        }}>
          <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
            <circle cx="100" cy="0" r="80" fill="#1e3a8a" />
          </svg>
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <ContactItem icon="📱" text="+93 767 560 602" />
          <ContactItem icon="📱" text="+93 711 492 076" />
          <ContactItem icon="📱" text="+93 709 983 237" />
          <ContactItem icon="📱" text="+93 782 517 136" />
          <ContactItem icon="✉️" text="emalzirak@gmail.com" isEmail />
          <ContactItem icon="📍" text="Kabul, Afghanistan" />
        </div>

        {/* Bottom accent */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          right: '50px',
          width: '120px',
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #d4af37)',
          opacity: 0.4
        }} />
      </div>
    </div>
  );
}

function ContactItem({ icon, text, isEmail = false }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
      transition: 'transform 0.2s'
    }}>
      <span style={{
        fontSize: '22px',
        marginRight: '15px',
        width: '30px',
        textAlign: 'center'
      }}>
        {icon}
      </span>
      <span style={{
        fontSize: isEmail ? '18px' : '19px',
        color: '#1e3a8a',
        fontWeight: '500',
        letterSpacing: '0.3px'
      }}>
        {text}
      </span>
    </div>
  );
}
