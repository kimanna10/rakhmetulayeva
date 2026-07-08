/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dbqsb90lj/**", // Ваш ID облака из ошибки
      },
    ],
  },
};

export default nextConfig;
