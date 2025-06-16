import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Information",
  description:
    "Get in touch with Kousha Talebian. Email: k@ousha.me, Phone: +1 (778) 651-9569. Located in Vancouver, BC, Canada.",
  openGraph: {
    title: "Contact Kousha Talebian",
    description:
      "Get in touch with Kousha Talebian - Principal Engineer at Twilio.",
    url: "https://koushatalebian.com/contacts",
  },
  alternates: {
    canonical: "https://koushatalebian.com/contacts",
  },
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
