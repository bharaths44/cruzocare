import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
    return (



        <div className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4">
                <Helmet>
                    <title>Privacy Policy - CruzoCare</title>
                    <meta name="description" content="Privacy policy of CruzoCare car services" />
                </Helmet>
                <div className="prose max-w-4xl mx-auto">
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-primary">CruzoCare Privacy Policy</h1>
                        <div className="mt-4">
                            <p className="text-sm">Effective Date: January 1, 2025</p>
                            <p className="text-sm text-muted-foreground">(Governed by Laws of the Republic of India)</p>
                        </div>
                    </div>

                    <div className="my-8">
                        <h2 className="text-2xl font-semibold border-b pb-2">1. Legal Framework</h2>
                        <div className="ml-4 mt-4">
                            <p>This Privacy Policy ("Policy") is published under:</p>
                            <ul className="list-disc pl-6">
                                <li>Information Technology Act, 2000 and SPDI Rules 2011</li>
                                <li>Digital Personal Data Protection Act, 2023</li>
                                <li>Indian Contract Act, 1872</li>
                            </ul>
                        </div>
                    </div>

                    <div className="my-8">
                        <h2 className="text-2xl font-semibold border-b pb-2">2. Data Collection</h2>
                        <div className="ml-4 mt-4">
                            <h3 className="font-medium text-lg">2.1 Personal Data</h3>
                            <ul className="list-disc pl-6">
                                <li>Contact details (mobile, email) for service coordination</li>
                            </ul>

                            <h3 className="font-medium text-lg mt-4">2.2 Vehicle Data</h3>
                            <ul className="list-disc pl-6">
                                <li>RC copy verification for ownership validation</li>
                                <li>OBD-II diagnostic reports for maintenance</li>
                            </ul>
                        </div>
                    </div>

                    <div className="my-8">
                        <h2 className="text-2xl font-semibold border-b pb-2">3. Data Processing</h2>
                        <div className="ml-4 mt-4">
                            <p>3.1 We process data for:</p>
                            <ul className="list-disc pl-6">
                                <li>Service fulfillment under contractual obligation</li>
                                <li>Legal compliance per Motor Vehicles Act 1988</li>
                                <li>Legitimate business interests analysis</li>
                            </ul>

                            <h3 className="font-medium text-lg mt-4">3.2 Third-Party Sharing</h3>
                            <ul className="list-disc pl-6">
                                <li>Payment gateways (Razorpay/Stripe) - PCI DSS compliant</li>
                                <li>Government authorities under CrPC Section 91</li>
                            </ul>
                        </div>
                    </div>

                    <div className="my-8">
                        <h2 className="text-2xl font-semibold border-b pb-2">4. Data Security</h2>
                        <div className="ml-4 mt-4">
                            <ul className="list-disc pl-6">
                                <li>AES-256 encryption for data at rest</li>
                                <li>SSL/TLS 1.3 for data in transit</li>
                            </ul>
                        </div>
                    </div>

                    <div className="my-8">
                        <h2 className="text-2xl font-semibold border-b pb-2">5. Data Retention</h2>
                        <div className="ml-4 mt-4">
                            <ul className="list-disc pl-6">
                                <li>Service records: 3 years post-account closure</li>
                                <li>Financial data: 7 years per Income Tax Act</li>
                                <li>Dashcam footage: 90 days unless litigation hold</li>
                            </ul>
                        </div>
                    </div>

                    <div className="my-8">
                        <h2 className="text-2xl font-semibold border-b pb-2">6. User Rights</h2>
                        <div className="ml-4 mt-4">
                            <p>Under DPDP Act 2023, you may:</p>
                            <ul className="list-disc pl-6">
                                <li>Request data access via SAR form</li>
                                <li>Rectify inaccurate personal details</li>
                                <li>With consent through grievance portal</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 text-sm text-muted-foreground">
                        <p>This electronic record is generated under IT Act 2000 and requires no physical signature.</p>
                        <p className="mt-2">Jurisdiction: Courts in Kochi, Kerala</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;