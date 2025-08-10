import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Jay & Anna Cleaning Service',
  description:
    'Privacy policy for Jay & Anna Cleaning Service. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Privacy Policy
      </h1>

      <div className="space-y-8 text-gray-700">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Introduction
          </h2>
          <div className="space-y-3">
            <p className="leading-relaxed">
              [Jay&AnnaCleaningService] (&quot;we&quot;, &quot;our&quot;,
              &quot;us&quot;) is committed to protecting your privacy.
            </p>
            <p className="leading-relaxed">
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our website
              [www.jayannacleaning.com.au] and our services.
            </p>
            <p className="leading-relaxed">
              We are bound by the Australian Privacy Principles (APPs) contained
              in the Privacy Act 1988 (Cth) (&quot;Privacy Act&quot;). This
              policy is compliant with the NSW privacy laws and regulations.
            </p>
          </div>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Information We Collect
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3 text-gray-800">
              Personal Information
            </h3>
            <p className="mb-3">
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Contact details (name, email address, phone number, address)
              </li>
              <li>
                Booking information (service type, date, time, special requests)
              </li>
              <li>
                Payment information (credit card details, billing address)
              </li>
              <li>Any additional information you provide to us</li>
            </ul>
          </div>
        </section>

        {/* How We Collect Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            How We Collect Information
          </h2>
          <p className="mb-3">We collect information through:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Our website when you make a booking</li>
            <li>Direct contact via email, phone, or in person</li>
            <li>Customer feedback forms</li>
            <li>Our payment processing system</li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            How We Use Your Information
          </h2>
          <p className="mb-3">We use your personal information for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Providing our cleaning services</li>
            <li>Processing payments</li>
            <li>Communicating with you about bookings and services</li>
            <li>Improving our services</li>
            <li>Marketing purposes (when consent is provided)</li>
            <li>Meeting legal obligations</li>
          </ul>
        </section>

        {/* Disclosure of Your Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Disclosure of Your Information
          </h2>
          <p className="mb-3">We may share your personal information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Our cleaning staff who will provide services to you</li>
            <li>Payment processing companies</li>
            <li>
              Third-party service providers who assist us in operating our
              business
            </li>
            <li>Government agencies when required by law</li>
            <li>
              Other parties when you have given permission to third parties
            </li>
          </ul>
        </section>

        {/* Security of Your Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Security of Your Information
          </h2>
          <div className="space-y-3">
            <p className="leading-relaxed">
              We take reasonable steps to protect your personal information from
              misuse, interference, loss, unauthorised access, modification, or
              disclosure.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Password protection for staff accessing</li>
              <li>
                Secure Socket Layer (SSL) encryption for data transmission
              </li>
              <li>Secure storage systems for personal information</li>
              <li>Staff training on privacy and data protection</li>
              <li>Regular security assessments</li>
            </ul>
          </div>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Your Rights
          </h2>
          <p className="mb-3">
            Under Australian privacy laws, you have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Opt-out of marketing communications</li>
            <li>
              Request destruction or de-identifying of your personal information
            </li>
          </ul>
        </section>

        {/* Cookies and Tracking Technologies */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Cookies and Tracking Technologies
          </h2>
          <p className="leading-relaxed">
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience. You can adjust your browser
            settings to refuse cookies, but this may affect your ability to use
            certain features of our website.
          </p>
        </section>

        {/* Changes to Privacy Policy */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Changes to This Policy
          </h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on our website.
            We recommend checking this policy periodically for any changes.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Contact Us
          </h2>
          <div className="space-y-3">
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Email:</strong> [jayandannacleaning@gmail.com]
              </li>
              <li>
                <strong>Phone:</strong> [0474-724-805]
              </li>
            </ul>
          </div>
        </section>

        {/* Complaints */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Complaints
          </h2>
          <p className="leading-relaxed">
            If you believe we have breached the Australian Privacy Principles,
            you can make a complaint to us at the contact details above. If you
            are not satisfied with our response, you can contact the Office of
            the Australian Information Commissioner (OAIC) at www.oaic.gov.au
          </p>
        </section>
      </div>
    </div>
  );
}
