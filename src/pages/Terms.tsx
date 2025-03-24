import { Helmet } from "react-helmet";

const Terms = () => {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <Helmet>
                <title>Terms & Conditions - Cruzo</title>
                <meta name="description" content="Legal terms governing use of Cruzo car care services" />
            </Helmet>

            <div className="mb-10 text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-primary">CruzoCare Terms & Conditions</h1>
                <div className="mt-4">
                    <p className="text-sm">Effective Date: January 1, 2025</p>
                    <p className="text-sm text-muted-foreground">(Governed by Laws of the Republic of India)</p>
                </div>
            </div>

            <div className="prose prose-lg max-w-none">
                <div className="my-8">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">1. Acceptance of Terms</h2>
                    <div className="ml-4">
                        <p>1.1 By engaging Cruzo Private Limited ("Company", "We") for automotive care services ("Services"), you ("Customer", "User") agree to be bound by these Terms & Conditions and our Privacy Policy.</p>
                        <p>1.2 Services include but are not limited to: vehicle maintenance, scheduled drives, diagnostic checks, and detailing as per purchased packages.</p>
                        <p>1.3 This Agreement constitutes a legally binding contract under the Indian Contract Act, 1872.</p>
                    </div>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">2. Service Provisions</h2>
                    <div className="ml-4">
                        <h3 className="font-medium text-lg mb-2">2.1 Service Execution</h3>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Vehicle will be returned to its original parking location post-service</li>
                            <li>Services limited to geographical boundaries of [City Name] municipal corporation</li>
                        </ul>

                        <h3 className="font-medium text-lg mb-2">2.2 Authorized Use</h3>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Strict compliance with Motor Vehicles Act 1988 §180 and IPC §279 during operations</li>
                            <li>Zero tolerance policy for unauthorized vehicle use - immediate termination of service</li>
                        </ul>
                    </div>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">3. Liability Framework</h2>
                    <div className="ml-4">
                        <h3 className="font-medium text-lg mb-2">3.1 Accident Protocol</h3>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Company liability limited to repair costs for negligence-established damages</li>
                            <li>Force majeure events (natural disasters, civil unrest) excluded per IPC §81</li>
                        </ul>

                        <h3 className="font-medium text-lg mb-2">3.2 Insurance Compliance</h3>
                        <ul className="list-disc pl-6 mb-4">
                            <li>User must maintain active insurance per Motor Vehicles Act Chapter XI</li>
                            <li>Claims processing assistance limited to documentation provision</li>
                        </ul>
                    </div>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">4. Data Management</h2>
                    <div className="ml-4">
                        <p>4.1 In compliance with IT Act 2000 and SPDI Rules 2011:</p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Continuous GPS tracking during service operations</li>
                            <li>Dashcam footage retention for 90 days</li>
                        </ul>
                        <p>4.2 Diagnostic reports and service records archived for 3 years</p>
                    </div>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">5. Financial Terms</h2>
                    <div className="ml-4">
                        <h3 className="font-medium text-lg mb-2">5.1 Payment Obligations</h3>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Full payment required before service commencement</li>
                            <li>GST invoice generated post-service completion</li>
                        </ul>

                        <h3 className="font-medium text-lg mb-2">5.2 Cancellation Policy</h3>
                        <ul className="list-disc pl-6 mb-4">
                            <li>100% refund if cancelled 48hrs pre-service</li>
                            <li>50% cancellation fee within 24hrs window</li>
                        </ul>
                    </div>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">6. Dispute Resolution</h2>
                    <div className="ml-4">
                        <p>6.1 Arbitration governed by Arbitration and Conciliation Act 1996</p>
                        <p>6.2 Exclusive jurisdiction: Courts in [City Name], [State Name]</p>
                        <p>6.3 Notice period: 30 days for formal dispute escalation</p>
                    </div>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">7. General Provisions</h2>
                    <div className="ml-4">
                        <ul className="list-disc pl-6 mb-4">
                            <li>Severability: Invalid clauses shall not void remaining terms</li>
                            <li>Force Majeure: Pandemic/riot-related service disruptions excluded</li>
                            <li>Amendment: 30-day notice for T&C changes via registered email</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 text-sm text-muted-foreground">
                    <p>This electronic record is generated under Information Technology Act, 2000 and does not require physical signatures.</p>
                </div>
            </div>
        </div>
    );
};

export default Terms;