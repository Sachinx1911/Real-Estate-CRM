import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

function App() {
  // 'no-keys' | 'checking' | 'connected' | 'error'
  const [status, setStatus] = useState(supabase ? 'checking' : 'no-keys')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (!supabase) return
    // कोणतेही table अजून नाही — फक्त connection तपासण्यासाठी auth session मागतो
    supabase.auth
      .getSession()
      .then(({ error }) => {
        if (error) {
          setStatus('error')
          setErrorMsg(error.message)
        } else {
          setStatus('connected')
        }
      })
      .catch((err) => {
        setStatus('error')
        setErrorMsg(err.message)
      })
  }, [])

  const statusInfo = {
    'no-keys': {
      color: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      label: '.env मध्ये Supabase keys अजून भरलेल्या नाहीत',
    },
    checking: {
      color: 'bg-blue-100 text-blue-800 border-blue-300',
      label: 'Supabase connection तपासत आहे...',
    },
    connected: {
      color: 'bg-green-100 text-green-800 border-green-300',
      label: 'Supabase connected ✅',
    },
    error: {
      color: 'bg-red-100 text-red-800 border-red-300',
      label: `Connection error: ${errorMsg}`,
    },
  }[status]

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-gray-900">
            Real Estate CRM
          </h1>
          <p className="text-sm text-gray-500">
            Phase 0 — Setup (Vite + React + Tailwind + Supabase)
          </p>
        </div>

        <div className={`border rounded-lg px-4 py-3 text-sm ${statusInfo.color}`}>
          {statusInfo.label}
        </div>

        <ul className="text-sm text-gray-600 space-y-2">
          <li>✅ Vite + React</li>
          <li>✅ Tailwind CSS</li>
          <li>{status === 'connected' ? '✅' : '⬜'} Supabase connection</li>
        </ul>

        {status === 'no-keys' && (
          <p className="text-xs text-gray-400">
            Supabase dashboard मधून URL व anon key घेऊन{' '}
            <code className="bg-gray-100 px-1 rounded">.env</code> file मध्ये भरा
            (नमुना: <code className="bg-gray-100 px-1 rounded">.env.example</code>)
          </p>
        )}
      </div>
    </div>
  )
}

export default App
