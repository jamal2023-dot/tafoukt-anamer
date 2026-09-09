import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Association Tafoukt pour le Sport et l’Art – Anamer',
    short_name: 'Tafoukt Anamer',
    description: 'Site officiel de l’Association Tafoukt à Anamer.',
    start_url: '/fr',
    display: 'standalone',
    background_color: '#fffdf8',
    theme_color: '#101a3d',
    icons: [{ src: '/logo.jpg', sizes: '512x512', type: 'image/jpeg' }],
  };
}
