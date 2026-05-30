import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Punithan Drone Pilot services.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="container-custom">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl">
          <h1 className="heading-lg text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                At Punithan Drone Pilot, we collect information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Name, email address, and phone number when you fill out our contact form</li>
                <li>Project details and location information for consultation requests</li>
                <li>Communication records when you contact us</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Process and manage your consultation requests</li>
                <li>Send you project updates and relevant communications</li>
                <li>Improve our services and website experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600">
                We do not sell, trade, or otherwise transfer your personal information to third parties
                without your consent, except as required by law or to protect our rights. We may share
                information with trusted service providers who assist us in operating our website and
                conducting our business, as long as they agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction. However, no method of
                transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
              <p className="text-gray-600">
                Our website uses cookies to enhance your browsing experience. Cookies are small files
                stored on your device that help us analyze web traffic and remember your preferences.
                You can choose to disable cookies through your browser settings, but this may affect
                your experience on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Services</h2>
              <p className="text-gray-600 mb-4">Our website may use the following third-party services:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Google reCAPTCHA for spam protection</li>
                <li>Google Maps for location display</li>
                <li>Analytics services to understand website usage</li>
              </ul>
              <p className="text-gray-600 mt-4">
                These services have their own privacy policies governing the use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw consent for data processing</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-gray-900 font-medium">Punithan Drone Pilot</p>
                <p className="text-gray-600">Email: contact@punithandronepilot.com</p>
                <p className="text-gray-600">Location: Ahmedabad, Gujarat, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
