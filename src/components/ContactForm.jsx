import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import Button from "./Button";
import { siteConfig } from "../data/siteConfig";

export default function ContactForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const product = formData.get("product") || "Not specified";
    const message = formData.get("message") || "Not specified";

    const enquiryText = [
      `Hello, I have an enquiry from ${siteConfig.name} website:`,
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Product Requirement: ${product}`,
      `Message: ${message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(enquiryText)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <MessageCircle className="w-10 h-10 text-[#25D366] mx-auto mb-3" />
        <p className="text-primary-green font-semibold text-lg mb-2">
          Enquiry sent to WhatsApp!
        </p>
        <p className="text-gray-600 text-sm">
          Your enquiry has been opened in WhatsApp. Send the message to complete
          your enquiry, or call us for urgent queries.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg border border-border-gray focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Your phone number"
            className="w-full px-4 py-3 rounded-lg border border-border-gray focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all"
          />
        </div>
      </div>
      <div>
        <label htmlFor="product" className="block text-sm font-medium text-charcoal mb-1.5">
          Product Requirement
        </label>
        <input
          type="text"
          id="product"
          name="product"
          placeholder="e.g. Garden pipes, Green net, Tadpatri"
          className="w-full px-4 py-3 rounded-lg border border-border-gray focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          placeholder="Tell us about your requirement..."
          className="w-full px-4 py-3 rounded-lg border border-border-gray focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all resize-none"
        />
      </div>
      <Button type="submit" variant="primary" className="w-full md:w-auto">
        <Send className="w-4 h-4" />
        Send Enquiry via WhatsApp
      </Button>
    </form>
  );
}
