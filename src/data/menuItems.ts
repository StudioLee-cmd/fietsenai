import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Fietsenmakers", url: "/chatbot" },
            { text: "Voice AI voor Fietsenmakers", url: "/voice-ai" },
            { text: "SEO voor Fietsenmakers", url: "/seo" },
            { text: "Social Media voor Fietsenmakers", url: "/social-media" },
            { text: "Reviews voor Fietsenmakers", url: "/reviews" },
            { text: "Review Pakket", url: "/review-pakket" },
            { text: "CRM voor Fietsenmakers", url: "/crm" },
        ]
    },
    { text: "Tarieven", url: "/tarieven" },
    { text: "Gratis Scan", url: "/gratis-scan" },
    { text: "Gratis Website", url: "/gratis-website" },
    { text: "Blog", url: "/blog" }
];
