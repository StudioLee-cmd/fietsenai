import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import VoiceAIContent from "@/app/voice-ai/VoiceAIContent";

export const metadata: Metadata = {
    title: `VoiceAI voor Fietsenmakers | ${siteDetails.siteName}`,
    description: `Ontdek onze voiceai oplossing voor fietsenmakers. ${siteDetails.siteName} helpt je groeien.`,
};

export default function Page() {
    return <VoiceAIContent />;
}
