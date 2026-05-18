/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    async redirects() {
        return [
            { source: '/chatbot-voor-:suffix', destination: '/chatbot', permanent: true },
            { source: '/voice-ai-voor-:suffix', destination: '/voice-ai', permanent: true },
            { source: '/reviews-voor-:suffix', destination: '/reviews', permanent: true },
            { source: '/seo-voor-:suffix', destination: '/seo', permanent: true },
            { source: '/social-media-voor-:suffix', destination: '/social-media', permanent: true },
                    { source: '/blog/carbon-frame-ct-scan-inspectie-voor-wielrenners', destination: '/', permanent: true },
            { source: '/blog/eigen-merk-fiets-samenstellen-private-label', destination: '/', permanent: true },
            { source: '/blog/bedrijfsfietsen-b2b-leveringen-fietsenmaker', destination: '/', permanent: true },
            { source: '/blog/mtb-suspension-dropper-post-fietsenwinkel-specialisme', destination: '/', permanent: true },
            { source: '/blog/speed-pedelec-service-fietsenwinkel-specialisme', destination: '/', permanent: true },
            { source: '/blog/refurbished-e-bikes-doorverkopen-fietsenwinkel', destination: '/', permanent: true },
            { source: '/blog/fietsonderhoud-verdienmodel-service', destination: '/', permanent: true },
            { source: '/blog/e-bike-onderhoud-fietswinkel-kansen', destination: '/', permanent: true },
            { source: '/blog/e-bike-onderhoud-extra-omzet-fietsenmaker', destination: '/', permanent: true },
            { source: '/blog/robot-fietsenmaker-band', destination: '/', permanent: true },
            { source: '/blog/reviews-fietsenwinkel-na-reparatie', destination: '/blog/reviews-fietsenmaker-onderhoud-juiste-moment', permanent: true },
            { source: '/blog/no-shows-fietswinkel-afspraken', destination: '/blog/fietsenwinkel-werkplaats-no-shows-voorkomen', permanent: true },
            { source: '/blog/specialisatie-fietsenmaker', destination: '/blog/specialiseren-fietswinkel', permanent: true },
            { source: '/blog/social-media-voor-fietsenmakers', destination: '/blog/social-media-fietswinkels-online', permanent: true },
            { source: '/blog/prijzen-website-fietswinkel', destination: '/blog/prijzen-communiceren-fietsenmaker', permanent: true },
        ];
    },
};

export default nextConfig;
