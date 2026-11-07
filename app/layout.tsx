import type { Metadata } from "next";
import type { ReactNode } from "react";

// Disposable test site. Juniper Lane Bakery is a fictional business.
export const metadata: Metadata = {
  title: { default: "Juniper Lane Bakery", template: "%s | Juniper Lane Bakery" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
