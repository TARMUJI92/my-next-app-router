import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home-Aplikasi Saya',
  description: 'Aplikasi Untuk Belajar Next js',
  authors:[{name:'tarmuji}', url:'http://localhost:3000'}],
  icons: {
    icon:'/images/icon.png'
  },
  openGraph:{
    title:'Home-Aplikasi Saya',
  }
}

export default function Home() {
  // throw new Error("Something Went Wrong")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      HELLO WORLD
    </main>
  )
}
