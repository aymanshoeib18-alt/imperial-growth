/*
 * NOT LEGAL ADVICE. This policy was drafted to match what the site's code
 * actually does (see components/MetaPixel.tsx, lib/attribution.ts, lib/pii.ts).
 * Have a lawyer review it before scaling ad spend or expanding beyond the US,
 * and update it whenever tracking, vendors or data use change.
 */
import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalPage,
  Mail,
  LEGAL_ADDRESS,
  LEGAL_BRAND,
  LEGAL_CORP_NO,
  LEGAL_ENTITY,
} from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        {LEGAL_BRAND} (&ldquo;Imperial Growth,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) is
        operated by {LEGAL_ENTITY}, a corporation incorporated in Ontario, Canada. This policy
        explains what information we collect when you visit imperialgrowth.co, apply, or book a
        call with us. It also explains what we do with that information and the choices you
        have.
      </p>
      <p>
        Our services are offered only to businesses in the United States. This website is not
        directed at anyone outside the US or at children under 16.
      </p>

      <h2>What we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li>
          <strong>Application answers.</strong> When you fill in our application form, we
          collect your answers. That includes your name, email, phone number, company
          details and the other questions on the form.
        </li>
        <li>
          <strong>Booking details.</strong> When you book a call, we collect the time you choose
          and the contact details you enter.
        </li>
        <li>
          <strong>Messages.</strong> We keep what you send us by email, text or phone.
        </li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li>
          <strong>Page views.</strong> We record the pages you visit on this site. That includes
          the page address, the referring page, your browser and device type, your IP address,
          and the time of the visit.
        </li>
        <li>
          <strong>Ad click details.</strong> If you arrive from an ad, we save the Facebook click
          ID (fbclid) and campaign tags (utm_source, utm_medium, utm_campaign, utm_content,
          utm_term) from the link. They are kept in your browser&apos;s session storage until you
          close the tab. We pass them to our application form so we know which ad brought you
          here.
        </li>
      </ul>

      <h2>Meta Pixel and cookies</h2>
      <p>
        This site uses the Meta Pixel, a tracking tool from Meta Platforms, Inc. (the company
        behind Facebook and Instagram). It loads on every page except our booking page. On those
        pages it sends Meta a &ldquo;PageView&rdquo; event each time you view a page. The event
        includes the page address and information about your browser and device. It also
        includes Meta&apos;s cookie identifiers and the Facebook click ID if you arrived from an ad.
      </p>
      <p>
        The pixel loads automatically when you visit. We do not show a cookie consent banner and
        do not wait for consent before loading it. We also do not change its behavior based on
        your location or on Global Privacy Control (GPC) browser signals. You can still block or
        limit it using the options under &ldquo;Your choices&rdquo; below.
      </p>
      <p>The pixel sets two first-party cookies on imperialgrowth.co:</p>
      <ul>
        <li>
          <strong>_fbp</strong>: identifies your browser to Meta, so visits can be measured. It
          lasts about 90 days.
        </li>
        <li>
          <strong>_fbc</strong>: stores the Facebook click ID when you arrive from a Meta ad. It
          lasts about 90 days.
        </li>
      </ul>
      <p>
        We never put your email address or phone number in a page address on this site. Our
        booking page removes them from the address bar as soon as the calendar has loaded them.
      </p>

      <h2>Meta Conversions API</h2>
      <p>
        When you submit an application (a &ldquo;Lead&rdquo;) or book a call (a
        &ldquo;Schedule&rdquo;), our customer relationship management (CRM) system sends that
        event directly to Meta through the Meta Conversions API. These events are not sent from
        your browser. They may include your name, email address and phone number. Meta requires
        those to be hashed (scrambled one way) before they are sent. The events may also include
        your Facebook click ID, browser ID, IP address and browser details. Meta uses this to
        match the event to the ad you saw.
      </p>
      <p>
        Meta processes this information under its own{" "}
        <a href="https://www.facebook.com/privacy/policy/" rel="noopener noreferrer">
          Privacy Policy
        </a>
        .
      </p>

      <h2>Why we use it</h2>
      <ul>
        <li>
          <strong>Ad measurement and targeting.</strong> We use it to see which ads lead to
          applications and booked calls. We also use it to show our ads to similar businesses,
          and to show ads to people who have already visited our site.
        </li>
        <li>
          <strong>Contacting applicants.</strong> We use it to review your application, book
          and confirm your call, send reminders, and follow up about your inquiry by email,
          phone or text.
        </li>
        <li>
          <strong>Running the business.</strong> We use it to keep records, prevent abuse, and
          meet legal obligations.
        </li>
      </ul>
      <p>We do not sell your information for money.</p>

      <h2>Who we share it with</h2>
      <p>We share information only with these service providers, which act on our behalf:</p>
      <ul>
        <li>
          <strong>Tally</strong> (Tally BV) hosts our application form and processes your
          answers.
        </li>
        <li>
          <strong>GoHighLevel</strong> (HighLevel, Inc.) is our CRM, calendar and messaging
          system. It stores your contact details, application and bookings. It sends our emails
          and texts, and it sends the Lead and Schedule events to Meta.
        </li>
        <li>
          <strong>Meta</strong> receives page views from the pixel and conversion events from
          our CRM, as described above.
        </li>
        <li>
          <strong>Vercel</strong> hosts this website. Like any web host, it processes basic
          request logs such as IP addresses.
        </li>
      </ul>
      <p>
        We may also disclose information if the law requires it, to protect our rights, or as
        part of a sale or reorganization of our business.
      </p>
      <p>
        We do not share mobile numbers or text-messaging opt-in consent with third parties for
        their own marketing. See our <Link href="/sms-terms">SMS Terms</Link>.
      </p>

      <h2>Where your information is processed</h2>
      <p>
        We are based in Canada, and our service providers store and process information in the
        United States, Canada and other countries where they operate. Your information may
        therefore be subject to the laws of those countries, including lawful access by their
        authorities. We handle personal information in line with Canada&apos;s Personal
        Information Protection and Electronic Documents Act (PIPEDA) as well as the US laws
        described below.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep application and booking records for as long as we have a business relationship
        or a legitimate reason to follow up. After that, we delete or anonymize them unless the
        law requires us to keep them longer. You can ask us to delete your information at any
        time.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>
          <strong>Browser settings.</strong> You can block or delete cookies, including _fbp and
          _fbc, in your browser settings. Content or tracker blockers also stop the Meta Pixel
          from loading.
        </li>
        <li>
          <strong>Meta ad preferences.</strong> You can control how Meta uses activity from other
          websites to show you ads. Go to your Facebook or Instagram{" "}
          <a href="https://accountscenter.facebook.com/ad_preferences" rel="noopener noreferrer">
            ad preferences
          </a>
          , including &ldquo;Activity information from ad partners.&rdquo;
        </li>
        <li>
          <strong>Email us.</strong> Write to <Mail />. You can ask us to stop using your
          information for ads, to stop contacting you, or to delete your information.
        </li>
        <li>
          <strong>Text messages.</strong> Reply STOP to any text from us to opt out.
        </li>
      </ul>

      <h2>California residents</h2>
      <p>
        If you live in California, the California Consumer Privacy Act, as amended by the
        California Privacy Rights Act (CCPA/CPRA), gives you these rights:
      </p>
      <ul>
        <li>
          <strong>Right to know.</strong> You can ask what personal information we have
          collected about you, where it came from, why we use it, and who we share it with.
        </li>
        <li>
          <strong>Right to delete.</strong> You can ask us to delete the personal information we
          collected from you, with some legal exceptions.
        </li>
        <li>
          <strong>Right to correct.</strong> You can ask us to fix inaccurate information.
        </li>
        <li>
          <strong>Right to opt out of sharing.</strong> Sending browsing activity to Meta for
          ad targeting (cross-context behavioral advertising) may count as &ldquo;sharing&rdquo;
          under California law. You can opt out by emailing <Mail /> with the subject &ldquo;Do
          Not Share.&rdquo; You can also use the browser and Meta settings above. We do not sell
          personal information for money.
        </li>
        <li>
          <strong>Right to limit use of sensitive information.</strong> We do not collect
          sensitive personal information to infer characteristics about you.
        </li>
        <li>
          <strong>Right to non-discrimination.</strong> We will not treat you differently for
          using these rights.
        </li>
      </ul>
      <p>
        In the past 12 months we collected the following categories of personal information:
      </p>
      <ul>
        <li>Identifiers (name, email, phone, IP address, cookie IDs)</li>
        <li>Commercial information (your company details and application answers)</li>
        <li>Internet activity (page views and ad clicks)</li>
        <li>Approximate location derived from IP address</li>
      </ul>
      <p>
        We collected them from you, your browser, and our service providers, for the purposes
        listed above.
      </p>
      <p>
        To make a request, email <Mail />. We will verify your request by matching the email
        address or phone number we have on file. An authorized agent may make a request for you
        with your written permission. We will respond within 45 days.
      </p>

      <h2>Security</h2>
      <p>
        We use reputable providers and limit who on our team can access your information. No
        system is perfectly secure, so we cannot guarantee security.
      </p>

      <h2>Changes</h2>
      <p>
        If we change this policy, we will update the date at the top of this page. If the change
        is significant, we will take reasonable steps to let you know.
      </p>

      <h2>Contact</h2>
      <p>
        {LEGAL_ENTITY}, operating as {LEGAL_BRAND}
        <br />
        {LEGAL_ADDRESS}
        <br />
        {LEGAL_CORP_NO}
        <br />
        <Mail />
      </p>
    </LegalPage>
  );
}
