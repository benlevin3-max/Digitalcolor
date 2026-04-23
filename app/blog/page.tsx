'use client';
import { useEffect } from 'react';
export default function BlogPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.trysoro.com/api/embed/f0818072-33ab-41f0-bc05-6196867c4602';
    script.defer = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);
  return (
    <main style={{ minHeight: '100vh', padding: '40px 20px' }}>
      <div id="soro-blog"></div>
    </main>
  );
}
