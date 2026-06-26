import { siteConfig } from "./siteConfig";

const imageModules = import.meta.glob("../../Images/*.{png,jpg,jpeg,webp}", {
  eager: true,
});

function parseImageEntry(path, module) {
  const fileName = path.split("/").pop() || path;
  const name = fileName.replace(/\.[^.]+$/, "");
  return {
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    name,
    src: module.default,
  };
}

const allImages = Object.entries(imageModules).map(([path, module]) =>
  parseImageEntry(path, module)
);

export const logoImage = allImages.find((item) => item.name.toLowerCase() === "logo");
export const farmerImage = allImages.find((item) => item.name.toLowerCase() === "farmer");

const imageDetails = {
  "Akash flex (Special)": {
    category: "Pipes",
    description:
      "Akash Flex (Special) is a premium flexible garden pipe designed for smooth water flow and daily utility use. It is suitable for home gardens, nurseries, and small farm watering needs with reliable performance.",
    applications: ["Garden watering", "Farm irrigation", "Home utility", "Nursery supply"],
  },
  "Black (Yellow line) Pipe": {
    category: "Pipes",
    description:
      "Black pipe with yellow line marking offers clear identification and durable flexible water supply. Widely used for garden, farm, and household piping where strength and visibility are needed.",
    applications: ["Garden pipes", "Farm water lines", "Household utility", "Shop retail supply"],
  },
  "Black Pipe": {
    category: "Pipes",
    description:
      "Standard black flexible pipe for everyday water supply and utility applications. A practical and dependable option for gardens, farms, and general hardware requirements.",
    applications: ["Water supply", "Garden use", "Farm irrigation", "General utility"],
  },
  "Braided Pipe": {
    category: "Pipes",
    description:
      "Braided pipe provides extra reinforcement for improved durability and pressure handling. Ideal for customers who need a stronger flexible pipe for regular or heavy-duty use.",
    applications: ["Heavy-duty watering", "Farm supply", "Shop retail", "Utility connections"],
  },
  "Level Tube pipe": {
    category: "Pipes",
    description:
      "Level tube pipe is used for water level applications and flexible utility connections. A useful pipe type for plumbing, tank connections, and agricultural setups.",
    applications: ["Water level use", "Tank connections", "Plumbing utility", "Farm setups"],
  },
  "Milky White Pipe": {
    category: "Pipes",
    description:
      "Milky white flexible pipe offers clean appearance and reliable water flow for garden and utility use. Suitable for home gardens, shops, and everyday supply needs.",
    applications: ["Garden watering", "Home utility", "Retail supply", "Nursery use"],
  },
  "Section pipe (All Size)": {
    category: "Pipes",
    description:
      "Section pipes available in all sizes for flexible water supply and piping requirements. Contact us for size availability and bulk supply for shops and contractors.",
    applications: ["All-size piping", "Farm irrigation", "Shop supply", "Bulk orders"],
  },
  "UPVC Pipe": {
    category: "PVC / UPVC",
    description:
      "Durable UPVC pipes for water supply, plumbing, and utility connections. Suitable for construction, agricultural water systems, and long-lasting piping needs.",
    applications: ["Water supply", "Plumbing", "Construction", "Farm water systems"],
  },
  "Connectors": {
    category: "PVC / UPVC",
    description:
      "Pipe connectors and joining accessories for secure water line connections. Essential hardware items for plumbing, pipe installations, and utility fittings.",
    applications: ["Pipe joining", "Plumbing fittings", "Water line setup", "Hardware shops"],
  },
  "Polo Cock": {
    category: "PVC / UPVC",
    description:
      "Polo cock is a practical water control valve fitting for pipe and tank connections. Used in plumbing and daily water line management for easy flow control.",
    applications: ["Water control", "Tank connections", "Plumbing", "Pipe installations"],
  },
  "Red Cock": {
    category: "PVC / UPVC",
    description:
      "Red cock valve fitting for reliable water flow control in pipe and plumbing systems. A commonly used hardware item for tanks, pipes, and utility connections.",
    applications: ["Valve control", "Plumbing fittings", "Tank lines", "Hardware supply"],
  },
  "Colour Net": {
    category: "Nets",
    description:
      "Coloured net for shade, covering, and utility protection applications. Available for agriculture, gardening, and general covering needs with multiple colour options.",
    applications: ["Shade covering", "Crop protection", "Utility netting", "Garden use"],
  },
  "Green Net": {
    category: "Nets",
    description:
      "Green shade net helps protect crops and plants from excess heat and sunlight. Widely used in nurseries, greenhouses, and farming for effective shade coverage.",
    applications: ["Crop protection", "Nursery shade", "Greenhouse use", "Farm covering"],
  },
  "Murghas Bag(3 , 5 ton)": {
    category: "Storage / Bags",
    description:
      "Murghas bags available in 3 ton and 5 ton capacity for bulk storage and material handling. Practical solution for shops, warehouses, and transport of goods.",
    applications: ["Bulk storage", "Material handling", "Transport", "Warehouse use"],
  },
  "Murghas Bag Inner": {
    category: "Storage / Bags",
    description:
      "Inner bag material for murghas bags and packaging applications. Used as lining or inner storage layer for goods handling and bulk packaging needs.",
    applications: ["Inner lining", "Packaging", "Storage support", "Bulk handling"],
  },
  "Sunpro Murghas Bag": {
    category: "Storage / Bags",
    description:
      "Sunpro murghas bags are trusted for storage, handling, and transport of agricultural and hardware materials. Suitable for shops and bulk buyers.",
    applications: ["Storage", "Transport", "Material handling", "Bulk supply"],
  },
  "Culture Powder": {
    category: "Agricultural",
    description:
      "Quality culture powder supplied for relevant agricultural and farming-related requirements. Contact us for availability, packaging, and bulk supply details.",
    applications: ["Agricultural use", "Farming support", "Bulk supply", "Retail enquiry"],
  },
  "Tadpatri (All Size)": {
    category: "Tarpaulin",
    description:
      "Tadpatri sheets available in all sizes for covering goods, vehicles, and outdoor storage. A dependable protection material for shops, farmers, and contractors.",
    applications: ["Goods covering", "Vehicle protection", "Outdoor storage", "Shop supply"],
  },
  "Tarpaulin Roll": {
    category: "Tarpaulin",
    description:
      "Tarpaulin rolls for flexible covering and protection applications. Suitable for cutting to required size for storage, shelter, and weather protection needs.",
    applications: ["Roll covering", "Custom sizing", "Storage protection", "Outdoor shelter"],
  },
  "Nylon Dori": {
    category: "Dori",
    description:
      "Strong nylon dori for tying, bundling, packaging, and general utility work. A widely used material across farming, shops, and daily supply requirements.",
    applications: ["Tying and bundling", "Packaging", "Shop utility", "Farm use"],
  },
  "Reshim Rope": {
    category: "Dori",
    description:
      "Reshim rope for packaging, tying, and everyday utility requirements. Available for retail and bulk supply as per customer needs.",
    applications: ["Packaging", "General tying", "Retail supply", "Bulk orders"],
  },
  Halwa: {
    category: "Hardware",
    description:
      "Halwa product supplied for relevant hardware and utility requirements. Contact S.G. Agrotech for availability, specifications, and bulk order enquiries.",
    applications: ["Hardware supply", "Utility use", "Shop retail", "Bulk enquiry"],
  },
  "Black Reshim": {
    category: "Dori",
    description:
      "Black reshim material for tying, packaging, and general utility work. A practical supply option for shops, farms, and everyday bundling needs.",
    applications: ["Tying and bundling", "Packaging", "Shop utility", "Farm use"],
  },
  "Colored LD Pipe": {
    category: "Pipes",
    description:
      "Colored LD pipe for flexible garden and utility water supply. Available in color options for easy identification and everyday watering applications.",
    applications: ["Garden watering", "Home utility", "Farm irrigation", "Retail supply"],
  },
  "Transparent LD Pipe": {
    category: "Pipes",
    description:
      "Transparent LD pipe allows visible water flow and is suitable for garden, utility, and general piping needs where clarity is preferred.",
    applications: ["Garden use", "Visible flow piping", "Home utility", "Shop supply"],
  },
  "Zebra Pipe": {
    category: "Pipes",
    description:
      "Zebra pipe is a flexible garden and utility pipe option for reliable water supply. Suitable for home gardens, farms, and hardware retail requirements.",
    applications: ["Garden watering", "Farm supply", "Utility connections", "Retail enquiry"],
  },
  "Drip Cock": {
    category: "PVC / UPVC",
    description:
      "Drip cock valve fitting for drip irrigation systems and controlled water flow. Useful for farming, gardening, and pipe installation setups.",
    applications: ["Drip irrigation", "Water control", "Farm setups", "Garden piping"],
  },
  "End Plugs": {
    category: "PVC / UPVC",
    description:
      "End plugs for sealing and closing pipe ends in plumbing and utility installations. Essential hardware accessories for pipe finishing and maintenance.",
    applications: ["Pipe sealing", "Plumbing fittings", "Pipe maintenance", "Hardware shops"],
  },
  "Nozzle Bib cock": {
    category: "PVC / UPVC",
    description:
      "Nozzle bib cock fitting for tap connections and water outlet control. Suitable for household, garden, and utility plumbing applications.",
    applications: ["Tap connections", "Water outlets", "Plumbing", "Garden taps"],
  },
  "Sink Cock": {
    category: "PVC / UPVC",
    description:
      "Sink cock fitting for kitchen, wash basin, and utility sink water connections. A practical plumbing accessory for home and shop supply.",
    applications: ["Kitchen sinks", "Wash basins", "Plumbing fittings", "Home utility"],
  },
  "Zebra Cock": {
    category: "PVC / UPVC",
    description:
      "Zebra cock valve fitting for reliable water flow control in pipe and tank connections. Commonly used in plumbing and daily water line management.",
    applications: ["Water control", "Tank connections", "Plumbing", "Pipe installations"],
  },
  "Nylon Lachhi": {
    category: "Dori",
    description:
      "Nylon lachhi for tying, bundling, and general utility applications. A strong and practical material for shops, farms, and packaging needs.",
    applications: ["Tying and bundling", "Packaging", "Shop utility", "Farm use"],
  },
  "Nylon Line Dori": {
    category: "Dori",
    description:
      "Nylon line dori with line marking for tying, packaging, and everyday utility work. Suitable for retail and bulk supply requirements.",
    applications: ["General tying", "Packaging", "Retail supply", "Bulk orders"],
  },
  "Safety Net": {
    category: "Nets",
    description:
      "Safety nets for construction sites, balconies, and protection fencing. A trusted option for safety and boundary protection requirements.",
    applications: ["Construction safety", "Balcony protection", "Boundary fencing", "Safety covering"],
  },
  "Service Wire": {
    category: "Hardware",
    description:
      "Service wire for electrical and utility applications. Supplied for relevant hardware, shop, and contractor requirements.",
    applications: ["Electrical utility", "Hardware supply", "Shop retail", "Contractor use"],
  },
};

const preferredOrder = [
  "Akash flex (Special)",
  "Black (Yellow line) Pipe",
  "Black Pipe",
  "Braided Pipe",
  "Colored LD Pipe",
  "Transparent LD Pipe",
  "Zebra Pipe",
  "Level Tube pipe",
  "Milky White Pipe",
  "Section pipe (All Size)",
  "UPVC Pipe",
  "Connectors",
  "End Plugs",
  "Polo Cock",
  "Red Cock",
  "Drip Cock",
  "Nozzle Bib cock",
  "Sink Cock",
  "Zebra Cock",
  "Colour Net",
  "Green Net",
  "Safety Net",
  "Murghas Bag(3 , 5 ton)",
  "Murghas Bag Inner",
  "Sunpro Murghas Bag",
  "Culture Powder",
  "Tadpatri (All Size)",
  "Tarpaulin Roll",
  "Nylon Dori",
  "Nylon Lachhi",
  "Nylon Line Dori",
  "Black Reshim",
  "Reshim Rope",
  "Service Wire",
  "Halwa",
];

const productImageEntries = allImages
  .filter((item) => {
    const lowerName = item.name.toLowerCase();
    return lowerName !== "logo" && lowerName !== "farmer";
  })
  .map((item) => ({
    ...item,
    ...(imageDetails[item.name] || {
      category: "Hardware",
      description: `${item.name} supplied by ${siteConfig.name}. Contact us for availability, rates, and bulk supply enquiries.`,
      applications: ["Retail supply", "Bulk orders", "Shop enquiry", "General use"],
    }),
  }));

const orderedImages = preferredOrder
  .map((name) => productImageEntries.find((item) => item.name === name))
  .filter(Boolean);

const remainingImages = productImageEntries.filter(
  (item) => !orderedImages.some((ordered) => ordered.id === item.id)
);

export const productImages = [...orderedImages, ...remainingImages];

export const heroProductImages = productImages.slice(0, 6);
