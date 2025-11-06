import FAQHeader from "@/components/FAQ/FAQHeader";
import FAQList from "@/components/FAQ/FAQList";
import CallToAction from "@/components/HomePage/CallToAction";

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-[#0F172A] text-[#E2E8F0]">
            <FAQHeader />
            <FAQList />
            <CallToAction />
        </main>
    );
}
