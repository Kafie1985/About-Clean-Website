import type { NextConfig } from "next";

import { site } from "./src/lib/site";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/balance",
        destination: site.balanceUrl,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
