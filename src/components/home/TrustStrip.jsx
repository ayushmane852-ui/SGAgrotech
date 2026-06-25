import { StaggerContainer, StaggerItem } from "../AnimatedSection";
import { DynamicIcon } from "../DynamicIcon";
import { trustHighlights } from "../../data/whyChooseUs";

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-border-gray py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustHighlights.map((item) => (
            <StaggerItem
              key={item.title}
              className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left p-4 rounded-xl hover:bg-light-bg transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center shrink-0">
                <DynamicIcon name={item.icon} className="w-6 h-6 text-primary-green" />
              </div>
              <span className="font-semibold text-charcoal text-sm sm:text-base">
                {item.title}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
