// components/DocumentationResources.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

export default function DocumentationResources() {
  return (
    <section className="bg-[#1b1c1e] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">
          Documentation & Resources
        </h2>
        <p className="text-lg text-gray-300 mb-2">
          Dive deeper into the technical aspects of our API, explore endpoint details, and find code examples to get started quickly.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          Our comprehensive documentation is designed to guide developers through every step of integration.
        </p>

        <a
          href="/docs" // ✅ Change this to your actual docs URL
          className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-semibold text-base px-8 py-4 rounded-full transition-colors duration-300"
        >
          View Documentation
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
