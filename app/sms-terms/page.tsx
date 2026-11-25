/*
 * NOT LEGAL ADVICE. Drafted to cover the usual carrier / A2P 10DLC disclosure
 * requirements. Check it against your GoHighLevel A2P campaign registration
 * (the sample messages and opt-in description must match) and have a lawyer
 * review it before scaling.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, Mail, LEGAL_ADDRESS, LEGAL_ENTITY } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "SMS Terms",
  alternates: { canonical: "/sms-terms" },
};

export default function Page() {
  return (
    <LegalPage title="SMS Terms">
      <p>
        These terms cover text messages (SMS) sent by Imperial Growth, a brand operated by{" "}
        {LEGAL_ENTITY}.
      </p>

      <h2>What you&apos;re agreeing to</h2>
      <p>
        When you give us your mobile number and agree to receive texts, you agree to receive
        text messages from Imperial Growth at that number about your inquiry. This includes
        agreeing on our application form or booking calendar.
      </p>

      <h2>What we send</h2>
      <ul>
        <li>Appointment confirmations when you book a call</li>
        <li>Reminders before your scheduled call</li>
        <li>Follow-ups about your application or inquiry, including rescheduling</li>
      </ul>
      <p>Message frequency varies. Message and data rates may apply.</p>

      <h2>Opting out and getting help</h2>
      <ul>
        <li>
          Reply <strong>STOP</strong> to any message to stop receiving texts. We&apos;ll send one
          message confirming you&apos;ve opted out, and then no more texts.
        </li>
        <li>
          Reply <strong>HELP</strong> for help, or email <Mail />.
        </li>
      </ul>
      <p>
        Consent to receive text messages is not a condition of purchase or of working with us.
      </p>

      <h2>Your mobile information</h2>
      <p>
        We do not share or sell mobile numbers or text-messaging opt-in consent with third
        parties or affiliates for their marketing or promotional purposes. We share it only with
        the service providers that deliver our messages for us.
      </p>
      <p>
        For how we handle your information in general, see our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>Other details</h2>
      <p>
        Carriers are not liable for delayed or undelivered messages. Texts are available only on
        US mobile numbers.
      </p>

      <h2>Contact</h2>
      <p>
        {LEGAL_ENTITY}, operating as Imperial Growth
        <br />
        {LEGAL_ADDRESS}
        <br />
        <Mail />
      </p>
    </LegalPage>
  );
}
