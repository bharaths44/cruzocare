import React from 'react';
import { Clipboard, Car, MessageSquare, Wrench, Check } from 'lucide-react';

const ProcessStep = ({ icon, title, children }: {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}) => (
    <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
        <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-cruzo-blue/20 flex items-center justify-center">
                {icon}
            </div>
            <div>
                <h3 className="text-xl md:text-2xl font-bold plan-title mb-2">{title}</h3>
            </div>
        </div>
        {children}
    </div>
);

const Process = () => {
    const steps = [
        {
            icon: <Clipboard className="h-6 w-6 text-cruzo-blue" />,
            title: "Initial Visit",
            features: [
                "Complete vehicle inspection",
                "Photo documentation",
                "Condition report via WhatsApp",
                "Service schedule planning"
            ]
        },
        {
            icon: <Car className="h-6 w-6 text-cruzo-blue" />,
            title: "Regular Care",
            features: [
                "Scheduled car washes",
                "Routine drives (10km)",
                "Battery & tire checks",
                "Dash cam recording"
            ]
        },
        {
            icon: <MessageSquare className="h-6 w-6 text-cruzo-blue" />,
            title: "Updates & Reports",
            features: [
                "Before/after photos",
                "Drive logs & reports",
                "Service updates",
                "Monthly care summary"
            ]
        },
        {
            icon: <Wrench className="h-6 w-6 text-cruzo-blue" />,
            title: "Completion",
            features: [
                "Final inspection",
                "Detailed service report",
                "Vehicle return",
                "Package summary"
            ]
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold plan-title mb-4 text-cruzo-blue">
                        HOW IT WORKS
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Hassle-free car care while you're away. We handle everything from inspection to maintenance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <ProcessStep key={index} {...step}>
                            <ul className="space-y-2 text-gray-300">
                                {step.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-cruzo-blue" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </ProcessStep>
                    ))}
                </div>
            </div>

            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-cruzo-blue opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 top-20 w-64 h-64 bg-cruzo-blue opacity-10 rounded-full blur-3xl"></div>
        </section>
    );
};

export default Process;