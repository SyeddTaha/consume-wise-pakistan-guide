
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-12">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 16, 2025</p>
        
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              ConsumeWise ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our ConsumeWise application and related services (collectively, the "Service").
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Service.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal information (such as name, email address) when you create an account</li>
              <li>Health profile information (allergies, dietary preferences, health goals)</li>
              <li>Images of product labels and barcodes that you scan</li>
              <li>Information about products you view, save, or interact with</li>
              <li>Feedback, support requests, and survey responses</li>
            </ul>
            <p>We also automatically collect certain information when you use our Service:</p>
            <ul className="list-disc pl-6">
              <li>Device information (device type, operating system, browser type)</li>
              <li>Log and usage data (IP address, access times, pages viewed)</li>
              <li>Location information (with your permission)</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul className="list-disc pl-6">
              <li>Provide, maintain, and improve our Service</li>
              <li>Personalize your experience and provide tailored content</li>
              <li>Process and analyze product labels to provide health insights</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Send you technical notices, updates, and administrative messages</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues and fraudulent activities</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sharing of Information</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6">
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations or protect rights</li>
              <li>In connection with a business transaction (merger, acquisition, etc.)</li>
              <li>With your consent or at your direction</li>
            </ul>
            <p>
              We may also share aggregated or de-identified information that cannot reasonably be used to identify you.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6">
              <li>Accessing, correcting, or deleting your personal information</li>
              <li>Withdrawing your consent to our processing of your information</li>
              <li>Requesting restriction of processing or objecting to processing</li>
              <li>Data portability</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: privacy@consumewise.com<br />
              Address: 123 Tech Street, Islamabad, Pakistan
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
