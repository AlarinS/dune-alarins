/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  redirects: async () => [],
};
export default nextConfig;

/** i18n (добавлено скриптом) */
export const i18n = { locales: ["ru"], defaultLocale: "ru" }
