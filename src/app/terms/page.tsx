import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Punithan Drone Pilot services.",
};

export default function TermsOfService() {
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
          <h1 className="heading-lg text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600">
                By accessing or using the services provided by Punithan Drone Pilot, you agree to be
                bound by these Terms of Service. If you do not agree to these terms, please do not
                use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-600 mb-4">
                Punithan Drone Pilot provides professional drone services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Aerial photography and videography</li>
                <li>Survey and mapping services</li>
                <li>Industrial inspections</li>
                <li>Construction monitoring</li>
                <li>Real estate marketing content</li>
                <li>Event coverage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. DGCA Compliance</h2>
              <p className="text-gray-600">
                All drone operations are conducted in compliance with the Directorate General of Civil
                Aviation (DGCA) regulations in India. We hold valid licenses and certifications as
                required by law. Certain operations may require additional permissions or No Permission
                No Takeoff (NPNT) compliance, which may affect project timelines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Booking and Payment</h2>
              <p className="text-gray-600 mb-4">
                When booking our services:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>A consultation will be conducted to understand project requirements</li>
                <li>A detailed quote will be provided based on project scope</li>
                <li>An advance payment may be required to confirm bookings</li>
                <li>Final payment is due upon delivery of agreed deliverables</li>
                <li>Cancellation policies will be communicated at the time of booking</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Weather and Conditions</h2>
              <p className="text-gray-600">
                Drone operations are weather-dependent. In case of adverse weather conditions
                (high winds, rain, low visibility, etc.), flights may be postponed or cancelled
                for safety reasons. Rescheduling will be arranged at no additional cost in such cases.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600">
                Unless otherwise agreed in writing, all footage and photographs captured during
                our services are the intellectual property of Punithan Drone Pilot until full
                payment is received. Upon payment, rights transfer to the client as per the
                agreed terms. We reserve the right to use footage for portfolio and marketing
                purposes unless explicitly restricted in the contract.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Liability</h2>
              <p className="text-gray-600">
                While we maintain comprehensive insurance coverage for our operations, our liability
                is limited to the fees paid for the specific service. We are not liable for indirect,
                consequential, or incidental damages. Client is responsible for ensuring necessary
                permissions for filming at their chosen locations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Client Responsibilities</h2>
              <p className="text-gray-600 mb-4">Clients must:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate information about project requirements and locations</li>
                <li>Obtain necessary permissions for private property access</li>
                <li>Ensure the safety of the filming location</li>
                <li>Communicate any special requirements in advance</li>
                <li>Respect flight safety zones and restrictions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Privacy and Confidentiality</h2>
              <p className="text-gray-600">
                We respect client confidentiality and handle all project information with discretion.
                Any sensitive footage or data will be handled according to our privacy policy and
                any additional confidentiality agreements signed with the client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modifications to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Changes will be effective
                immediately upon posting to our website. Continued use of our services after changes
                constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-600">
                These terms are governed by the laws of India. Any disputes arising from these terms
                or our services shall be subject to the exclusive jurisdiction of the courts in
                Chennai, Tamil Nadu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact</h2>
              <p className="text-gray-600">
                For any questions regarding these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-gray-900 font-medium">Punithan Drone Pilot</p>
                <p className="text-gray-600">Email: contact@punithanfly.com</p>
                <p className="text-gray-600">Phone: +91 93616 23073</p>
                <p className="text-gray-600">Location: Chennai, Tamil Nadu, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
