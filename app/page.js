"use client";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState("web");

  const webPlans = [
    {
      name: "Basic",
      price: { ZAR: "R5,500", SZL: "SZL 3,750" },
      desc: "An affordable, high-quality online presence for small businesses, startups, or personal brands. Perfect for showcasing your services or portfolio.",
      features: [
        "Up to 5 Fully Designed Pages",
        "Responsive & Mobile-Friendly Layout",
        "Optimized Navigation & User Experience",
        "Contact Form with Email Notifications",
        "Basic SEO Setup (Meta Tags, Alt Text)",
        "Secure Hosting & SSL Setup Guidance",
        "Performance-Optimized Static Website (No Database)",
        "1 Month Complimentary Support & Bug Fixes",
      ],
    },
    {
      name: "Pro",
      price: { ZAR: "R12,000", SZL: "SZL 9,000" },
      desc: "A professional-grade business website with content management, blog functionality, and dynamic data capabilities.",
      features: [
        "5–10 Custom-Designed Pages",
        "CMS Integration (WordPress, Strapi, etc.)",
        "Integrated Blog & Social Media Feeds",
        "Advanced SEO (Schema Markup, Keyword Optimization)",
        "Custom Backend with API Endpoints",
        "Dynamic Forms with Validation & Database Storage",
        "Google Analytics & Performance Tracking",
        "3 Months Priority Support & Content Updates",
      ],
    },
    {
      name: "Enterprise",
      price: { ZAR: "R30,000+", SZL: "SZL 24,000+" },
      desc: "Full-scale, tailor-made web applications with advanced integrations for corporate and enterprise-level needs.",
      features: [
        "Unlimited Pages & Features",
        "Custom API Development (REST & GraphQL)",
        "Advanced Database Design (PostgreSQL, MongoDB)",
        "E-commerce Functionality & Payment Gateways",
        "Role-Based Access Control & User Management",
        "Integration with External APIs (ERP, CRM, etc.)",
        "High-Performance Caching & Load Balancing",
        "12 Months Premium Support & Maintenance Plan",
      ],
    },
  ];

  const mobilePlans = [
    {
      name: "Basic",
      price: { ZAR: "R8,000", SZL: "SZL 6,000" },
      desc: "A simple yet effective mobile application to get your business or idea into customers’ hands quickly.",
      features: [
        "Up to 3 Core Screens",
        "iOS or Android (Single Platform)",
        "Clean & User-Friendly UI/UX",
        "Static Content & Offline Availability",
        "Basic Push Notifications",
        "App Store / Google Play Deployment Support",
        "1 Month Complimentary Support",
      ],
    },
    {
      name: "Pro",
      price: { ZAR: "R18,000", SZL: "SZL 15,000" },
      desc: "Cross-platform apps with interactive features, backend integration, and analytics for business growth.",
      features: [
        "Up to 7 Custom-Designed Screens",
        "Cross-Platform (iOS & Android) with Single Codebase",
        "Tailored UI/UX with Brand Integration",
        "Real-Time Database Integration (Firebase, Supabase, etc)",
        "API Integration for Dynamic Content",
        "User Authentication & Secure Login",
        "Push Notifications with Segmentation",
        "In-App Analytics & Reporting",
        "3 Months Priority Support",
      ],
    },
    {
      name: "Enterprise",
      price: { ZAR: "R50,000+", SZL: "SZL 42,000+" },
      desc: "Feature-rich, enterprise-level mobile applications built for scalability, performance, and security.",
      features: [
        "Unlimited Screens & Advanced Features",
        "Cross-Platform with Native Performance Optimization",
        "Custom UI/UX with Complex Animations",
        "Advanced Database & API Development",
        "Payment Gateway & Subscription Management",
        "Role-Based Access & Multi-Tenant Architecture",
        "Integration with ERP, CRM, and Third-Party Services",
        "End-to-End Security (Encryption, Compliance)",
        "12 Months Premium Support & Maintenance",
      ],
    },
  ];

  const plans = category === "web" ? webPlans : mobilePlans;

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
        {category === "web"
          ? "Web Development Pricing"
          : "Mobile App Development Pricing"}
      </h1>

      {/* Toggle Switch */}
      <div className="flex justify-center mb-10">
        <div className="bg-gray-200 rounded-full flex items-center p-1 shadow-inner">
          <button
            onClick={() => setCategory("web")}
            className={`px-6 py-2 rounded-full transition ${category === "web"
              ? "bg-blue-600 text-white shadow-lg"
              : "text-gray-700 hover:bg-gray-300"
              }`}
          >
            Web
          </button>
          <button
            onClick={() => setCategory("mobile")}
            className={`px-6 py-2 rounded-full transition ${category === "mobile"
              ? "bg-blue-600 text-white shadow-lg"
              : "text-gray-700 hover:bg-gray-300"
              }`}
          >
            Mobile
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl shadow-xl p-8 flex flex-col items-center border transition transform hover:-translate-y-2 hover:shadow-2xl ${plan.name === "Pro"
              ? "border-blue-600 bg-gradient-to-b from-blue-50 to-white"
              : "border-gray-200 bg-white"
              }`}
          >
            {plan.name === "Pro" && (
              <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-2xl rounded-tr-2xl">
                Popular
              </span>
            )}
            <h2 className="text-2xl font-semibold text-gray-800">{plan.name}</h2>
            <p className="mt-2 text-gray-500 text-center">{plan.desc}</p>
            <p className="mt-6 text-3xl font-bold text-gray-900">
              {plan.price.ZAR} <span className="text-base font-medium text-gray-500">/ {plan.price.SZL}</span>
            </p>
            <ul className="mt-6 space-y-3 text-gray-700 w-full">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mr-2">✔</span> {feature}
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
