import React from 'react'
import { Button } from '@/components/ui/button'

export default function AlertPage() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
}
