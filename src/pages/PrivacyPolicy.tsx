
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your information.
          </p>
          <p className="text-sm mt-4 opacity-80">Last updated: December 15, 2024</p>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>Personal Information:</strong> When you subscribe to our newsletter, create an account, or contact us, we may collect personal information such as your name, email address, and phone number.</p>
                <p><strong>Usage Data:</strong> We automatically collect information about how you use our website, including your IP address, browser type, pages visited, and time spent on our site.</p>
                <p><strong>Cookies:</strong> We use cookies and similar technologies to enhance your browsing experience and analyze website traffic.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <div className="space-y-4 text-gray-600">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Send you newsletters and updates (with your consent)</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Analyze website usage and improve user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
              <div className="space-y-4 text-gray-600">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights, property, or safety, or that of others</li>
                  <li>With trusted service providers who assist us in operating our website (under strict confidentiality agreements)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <div className="space-y-4 text-gray-600">
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
                <p>We use industry-standard encryption protocols and regularly update our security practices to protect your data.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
              <div className="space-y-4 text-gray-600">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict processing of your information</li>
                  <li>Withdraw consent at any time</li>
                  <li>Data portability (receive your data in a structured format)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
              <div className="space-y-4 text-gray-600">
                <p>We use cookies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve website functionality</li>
                </ul>
                <p>You can control cookies through your browser settings, but disabling cookies may affect website functionality.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
              <div className="space-y-4 text-gray-600">
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.</p>
                <p>We encourage you to review this Privacy Policy periodically for any changes.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
              <div className="space-y-4 text-gray-600">
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> privacy@cryptowave.com</li>
                  <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                  <li><strong>Address:</strong> 123 Crypto Street, San Francisco, CA 94102</li>
                </ul>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
