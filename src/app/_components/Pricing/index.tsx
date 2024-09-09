"use client";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Payment Gateway is powered by Stripe."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Vocablet Mini"
            price="2.99"
            duration="mo"
            slug="mini"
            subtitle="Flashcards with AI (No AI Chat)"
          >
            <OfferList text="AI Chat Messages" status="inactive" />
            <OfferList text="Roleplay Feature in AI Chat" status="inactive" />
            <OfferList text="Flashcards Learning" status="active" />
            <OfferList text="Word Meaning with AI" status="active" />
            <OfferList text="Generate Words with AI" status="active" />
            <OfferList text="Priority Support" status="active" />
            <OfferList text="Cancel Anytime" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Vocablet Starter"
            price="7.99"
            duration="mo"
            slug="starter"
            recommended={true}
            subtitle="Chat and learn and memorize with Flashcards.(No Roleplay)"
          >
            <OfferList
              text="Unlimited AI Chat Messages Monthly"
              status="active"
              tooltip="Unlimited AI Chat comes with a Fair Usage Policy (FUP). Enjoy up to 7000 monthly messages—more than enough for typical usecase."
            />
            {/* <OfferList
              text="30 AI Messages In Single Conversation"
              status="active"
            /> */}
            <OfferList
              text="Roleplay Feature in AI Chat"
              status="inactive"
            />
            <OfferList text="Flashcards Learning" status="active" />
            <OfferList text="Word Meaning with AI" status="active" />
            <OfferList text="Generate Words with AI" status="active" />
            <OfferList text="Priority Support" status="active" />
            <OfferList text="Cancel Anytime" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Vocablet Pro"
            price="9.99"
            duration="mo"
            slug="pro"
            subtitle="Chat, roleplay, and learn and memorize with Flashcards. Everything!"
          >
            <OfferList
              text="Unlimited AI Chat Messages Monthly"
              status="active"
              tooltip="Unlimited AI Chat comes with a Fair Usage Policy (FUP). Enjoy up to 9000 monthly messages—more than enough for advanced usecase."
            />
            {/* <OfferList
              text="Unlimited AI Messages In Single Conversation"
              status="active"
            /> */}
            <OfferList
              text="Roleplay Feature in AI Chat"
              status="active"
              showFlameIcon={true}
            />
            <OfferList text="Flashcards Learning" status="active" />
            <OfferList text="Word Meaning with AI" status="active" />
            <OfferList text="Generate Words with AI" status="active" />
            <OfferList text="Priority Support" status="active" />
            <OfferList text="Cancel Anytime" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 ">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
