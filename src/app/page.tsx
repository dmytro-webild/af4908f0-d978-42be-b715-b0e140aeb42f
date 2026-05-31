"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { CheckCircle, Globe, Star, User } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumLargeSizeLargeTitles"
        background="circleGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Translators",          id: "#translators"},
        {
          name: "Impact",          id: "#impact"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQs",          id: "#faqs"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="TransBridge Connect"
      button={{
        text: "Sign Up",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="TransBridge Connect"
      description="Your seamless connection to certified English-Persian translation professionals."
      buttons={[
        {
          text: "Find a Translator",          href: "#translators"},
        {
          text: "Become a Translator",          href: "#contact"},
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/team-young-colleagues-having-meeting-cafe_273609-16141.jpg",          imageAlt: "Hands translating documents, global communication"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/people-taking-part-business-event_23-2149333656.jpg",          imageAlt: "Professional translator working on a computer"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/translator-dictionary-language-interpreter_53876-132693.jpg",          imageAlt: "Digital translation interface with language symbols"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-latin-friends-hanging-out_23-2151139444.jpg",          imageAlt: "Diverse group of people studying languages"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-female-doctor-communicating-with-male-patient-while-standing-hallway-clinic_637285-481.jpg",          imageAlt: "Businessman signing an international contract"},
        {
          imageAlt: "Modern office with global team collaboration",          imageSrc: "http://img.b2bpic.net/free-photo/man-wheelchair-having-inclusive-office-job_23-2149571037.jpg"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Mission"
      title="Empowering Global Communication"
      description="TransBridge Connect streamlines the process of finding and hiring top-tier English-Persian translators. We bridge language barriers, connecting businesses and individuals with skilled linguists."
      subdescription="Our platform ensures secure transactions, efficient project management, and access to a diverse pool of verified professionals ready to deliver accurate and culturally nuanced translations."
      icon={Globe}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-young-people-with-thought-bubble_23-2149184865.jpg"
      imageAlt="People communicating across globe with translation"
      mediaAnimation="opacity"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Post Your Project",          description: "Describe your translation needs and receive competitive bids from qualified English-Persian translators.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-online-written-note-with-pen-notepad-white-background_179666-19392.jpg",          imageAlt: "Person posting a project online"},
        {
          title: "Find Expert Translators",          description: "Browse detailed profiles, review portfolios, and directly hire professionals with specialized expertise.",          imageSrc: "http://img.b2bpic.net/free-photo/attractive-woman-working-her-office-home_329181-10987.jpg",          imageAlt: "User searching for translators"},
        {
          title: "Secure Payments & Delivery",          description: "Benefit from escrow services, transparent pricing, and timely, high-quality translation delivery.",          imageSrc: "http://img.b2bpic.net/free-photo/business-leader-analyzing-report-tablet-screen_1262-18149.jpg",          imageAlt: "Secure payment system with shield icon"},
      ]}
      title="Simplify Your Translation Journey"
      description="From document translation to real-time interpretation, our platform makes it easy to manage your projects."
      tag="How It Works"
    />
  </div>

  <div id="translators" data-section="translators">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "t1",          name: "Dr. Amir Hassan",          price: "Legal & Technical",          imageSrc: "http://img.b2bpic.net/free-photo/businessman-black-suit-opening-button-his-shirt_114579-18980.jpg",          imageAlt: "Portrait of Dr. Amir Hassan"},
        {
          id: "t2",          name: "Ms. Sara Amiri",          price: "Medical & Academic",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-smiley-business-man_23-2148479530.jpg",          imageAlt: "Portrait of Ms. Sara Amiri"},
        {
          id: "t3",          name: "Mr. Reza Shah",          price: "Business & Finance",          imageSrc: "http://img.b2bpic.net/free-photo/african-american-young-man-wearing-jacket-checkered-shirt-looking-camera-studio_613910-21142.jpg",          imageAlt: "Portrait of Mr. Reza Shah"},
        {
          id: "t4",          name: "Dr. Nika Jafari",          price: "Literary & Cultural",          imageSrc: "http://img.b2bpic.net/free-photo/view-3d-male-lawyer-suit_23-2151228110.jpg",          imageAlt: "Portrait of Dr. Nika Jafari"},
        {
          id: "t5",          name: "Mr. Ali Kian",          price: "Marketing & E-commerce",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-man_114579-78887.jpg",          imageAlt: "Portrait of Mr. Ali Kian"},
        {
          id: "t6",          name: "Ms. Layla Rahimi",          price: "Website Localization",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-business-man-city_23-2148479588.jpg",          imageAlt: "Portrait of Ms. Layla Rahimi"},
      ]}
      title="Meet Our Featured Translators"
      description="Discover highly-rated English-Persian translators specializing in various fields, ready to take on your project."
      tag="Our Translators"
    />
  </div>

  <div id="impact" data-section="impact">
      <MetricCardOne
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      animationType="slide-up"
      metrics={[
        {
          id: "m1",          value: "500+",          title: "Verified Translators",          description: "A growing network of skilled professionals at your fingertips.",          icon: User,
        },
        {
          id: "m2",          value: "10,000+",          title: "Projects Completed",          description: "Successfully delivered translations for diverse clients.",          icon: CheckCircle,
        },
        {
          id: "m3",          value: "98%",          title: "Client Satisfaction",          description: "Our commitment to quality and seamless service.",          icon: Star,
        },
      ]}
      title="Numbers That Speak Volumes"
      description="See the growth and reach of TransBridge Connect, connecting people across languages."
      tag="Our Impact"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          title: "Exceptional Service!",          quote: "TransBridge Connect transformed our legal document translation process. The quality and speed were beyond our expectations. Highly recommended!",          name: "Sarah J.",          role: "Legal Firm Partner",          imageSrc: "http://img.b2bpic.net/free-photo/smiley-man-talking-his-colleagues-meeting_23-2148817057.jpg",          imageAlt: "Portrait of Sarah J."},
        {
          id: "2",          title: "Reliable & Professional",          quote: "As a translator, finding clients used to be a challenge. TransBridge Connect provides a steady stream of projects and a secure payment system. It's truly empowering!",          name: "Dr. A. Hassan",          role: "Freelance Translator",          imageSrc: "http://img.b2bpic.net/free-photo/crazy-hippie-man-happy-expression_1194-3938.jpg",          imageAlt: "Portrait of Dr. A. Hassan"},
        {
          id: "3",          title: "Seamless Experience",          quote: "The platform is incredibly user-friendly. I quickly found a specialized translator for my academic paper, and the communication was effortless from start to finish.",          name: "Dr. Emily R.",          role: "Researcher",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-african-rastafarian-male-wearing-blue-shirt-beanie-studio-portrait-blue-background_613910-11516.jpg",          imageAlt: "Portrait of Dr. Emily R."},
        {
          id: "4",          title: "A True Game Changer",          quote: "TransBridge Connect has become an indispensable tool for our international marketing campaigns. The cultural nuances captured in their translations are invaluable.",          name: "Michael C.",          role: "Marketing Director",          imageSrc: "http://img.b2bpic.net/free-photo/amused-young-student-girl-wearing-bandana-glasses-holding-large-note-pads-with-pen-mobile-phone-near-ear-looking-camera-isolated-blue-background_141793-138842.jpg",          imageAlt: "Portrait of Michael C."},
        {
          id: "5",          title: "Fair & Transparent",          quote: "I appreciate the transparency in pricing and the promptness of payments. It's a platform built with both clients and translators in mind.",          name: "Layla R.",          role: "Website Localization Expert",          imageSrc: "http://img.b2bpic.net/free-photo/male-business-executive-using-mobile-phone_1170-840.jpg",          imageAlt: "Portrait of Layla R."},
      ]}
      title="What Our Community Says"
      description="Hear from clients and translators who have experienced the TransBridge Connect difference."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "GlobalCorp",        "MediTranslate",        "LegalSpeak",        "TechLocale",        "EduConnect",        "FinanceLink",        "CultureBridge"]}
      title="Trusted by Businesses Worldwide"
      description="Our platform facilitates critical communication for various industries, ensuring clarity and accuracy in every exchange."
      tag="Our Network"
    />
  </div>

  <div id="faqs" data-section="faqs">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq1",          title: "How do I post a new translation project?",          content: "Clients can easily post a new project by clicking 'Post Project', filling out the details, and setting their budget and deadline. Translators will then submit bids."},
        {
          id: "faq2",          title: "What qualifications do your translators have?",          content: "All translators on TransBridge Connect undergo a rigorous verification process, including language proficiency tests, specialization checks, and portfolio reviews to ensure high quality."},
        {
          id: "faq3",          title: "How are payments handled on the platform?",          content: "We use a secure escrow system. Clients deposit funds which are held until the project is completed and approved. Payments are then released directly to the translator."},
        {
          id: "faq4",          title: "Can I choose a specific translator?",          content: "Yes, clients can browse translator profiles, view their specializations, ratings, and past work, and directly invite or hire a specific translator for their project."},
        {
          id: "faq5",          title: "What if I'm not satisfied with the translation?",          content: "We offer a dispute resolution service. If you're not satisfied, our team will mediate to ensure a fair outcome, which may include revisions or a refund."},
        {
          id: "faq6",          title: "How can I become a translator on TransBridge Connect?",          content: "Visit our 'Become a Translator' section, submit your application with your credentials, language pairs, and specializations. Our team will review your profile and get in touch."},
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Find quick answers to common questions for both clients and translators."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      text="Ready to Bridge Your Language Gap? Get in Touch Today."
      buttons={[
        {
          text: "Contact Support",          href: "#"},
        {
          text: "Start a Project",          href: "#hero"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Services",              href: "#services"},
          ],
        },
        {
          items: [
            {
              label: "Find Translators",              href: "#translators"},
            {
              label: "Become a Translator",              href: "#contact"},
            {
              label: "FAQs",              href: "#faqs"},
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
            {
              label: "Contact Support",              href: "#contact"},
          ],
        },
      ]}
      logoText="TransBridge Connect"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
