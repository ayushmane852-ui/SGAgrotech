import { productImages } from "./productImages";

export const galleryItems = productImages.map((item, index) => ({
  id: index + 1,
  title: item.name,
  category: item.category,
  src: item.src,
  description: item.description,
}));

export const galleryCategories = [
  "All",
  "Pipes",
  "Tarpaulin",
  "Dori",
  "Nets",
  "PVC / UPVC",
  "Storage / Bags",
  "Agricultural",
  "Hardware",
];
