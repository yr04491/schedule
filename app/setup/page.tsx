'use client'

import { useState } from 'react'

const VAPID_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = window.atob(base64)
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)))
}

export default function SetupPage() {
  const [subscriptionJson, setSubscriptionJson] = useState('')
  const [status, setStatus] = useState('')

  async function handleSubscribe() {
    try {
      if (!('serviceWorker' in navigator)) { setStatus('Service Worker未対応'); return }
      if (!('PushManager' in window)) { setStatus('Push通知未対応 — ホーム画面から開いてください'); return }

      setStatus('Service Worker登録中...')
      const reg = await navigator.serviceWorker.register('/sw.js')
      await navigator.serviceWorker.ready

      setStatus('通知許可をリクエスト中...')
      const permission = await Notification.requestPermission()
      if (permission !== 'granted') { setStatus('通知が許可されませんでした'); return }

      setStatus('購読情報を取得中...')
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
      })

      const json = JSON.stringify(sub)
      setSubscriptionJson(json)

      await fetch('/api/push/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: json,
      })

      setStatus('✅ 完了！下のJSONをコピーしてVercelに追加してください')
    } catch (e: any) {
      setStatus('エラー: ' + e.message)
    }
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(subscriptionJson)
    setStatus('✅ コピーしました！')
  }

  return (
    <div style={{ padding: '24px 20px', maxWidth: '480px', margin: '0 auto', background: 'var(--bg)', minHeight: '100dvh' }}>
      <a href="/" style={{
        fontSize: '13px', color: 'var(--muted)', textDecoration: 'none',
        display: 'inline-block', marginBottom: '16px',
      }}>‹ スケジュールに戻る</a>

      <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--muted)', marginBottom: '4px' }}>
        NOTIFICATION SETUP
      </div>
      <div style={{ fontSize: '24px', fontWeight: 900, color: 'var(--text)', marginBottom: '24px' }}>
        通知セットアップ
      </div>

      <div style={{
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: '12px', padding: '16px', marginBottom: '16px',
        fontSize: '13px', color: 'var(--text-sub)', lineHeight: 1.8,
      }}>
        <strong style={{ color: 'var(--text)' }}>必ず以下の順番で操作してください：</strong><br />
        1. このページをホーム画面のアプリから開く<br />
        2. 下の「通知を有効にする」をタップ<br />
        3. 表示されたJSONをコピー<br />
        4. VercelにPUSH_SUBSCRIPTIONとして追加
      </div>

      <button
        onClick={handleSubscribe}
        style={{
          width: '100%', padding: '14px',
          background: 'var(--color-run)', color: '#fff',
          border: 'none', borderRadius: '12px',
          fontSize: '15px', fontWeight: 700, cursor: 'pointer',
          marginBottom: '12px',
        }}
      >
        🔔 通知を有効にする
      </button>

      {status && (
        <div style={{
          padding: '12px', borderRadius: '8px',
          background: 'var(--surface)', border: '1px solid var(--border)',
          fontSize: '12px', color: 'var(--text-sub)', marginBottom: '12px',
        }}>
          {status}
        </div>
      )}

      {subscriptionJson && (
        <div>
          <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--muted)', marginBottom: '8px' }}>
            PUSH_SUBSCRIPTION の値（コピーしてVercelに追加）
          </div>
          <div style={{
            background: 'var(--surface-alt)', border: '1px solid var(--border)',
            borderRadius: '8px', padding: '12px',
            fontSize: '10px', fontFamily: 'var(--font-mono)',
            color: 'var(--text)', wordBreak: 'break-all',
            marginBottom: '8px', lineHeight: 1.6,
          }}>
            {subscriptionJson}
          </div>
          <button
            onClick={handleCopy}
            style={{
              width: '100%', padding: '12px',
              background: 'var(--surface)', color: 'var(--text)',
              border: '1px solid var(--border)', borderRadius: '10px',
              fontSize: '14px', fontWeight: 700, cursor: 'pointer',
            }}
          >
            📋 JSONをコピー
          </button>
        </div>
      )}
    </div>
  )
}
