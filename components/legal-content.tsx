import type { ReactNode } from "react"

const mail = (
  <a href="mailto:support@tailzs.com" className="font-semibold text-fox-500 hover:underline">
    support@tailzs.com
  </a>
)

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <h3 className="pt-2 text-base font-bold text-wave-700">{title}</h3>
      <p>{children}</p>
    </>
  )
}

export function PrivacyContent() {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-wave-600">
      <p className="text-xs font-medium uppercase tracking-wider text-wave-400">Last updated: September 18, 2026</p>

      <p>
        This Privacy Policy explains how Tailzs ("Tailzs," "we," "us," or "our") collects, uses, discloses, and
        safeguards your information when you use the Tailzs mobile application and related services (collectively, the
        "App"). By downloading, accessing, or using the App, you agree to the practices described in this Policy. If you
        do not agree, please do not use the App.
      </p>

      <Section title="1. Information We Collect">
        We collect information you provide directly to us, such as your name, email address, and account preferences
        when you create an account. We also automatically collect certain information when you use the App, including
        device identifiers, IP address, app usage data, crash logs, and general location (derived from IP address). We
        do not collect precise GPS location unless you explicitly grant permission.
      </Section>

      <Section title="2. How We Use Your Information">
        We use the information we collect to operate, maintain, and improve the App; personalize your experience;
        deliver scores, alerts, and notifications you request; provide customer support; monitor and analyze usage and
        trends; detect and prevent fraud or abuse; and comply with legal obligations.
      </Section>

      <Section title="3. Data Sharing and Disclosure">
        We do not sell your personal information. We may share information with service providers who perform services
        on our behalf (such as hosting, analytics, and crash reporting), when required by law or valid legal process, to
        protect the rights, safety, and property of Tailzs and its users, and in connection with a merger, acquisition,
        or sale of assets. Any such third parties are bound by confidentiality obligations.
      </Section>

      <Section title="4. Data Retention">
        We retain your personal information only for as long as necessary to fulfill the purposes described in this
        Policy, unless a longer retention period is required or permitted by law. When your information is no longer
        needed, we securely delete or anonymize it.
      </Section>

      <Section title="5. Account Deletion">
        You may delete your account at any time directly within the App by navigating to{" "}
        <span className="font-semibold text-wave-700">Settings &rarr; Account &rarr; Delete Account</span>, or by
        emailing us at {mail}. Upon account deletion, we will permanently delete your personal data associated with your
        account within 30 days, except where retention is required to comply with legal obligations, resolve disputes,
        or enforce our agreements. You may also request a copy of your data prior to deletion.
      </Section>

      <Section title="6. Data Security">
        We implement reasonable administrative, technical, and physical safeguards designed to protect your information,
        including encryption in transit and access controls. However, no method of transmission or storage is completely
        secure, and we cannot guarantee absolute security.
      </Section>

      <Section title="7. Children's Privacy">
        The App is not directed to children under the age of 13 (or the minimum age required in your jurisdiction). We
        do not knowingly collect personal information from children. If we learn that we have collected such
        information, we will delete it promptly.
      </Section>

      <Section title="8. Your Rights and Choices">
        Depending on your location, you may have the right to access, correct, delete, or restrict the use of your
        personal information, and to object to certain processing. You may also opt out of push notifications through
        your device settings. To exercise these rights, contact us at {mail}.
      </Section>

      <Section title="9. International Users">
        Your information may be processed and stored in countries other than your own. Where required, we take steps to
        ensure your information receives an adequate level of protection in the jurisdictions in which we process it.
      </Section>

      <Section title="10. Changes to This Policy">
        We may update this Privacy Policy from time to time. We will notify you of material changes by posting the
        updated Policy within the App and updating the "Last updated" date above. Your continued use of the App after
        changes become effective constitutes acceptance of the revised Policy.
      </Section>

      <Section title="11. Contact Us">
        If you have questions or concerns about this Privacy Policy or our data practices, contact us at {mail}.
      </Section>
    </div>
  )
}

export function TermsContent() {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-wave-600">
      <p className="text-xs font-medium uppercase tracking-wider text-wave-400">Last updated: September 18, 2026</p>

      <p>
        These Terms of Service and End User License Agreement ("Terms") govern your access to and use of the Tailzs
        mobile application and related services (the "App") provided by Tailzs ("Tailzs," "we," "us," or "our"). By
        downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree, do not use
        the App.
      </p>

      <Section title="1. License Grant">
        Subject to your compliance with these Terms, Tailzs grants you a limited, non-exclusive, non-transferable,
        non-sublicensable, revocable license to download and use the App for your personal, non-commercial purposes on
        any device that you own or control, as permitted by the usage rules of the applicable app store.
      </Section>

      <Section title="2. Eligibility and Accounts">
        You must be at least 13 years old (or the minimum age of digital consent in your jurisdiction) to use the App.
        You are responsible for maintaining the confidentiality of your account credentials and for all activity that
        occurs under your account. You agree to provide accurate information and to keep it up to date.
      </Section>

      <Section title="3. Acceptable Use">
        You agree not to: (a) use the App for any unlawful purpose or in violation of any applicable law or regulation;
        (b) reverse engineer, decompile, or attempt to extract the source code of the App; (c) interfere with or disrupt
        the integrity or performance of the App; (d) attempt to gain unauthorized access to the App or related systems;
        or (e) use the App to transmit any harmful, infringing, or objectionable content.
      </Section>

      <Section title="4. Subscriptions and Purchases">
        The App may offer optional paid features or subscriptions. Payment will be charged to your app store account at
        confirmation of purchase. Subscriptions automatically renew unless canceled at least 24 hours before the end of
        the current period. You can manage and cancel subscriptions in your app store account settings. Charges are
        subject to the terms of the applicable app store.
      </Section>

      <Section title="5. Account Deletion and Termination">
        You may delete your account at any time via{" "}
        <span className="font-semibold text-wave-700">Settings &rarr; Account &rarr; Delete Account</span> within the
        App, or by contacting {mail}. We may suspend or terminate your access to the App at any time, with or without
        notice, if you violate these Terms or if we discontinue the App. Upon termination, the license granted to you
        will immediately end.
      </Section>

      <Section title="6. Intellectual Property">
        The App, including all content, features, trademarks, logos, and functionality, is owned by Tailzs and its
        licensors and is protected by intellectual property laws. Except for the limited license granted above, these
        Terms do not grant you any rights in the App or its content.
      </Section>

      <Section title="7. Informational Use Only">
        Content provided in the App, including scores, statistics, and insights, is for general informational and
        entertainment purposes only. Tailzs does not guarantee the accuracy, completeness, or timeliness of any data and
        is not responsible for decisions made based on such content.
      </Section>

      <Section title="8. Disclaimer of Warranties">
        The App is provided "as is" and "as available" without warranties of any kind, whether express or implied,
        including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do
        not warrant that the App will be uninterrupted, secure, or error-free.
      </Section>

      <Section title="9. Limitation of Liability">
        To the maximum extent permitted by law, Tailzs and its affiliates will not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or any loss of profits or data, arising out of or
        related to your use of the App, even if advised of the possibility of such damages. Our total liability shall
        not exceed the amount you paid, if any, for the App in the twelve months preceding the claim.
      </Section>

      <Section title="10. Indemnification">
        You agree to indemnify and hold harmless Tailzs and its affiliates from any claims, damages, liabilities, and
        expenses arising out of your use of the App or your violation of these Terms.
      </Section>

      <Section title="11. Apple and Google App Store Terms">
        If you download the App from the Apple App Store or Google Play, you acknowledge that these Terms are between you
        and Tailzs only, and not with Apple or Google. Apple and Google are not responsible for the App or its content,
        and have no obligation to provide maintenance or support. Apple and Google are third-party beneficiaries of
        these Terms and may enforce them against you. You agree to comply with all applicable third-party app store
        terms of service.
      </Section>

      <Section title="12. Governing Law">
        These Terms are governed by the laws of the jurisdiction in which Tailzs is established, without regard to its
        conflict of law provisions. Any disputes shall be resolved in the courts located in that jurisdiction, unless
        otherwise required by applicable law.
      </Section>

      <Section title="13. Changes to These Terms">
        We may modify these Terms from time to time. We will notify you of material changes by posting the updated Terms
        within the App. Your continued use of the App after changes become effective constitutes acceptance of the
        revised Terms.
      </Section>

      <Section title="14. Contact Us">Questions about these Terms may be directed to {mail}.</Section>
    </div>
  )
}
