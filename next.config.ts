import type { NextConfig } from "next";
import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl('./lib/i18n.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withNextIntlConfig(nextConfig);
