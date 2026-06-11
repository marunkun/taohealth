import type { NextConfig } from "next";
import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl('./lib/i18n.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': `${process.cwd()}`,
    };
    return config;
  },
};

export default withNextIntlConfig(nextConfig);
