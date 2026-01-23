import React from 'react';

export default function About() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>About Us</h1>

      <p>
        Physicians Claim Partners is a physician-led medical and dental billing
        company focused on accuracy, compliance, and revenue optimization.
      </p>

      <h2>Leadership</h2>

      <div style={{ display: 'flex', gap: '40px', marginTop: 30 }}>
        <div>
          <div style={{
            width: 140,
            height: 140,
            background: '#e0e0e0',
            borderRadius: '50%',
            marginBottom: 15
          }} />
          <h3>Dr. Rasa Tharp, MD</h3>
          <p>Co-CEO</p>
        </div>

        <div>
          <div style={{
            width: 140,
            height: 140,
            background: '#e0e0e0',
            borderRadius: '50%',
            marginBottom: 15
          }} />
          <h3>Dr. M Asad Mumtaz</h3>
          <p>Co-CEO</p>
        </div>
      </div>
    </div>
  );
}
