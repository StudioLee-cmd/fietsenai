import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Fietsenmakers", url: "/chatbot-voor-fietsenmakers" },
            { text: "Voice AI voor Fietsenmakers", url: "/voice-ai-voor-fietsenmakers" },
            { text: "SEO voor Fietsenmakers", url: "/seo-voor-fietsenmakers" },
            { text: "Social Media voor Fietsenmakers", url: "/social-media-voor-fietsenmakers" },
            { text: "Reviews voor Fietsenmakers", url: "/reviews-voor-fietsenmakers" },
            { text: "Review Pakket", url: "/review-pakket" },
        ]
    },
    { text: "Tarieven", url: "/tarieven" },
    { text: "Gratis Scan", url: "/gratis-scan" },
    { text: "Gratis Website", url: "/gratis-website" },
    { text: "Blog", url: "/blog" }
];
