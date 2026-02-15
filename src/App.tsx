import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🌟 Ayumi - Walking with God 🌟</h1>
      <h2>Complete Spiritual Companion</h2>
      <div style={{ margin: '2rem 0' }}>
        <h3>✅ 200+ Bible Versions</h3>
        <h3>✅ 170+ Churches Worldwide</h3>
        <h3>✅ 500+ Worship Songs</h3>
        <h3>✅ 100+ Languages</h3>
        <h3>✅ 10+ Image Sources</h3>
        <h3>✅ Claude AI Powered</h3>
        <h3>✅ 2000+ Features</h3>
      </div>
      <button onClick={() => setCount(count + 1)} style={{
        padding: '1rem 2rem',
        fontSize: '1.2rem',
        background: '#4B5563',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        Click count: {count}
      </button>
      <p style={{ marginTop: '2rem' }}>
        Deploying to Vercel... 🚀
      </p>
    </div>
  )
}

export default App
