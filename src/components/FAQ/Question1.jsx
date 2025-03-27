import { useState } from "react";

export default function Question1() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer event planning, decorations, catering, and venue management.",
    },
    {
      question: "How can I book an event?",
      answer:
        "You can book an event by contacting us through our website or calling our support team.",
    },
    {
      question: "Do you provide customized event themes?",
      answer:
        "Yes! We specialize in personalized themes tailored to your needs.",
    },
    {
      question: "What are your pricing packages?",
      answer:
        "Our pricing varies based on the event size and services required. Contact us for a quote.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between w-full text-left text-lg font-semibold"
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
