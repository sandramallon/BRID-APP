import React, { useState } from 'react';
import { Heart, BookOpen, Leaf, History, Check } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('track');
  const [symptoms, setSymptoms] = useState({});
  const [notes, setNotes] = useState('');
  const [entries, setEntries] = useState([]);

  const symptomList = [
    'Hot Flashes',
    'Night Sweats',
    'Mood Changes',
    'Sleep Issues',
    'Joint Pain',
    'Brain Fog',
    'Anxiety',
    'Fatigue',
    'Dry Skin',
    'Hair Changes',
    'Heart Palpitations',
    'Weight Changes'
  ];

  const toggleSymptom = (symptom) => {
    setSymptoms(prev => ({
      ...prev,
      [symptom]: !prev[symptom]
    }));
  };

  const saveEntry = () => {
    const newEntry = {
      date: new Date().toLocaleDateString(),
      symptoms: Object.keys(symptoms).filter(s => symptoms[s]),
      notes,
      timestamp: new Date().toLocaleTimeString()
    };
    setEntries([newEntry, ...entries]);
    setSymptoms({});
    setNotes('');
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: "'Georgia', serif",
      color: '#333'
    },
    header: {
      backgroundColor: '#2D4A3C',
      color: '#E8D5C4',
      padding: '30px 20px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    headerTitle: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '5px'
    },
    headerSubtitle: {
      fontSize: '12px',
      letterSpacing: '2px',
      color: '#C98A6D'
    },
    tabContainer: {
      display: 'flex',
      borderBottom: '2px solid #ddd',
      backgroundColor: '#fff',
      stickyTop: 0,
      position: 'sticky',
      top: 0,
      zIndex: 10
    },
    tab: {
      flex: 1,
      padding: '15px',
      textAlign: 'center',
      cursor: 'pointer',
      borderBottom: '3px solid transparent',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    tabActive: {
      borderBottomColor: '#2D4A3C',
      color: '#2D4A3C',
      fontWeight: 'bold'
    },
    content: {
      maxWidth: '600px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    symptomGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '10px',
      marginBottom: '20px'
    },
    symptomButton: {
      padding: '12px',
      border: '2px solid #ddd',
      borderRadius: '6px',
      backgroundColor: '#fff',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '14px',
      fontWeight: 'bold'
    },
    symptomButtonActive: {
      backgroundColor: '#2D4A3C',
      color: '#E8D5C4',
      borderColor: '#2D4A3C'
    },
    textarea: {
      width: '100%',
      padding: '12px',
      border: '2px solid #ddd',
      borderRadius: '6px',
      fontFamily: "'Georgia', serif",
      fontSize: '14px',
      resize: 'vertical',
      minHeight: '100px'
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#2D4A3C',
      color: '#E8D5C4',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '10px',
      transition: 'all 0.3s ease'
    },
    buttonHover: {
      backgroundColor: '#C98A6D',
      color: '#2D4A3C'
    },
    entryCard: {
      border: '2px solid #2D4A3C',
      borderRadius: '6px',
      padding: '15px',
      marginBottom: '15px',
      backgroundColor: '#fafafa'
    },
    entryDate: {
      fontWeight: 'bold',
      color: '#2D4A3C',
      marginBottom: '8px'
    },
    cta: {
      textAlign: 'center',
      padding: '30px 20px',
      color: '#2D4A3C'
    },
    ctaButton: {
      display: 'inline-block',
      padding: '12px 24px',
      backgroundColor: '#C98A6D',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '6px',
      fontWeight: 'bold',
      cursor: 'pointer',
      border: 'none'
    },
    learnSection: {
      marginBottom: '20px'
    },
    learnTitle: {
      color: '#2D4A3C',
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '10px'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerTitle}>BRÍD</div>
        <div style={styles.headerSubtitle}>STRENGTH · MOVEMENT · MIDLIFE WOMEN</div>
      </div>

      {/* Tabs */}
      <div style={styles.tabContainer}>
        {[
          { id: 'track', label: 'Track', icon: Heart },
          { id: 'learn', label: 'Learn', icon: BookOpen },
          { id: 'wellness', label: 'Wellness', icon: Leaf },
          { id: 'history', label: 'History', icon: History }
        ].map(t => {
          const Icon = t.icon;
          return (
            <div
              key={t.id}
              style={{
                ...styles.tab,
                ...(activeTab === t.id ? styles.tabActive : {})
              }}
              onClick={() => setActiveTab(t.id)}
            >
              <Icon size={18} />
              <span>{t.label}</span>
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div style={styles.content}>
        {/* TRACK TAB */}
        {activeTab === 'track' && (
          <div>
            <h2 style={{ color: '#2D4A3C', marginBottom: '15px' }}>Log Your Symptoms</h2>
            <div style={styles.symptomGrid}>
              {symptomList.map(symptom => (
                <button
                  key={symptom}
                  style={{
                    ...styles.symptomButton,
                    ...(symptoms[symptom] ? styles.symptomButtonActive : {})
                  }}
                  onClick={() => toggleSymptom(symptom)}
                >
                  {symptoms[symptom] && <Check size={14} style={{ marginRight: '4px' }} />}
                  {symptom}
                </button>
              ))}
            </div>
            <textarea
              style={styles.textarea}
              placeholder="Add notes about how you're feeling..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <button
              style={styles.button}
              onClick={saveEntry}
              onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
              onMouseOut={(e) => Object.assign(e.target.style, { backgroundColor: '#2D4A3C', color: '#E8D5C4' })}
            >
              Save Entry
            </button>
          </div>
        )}

        {/* LEARN TAB */}
        {activeTab === 'learn' && (
          <div>
            <h2 style={{ color: '#2D4A3C', marginBottom: '15px' }}>Understand Your Journey</h2>
            {[
              { stage: 'Pre-menopause', desc: 'Regular cycles with occasional symptoms' },
              { stage: 'Perimenopause', desc: 'Transitional phase with fluctuating hormones (★ most common symptoms here)' },
              { stage: 'Menopause', desc: '12 months without a period' },
              { stage: 'Post-menopause', desc: 'Life after menopause' }
            ].map(item => (
              <div key={item.stage} style={styles.learnSection}>
                <div style={styles.learnTitle}>{item.stage}</div>
                <p style={{ color: '#666', fontSize: '14px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* WELLNESS TAB */}
        {activeTab === 'wellness' && (
          <div>
            <h2 style={{ color: '#2D4A3C', marginBottom: '15px' }}>Wellness Pillars</h2>
            {[
              { pillar: 'Sleep', tip: 'Consistent bedtime, cool room, limit caffeine' },
              { pillar: 'Nutrition', tip: 'Calcium, magnesium, phytoestrogens, hydration' },
              { pillar: 'Movement', tip: 'Yoga, walking, strength training, stretching' },
              { pillar: 'Mental Wellness', tip: 'Meditation, journaling, community, breathing exercises' }
            ].map(item => (
              <div key={item.pillar} style={styles.learnSection}>
                <div style={styles.learnTitle}>{item.pillar}</div>
                <p style={{ color: '#666', fontSize: '14px' }}>{item.tip}</p>
              </div>
            ))}
          </div>
        )}

        {/* HISTORY TAB */}
        {activeTab === 'history' && (
          <div>
            <h2 style={{ color: '#2D4A3C', marginBottom: '15px' }}>Your Entries</h2>
            {entries.length === 0 ? (
              <p style={{ color: '#999', textAlign: 'center' }}>No entries yet. Start tracking your wellness journey!</p>
            ) : (
              entries.map((entry, idx) => (
                <div key={idx} style={styles.entryCard}>
                  <div style={styles.entryDate}>{entry.date} at {entry.timestamp}</div>
                  <div style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                    <strong>Symptoms:</strong> {entry.symptoms.length > 0 ? entry.symptoms.join(', ') : 'None logged'}
                  </div>
                  {entry.notes && (
                    <div style={{ color: '#666', fontSize: '14px' }}>
                      <strong>Notes:</strong> {entry.notes}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* CTA Footer */}
      <div style={styles.cta}>
        <p style={{ marginBottom: '15px' }}>Ready to transform your midlife wellness?</p>
        <button style={styles.ctaButton}>BEGIN YOUR JOURNEY →</button>
      </div>
    </div>
  );
}
