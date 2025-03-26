import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        domains: [
            'nocohub-001-prod-app-attachments.s3.us-east-2.amazonaws.com',
        ],
    },
}

export default nextConfig
