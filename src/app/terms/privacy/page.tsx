"use client";
import React from "react";

export default function Privacy() {
  return (
    <div className="container w-10/12 md:w-1/2 p-4">
      <h1 className="text-2xl font-bold mb-4">Vocablet Privacy Policy</h1>
      <p className="mb-4">
        {`This Vocablet Privacy Policy ("Privacy Policy") describes how your
        personal data is processed when you use Vocablet ("Services"), a
        platform that enhances your vocabulary through personalized suggestions
        and interactions with roleplaying AI bots and agents. This Privacy
        Policy applies to activities by AlphaWolf Ventures, Inc. (together with
        our affiliates, "we", "us" or "Vocablet").`}
      </p>
      <h2 className="text-xl font-semibold mb-2">Personal Data We Collect</h2>
      <h3 className="text-lg font-medium mb-2">Personal Data You Provide:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Account Information: Email address and phone number for account
          creation and identity verification.
        </li>
        <li>
          Third-Party Application Login: Name and email address from third-party
          logins (e.g., Google and Apple).
        </li>
        <li>
          User Content: Data included in input, file uploads, or feedback.
        </li>
        <li>
          Communication Information: Name, contact information, and contents of
          messages sent to us.
        </li>
        <li>
          Subscription Billing Data: Billing information processed by a
          third-party provider.
        </li>
      </ul>
      <h3 className="text-lg font-medium mb-2">
        Personal Data We Receive Automatically:
      </h3>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Log Data: Information sent by your browser, including IP address,
          browser type, and interaction data.
        </li>
        <li>
          Usage Data: Information about your use of the Services, including
          content interaction and device information.
        </li>
        <li>
          Device Information: Name, operating system, and device identifiers.
        </li>
        <li>
          Analytics: Data collected using cookies and similar technologies.
        </li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">How We Use Personal Data</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To provide, administer, maintain, and analyze the Services.</li>
        <li>To improve our Services and conduct research.</li>
        <li>To communicate with you.</li>
        <li>To prevent fraud and protect our IT systems.</li>
        <li>To comply with legal obligations.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">
        Cookies & Similar Technologies
      </h2>
      <p className="mb-4">
        We use cookies to manage the Services and collect information about your
        use of the Services. You can manage cookie settings through your
        browser.
      </p>
      <h2 className="text-xl font-semibold mb-2">
        How We Disclose Personal Data
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Service Providers & Business Partners: Providing data to service
          providers to perform services on our behalf.
        </li>
        <li>
          Legal Requirements: Sharing data to comply with legal obligations or
          protect our rights and interests.
        </li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Right to Know: Information about what personal data we process.</li>
        <li>Deletion: Request deletion of your personal data.</li>
        <li>Correction: Request correction of inaccurate data.</li>
        <li>Objection: Object to certain processing activities.</li>
        <li>
          Withdrawal of Consent: Withdraw consent where processing is based on
          consent.
        </li>
      </ul>
      <p className="mb-4">
        To exercise your rights, contact us at support@alphawolfventures.com.
      </p>
      <h2 className="text-xl font-semibold mb-2">Data Retention</h2>
      <p className="mb-4">
        We retain your data for as long as needed to provide our Services or for
        legitimate business purposes.
      </p>
      <h2 className="text-xl font-semibold mb-2">
        International Data Transfers
      </h2>
      <p className="mb-4">
        Your data may be transferred to our servers in the US or other
        countries, with measures taken to protect your data in accordance with
        this Privacy Policy.
      </p>
      <h2 className="text-xl font-semibold mb-2">
        Third-Party Websites and Services
      </h2>
      <p className="mb-4">
        Our Services may integrate with third-party websites and services, which
        are governed by their own privacy policies.
      </p>
      <h2 className="text-xl font-semibold mb-2">Children</h2>
      <p className="mb-4">
        Our Services are not directed at children under 13, and we do not
        knowingly collect their information.
      </p>
      <h2 className="text-xl font-semibold mb-2">
        Information for California Users
      </h2>
      <p className="mb-4">
        {`We collect identifiers, commercial information, internet or network
        information, and location information. We do not "sell" personal data or
        engage in targeted advertising.`}
      </p>
      <h2 className="text-xl font-semibold mb-2">
        Information for EEA, UK, or Swiss Users
      </h2>
      <p className="mb-4">
        Our legal bases for processing personal data include contract
        performance, legitimate interests, consent, and legal obligations.
      </p>
      <h2 className="text-xl font-semibold mb-2">
        Changes to the Privacy Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy and will post updates on this page.
      </p>
      <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
      <p className="mb-4">
        For privacy-related matters, contact us at support@alphawolfventures.com
        or via postal mail at:
      </p>
      <address className="mb-4">
        AlphaWolf Ventures, Inc.
        <br />
        [address line 1]
        <br />
        [address line 2]
        <br />
        [city, state, ZIP code]
        <br />
        United States
      </address>
    </div>
  );
}
