'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Footer() {
  const pathname = usePathname()
 
  return (
    <footer className="flex justify-center mt-auto">
      <p className="text-xs">
        Aybora Ünveren &copy; 2211012011  
      </p>
    </footer>
  )
}