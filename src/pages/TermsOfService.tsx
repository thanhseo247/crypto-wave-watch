
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Please read these terms carefully before using our services. 
            By using CryptoWave, you agree to these terms.
          </p>
          <p className="text-sm mt-4 opacity-80">Last updated: December 15, 2024</p>
        </div>
      </div>

      {/* Terms Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-600">
                <p>By accessing and using CryptoWave ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                <p>These Terms of Service apply to all visitors, users, and others who access or use the Service.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <div className="space-y-4 text-gray-600">
                <p>CryptoWave provides cryptocurrency news, market analysis, educational content, and related information services. The Service is provided "as is" and on an "as available" basis.</p>
                <p>We reserve the right to modify, suspend, or discontinue the Service at any time without notice.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Conduct</h2>
              <div className="space-y-4 text-gray-600">
                <p>You agree not to use the Service to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any local, state, national, or international law</li>
                  <li>Transmit or distribute harmful, offensive, or illegal content</li>
                  <li>Impersonate any person or entity</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Attempt to gain unauthorized access to any part of the Service</li>
                  <li>Use automated scripts to collect information from the Service</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">4. Investment Disclaimer</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>IMPORTANT:</strong> The information provided on CryptoWave is for educational and informational purposes only and should not be considered as financial or investment advice.</p>
                <p>Cryptocurrency investments are highly volatile and risky. You should:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Conduct your own research before making any investment decisions</li>
                  <li>Consult with qualified financial advisors</li>
                  <li>Never invest more than you can afford to lose</li>
                  <li>Understand that past performance does not guarantee future results</li>
                </ul>
                <p>We are not responsible for any financial losses resulting from your use of our content.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <div className="space-y-4 text-gray-600">
                <p>The Service and its original content, features, and functionality are and will remain the exclusive property of CryptoWave and its licensors. The Service is protected by copyright, trademark, and other laws.</p>
                <p>You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service without prior written consent.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">6. User Content</h2>
              <div className="space-y-4 text-gray-600">
                <p>If you submit content to the Service (comments, feedback, etc.), you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content.</p>
                <p>You represent and warrant that you own or have the necessary rights to submit such content.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <div className="space-y-4 text-gray-600">
                <p>In no event shall CryptoWave, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses.</p>
                <p>Our liability is limited to the maximum extent permitted by law.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
              <div className="space-y-4 text-gray-600">
                <p>You agree to defend, indemnify, and hold harmless CryptoWave and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
              <div className="space-y-4 text-gray-600">
                <p>We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                <p>Upon termination, your right to use the Service will cease immediately.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
              <div className="space-y-4 text-gray-600">
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.</p>
                <p>What constitutes a material change will be determined at our sole discretion.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
              <div className="space-y-4 text-gray-600">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> legal@cryptowave.com</li>
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

export default TermsOfService;
