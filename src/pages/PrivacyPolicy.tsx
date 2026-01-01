import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useEffect } from "react";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <main className="pt-24 pb-16 min-h-screen">
                <div className="container-width px-4">
                    <div className="max-w-3xl mx-auto">
                        <a href="/" className="inline-flex items-center text-primary hover:underline mb-8 font-medium">
                            &larr; Back to Home
                        </a>
                        <div className="max-w-3xl mx-auto prose prose-slate">
                            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
                            <p className="text-muted-foreground mb-8">Last Updated: January 1, 2025</p>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
                                <p>
                                    Welcome to Bubbli Digital Services. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold mb-4">2. Data We Collect</h2>
                                <p>
                                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                                </p>
                                <ul className="list-disc pl-6 mt-2 space-y-2">
                                    <li><strong>Identity Data:</strong> name, business name.</li>
                                    <li><strong>Contact Data:</strong> email address, telephone numbers.</li>
                                    <li><strong>Technical Data:</strong> internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold mb-4">3. How We Use Your Data</h2>
                                <p>
                                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                                </p>
                                <ul className="list-disc pl-6 mt-2 space-y-2">
                                    <li>To provide the digital services you have requested.</li>
                                    <li>To communicate with you about your project.</li>
                                    <li>To improve our website and services.</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold mb-4">4. Contact Us</h2>
                                <p>
                                    If you have any questions about this privacy policy or our privacy practices, please contact us via WhatsApp or at support@bubbli.in.
                                </p>
                            </section>
                        </div>
                    </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default PrivacyPolicy;
