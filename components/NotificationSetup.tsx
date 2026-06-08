'use client'

import { useState, useEffect } from 'react'

const VAPID_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = window.atob(base64)
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)))
}

export default function NotificationSetup() {
  const [status, setStatus] = useState<'unknown' | 'granted' | 'denied' | 'unsupported'>('unknown')

  useEffect(() => {
    if (!('Notification' in window) || !('serviceWorker' in navigator)) {
      setStatus('unsupported')
      return
    }
    setStatus(Notification.permission as any)
  }, [])

  async function handleEnable() {
    try {
      const reg = await navigator.serviceWorker.register('/sw.js')
      const permission = await Notification.requestPermission()
      if (permission !== 'granted') { setStatus('denied'); return }

      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
      })

      await fetch('/api/push/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sub),
      })

      setStatus('granted')
    } catch (e) {
      console.error(e)
    }
  }

  if (status === 'granted' || status === 'unsupported') return null

  return (
    <div style={{
      margin: '12px 20px',
      padding: '14px 16px',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
    }}>
      <div>
        <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)', marginBottom: '2px' }}>
          🔔 通知を有効にする
        </div>
        <div style={{ fontSize: '11px', color: 'var(--muted)' }}>
          スケジュールの時間にお知らせが届きます
        </div>
      </div>
      <button
        onClick={handleEnable}
        style={{
          background: 'var(--color-run)',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '8px 16px',
          fontSize: '12px',
          fontWeight: 700,
          cursor: 'pointer',
          flexShrink: 0,
          whiteSpace: 'nowrap',
        }}
      >
        許可する
      </button>
    </div>
  )
}
