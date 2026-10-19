/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirecciones permanentes desde las URLs de la web antigua (WordPress),
  // sacadas de su sitemap, para no perder lo que ya posiciona en Google.
  async redirects() {
    return [
      { source: '/index.php/contactanos', destination: '/contacto', permanent: true },
      { source: '/index.php/carta-restaurante', destination: '/carta', permanent: true },
      { source: '/index.php/carta-restaurante2', destination: '/carta', permanent: true },
      { source: '/index.php/carta-bar', destination: '/carta', permanent: true },
      { source: '/index.php/carta-bar2', destination: '/carta', permanent: true },
      { source: '/index.php/2023/02/16/hola-mundo', destination: '/', permanent: true },
      { source: '/index.php', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
