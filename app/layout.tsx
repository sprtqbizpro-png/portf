import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Benjamin Rodriguez — Full-Stack Software Engineer', description: 'Software engineer building thoughtful products across full-stack, AI, mobile, and cloud.' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
