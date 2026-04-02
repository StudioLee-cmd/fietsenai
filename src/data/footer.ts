import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
    kvk: string;
    btw: string;
    address: string;
    legalName: string;
} = {
    subheading: "Focus op het sleutelen, wij op de rest. Wij regelen je telefoontjes, werkplaatsplanning en herinneringen, zodat jij kunt doen waar je goed in bent: fietsen repareren.",
    quickLinks: [
        { text: "Functies", url: "/#features" },
        { text: "Tarieven", url: "/tarieven" },
        { text: "Gratis Scan", url: "/gratis-scan" },
        { text: "Blog", url: "/blog" },
        { text: "Chatbot voor Fietsenmakers", url: "/chatbot-voor-fietsenmakers" },
        { text: "Voice AI voor Fietsenmakers", url: "/voice-ai-voor-fietsenmakers" },
        { text: "SEO voor Fietsenmakers", url: "/seo-voor-fietsenmakers" },
        { text: "Social Media", url: "/social-media-voor-fietsenmakers" },
        { text: "Reviews", url: "/reviews-voor-fietsenmakers" },
        { text: "Review Pakket", url: "/review-pakket" }
    ],
    email: 'tim@fietsenai.nl',
    telephone: '+31612345678',
    socials: {
        instagram: 'https://www.instagram.com',
        linkedin: 'https://www.linkedin.com',
    },
    kvk: '98933353',
    btw: 'NL005362803B09',
    address: 'De Donge 9, 3448CJ, Woerden',
    legalName: 'DigitalStudioLee'
}