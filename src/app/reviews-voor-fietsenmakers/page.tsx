import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import ReviewsContent from "@/app/reviews/ReviewsContent";

export const metadata: Metadata = {
    title: `Reviews voor Fietsenmakers | ${siteDetails.siteName}`,
    description: `Ontdek onze reviews oplossing voor fietsenmakers. ${siteDetails.siteName} helpt je groeien.`,
};

export default function Page() {
    return <ReviewsContent />;
}
