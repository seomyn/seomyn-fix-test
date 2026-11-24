import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juniper Lane Bakery: fresh bread and pastries",
  description: "Juniper Lane Bakery bakes fresh sourdough, bread and pastries every morning. Visit us for warm loaves, croissants and seasonal treats.",
};

export default function HomePage() {
  return (
    <main>
      <h1>Juniper Lane Bakery</h1>
      <p>A fictional neighborhood bakery used only to test automated website fixes.</p>
    </main>
  );
}
