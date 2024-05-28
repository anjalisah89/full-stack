"use client";

import { useEffect, useState } from 'react';

interface Data {
  message: string;
}

export default function Home() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then((response) => response.json())
      .then((data: Data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Next.js Frontend</h1>
      <p>{data ? data.message : 'Loading...'}</p>
    </div>
  );
}
