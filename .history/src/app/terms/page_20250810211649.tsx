import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Jay & Anna Cleaning Service',
  description:
    'Terms and conditions for Jay & Anna Cleaning Service. Read our policies for bookings, cancellations, payments, and service guarantees.',
};

export default function TermsAndConditions() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Terms and Conditions
      </h1>

      <div className="space-y-8 text-gray-700">
        {/* 1. Introduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            1. Introduction
          </h2>
          <p className="leading-relaxed">
            [JayandAnnacleaning] (ABN: [50 183 002 680]) (&quot;Company&quot;)
            provides house cleaning services through www.jayannacleaning.com.au
            (&quot;Website&quot;). These Terms govern your use of our Website
            and Services.
          </p>
        </section>

        {/* 2. Booking and Cancellation */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            2. Booking and Cancellation
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3 text-gray-800">
              2.1. Bookings
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bookings must be made through our Website</li>
              <li>Service areas are limited to specified Sydney regions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3 text-gray-800">
              2.2. Cancellation Policy
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Free cancellation: 24+ hours before service</li>
              <li>Late cancellation fee: $50 (within 24 hours)</li>
              <li>No-show: Full service charge applies</li>
            </ul>
          </div>
        </section>

        {/* 3. Payment */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            3. Payment
          </h2>
          <ul className="space-y-3">
            <li>
              <strong>3.1. All prices include GST</strong>
            </li>
            <li>
              <strong>
                3.2. Payment is required through our secure payment system
              </strong>
            </li>
            <li>
              <strong>3.3. Additional charges apply for extra services</strong>
            </li>
          </ul>
        </section>

        {/* 4. Service Guarantee */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            4. Service Guarantee
          </h2>
          <ul className="space-y-3">
            <li>
              <strong>4.1. Problems must be reported within 48 hours</strong>
            </li>
            <li>
              <strong>
                4.2. We offer a free re-clean for valid complaints
              </strong>
            </li>
            <li>
              <strong>
                4.3. Our insurance covers verified damage during service
              </strong>
            </li>
          </ul>
        </section>

        {/* 5. Customer Responsibilities */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            5. Customer Responsibilities
          </h2>
          <ul className="space-y-3">
            <li>
              <strong>5.1. Provide accurate booking information</strong>
            </li>
            <li>
              <strong>5.2. Ensure property access</strong>
            </li>
            <li>
              <strong>5.3. Report any issues within 48 hours</strong>
            </li>
          </ul>
        </section>

        {/* 6. Liability */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            6. Liability
          </h2>
          <div>
            <h3 className="text-xl font-medium mb-3 text-gray-800">
              6.1. We are not liable for:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pre-existing damage</li>
              <li>Issues reported after 48 hours</li>
              <li>Damage not caused by our service</li>
            </ul>
          </div>
        </section>

        {/* 7. Privacy */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            7. Privacy
          </h2>
          <ul className="space-y-3">
            <li>
              <strong>7.1. We comply with the Privacy Act 1988 (Cth)</strong>
            </li>
            <li>
              <strong>7.2. Your data is securely stored and protected</strong>
            </li>
          </ul>
        </section>

        {/* 8. Changes to Terms */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            8. Changes to Terms
          </h2>
          <ul className="space-y-3">
            <li>
              <strong>8.1. We may update these terms without notice</strong>
            </li>
            <li>
              <strong>
                8.2. Updates are effective immediately when posted
              </strong>
            </li>
          </ul>
        </section>

        {/* 9. Governing Law */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            9. Governing Law
          </h2>
          <ul className="space-y-3">
            <li>
              <strong>9.1. NSW law governs these terms</strong>
            </li>
            <li>
              <strong>9.2. Disputes will be resolved through NCAT</strong>
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact</h2>
          <div className="space-y-2">
            <p>
              <strong>Email:</strong> [JayandAnnacleaning@gmail.com]
            </p>
            <p>
              <strong>Phone:</strong> [0474-724-805]
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
