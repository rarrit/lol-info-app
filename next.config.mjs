/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com", // url
        pathname: "/**", // 전체
      },
    ],
    formats: ["image/avif", "image/webp"], // 자동으로 포멧 변환
  },
};

export default nextConfig;
