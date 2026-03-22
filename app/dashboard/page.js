'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [image, setImage] = useState(null)
  const [health, setHealth] = useState(null)
  const [harvestDate, setHarvestDate] = useState(null)
  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem('loggedIn')) {
      router.push('/login')
    }
  }, [])

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(URL.createObjectURL(file))
      // Mock health analysis
      const healthScore = Math.random() * 100
      setHealth(healthScore)
      // Mock harvest projection: assume 30-90 days based on health
      const days = 30 + (90 - 30) * (healthScore / 100)
      const date = new Date()
      date.setDate(date.getDate() + days)
      setHarvestDate(date.toDateString())
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedIn')
    router.push('/login')
  }

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={handleLogout} style={{ float: 'right' }}>Logout</button>
      <h1>Grape Health Estimator</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" style={{ maxWidth: '300px', margin: '20px 0' }} />}
      {health !== null && (
        <div>
          <h2>Plant Health: {health.toFixed(2)}%</h2>
          <h2>Estimated Harvest Date: {harvestDate}</h2>
        </div>
      )}
    </div>
  )
}