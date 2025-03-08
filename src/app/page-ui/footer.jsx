"use client";

import {
  Blocks,
  CodeXml,
  CreditCard,
  Handshake,
  Scale,
  Webhook,
  FileText,
  User,
  Settings,
  HelpCircle,
} from "lucide-react";
import { Footer } from "@/components/blocks/footer";

export function FooterDemo() {
  return (
    <Footer
      className="mt-20 bg-neutral-50 dark:bg-neutral-900"
      brand={{
        name: "ResumeCraft",
        description: "Build your dream resume with ease.",
      }}
      socialLinks={[
        {
          name: "Twitter",
          href: "https://twitter.com/resumecraft",
        },
        {
          name: "Github",
          href: "https://github.com/resumecraft",
        },
        {
          name: "LinkedIn",
          href: "https://linkedin.com/company/resumecraft",
        },
      ]}
      columns={[
        {
          title: "Product",
          links: [
            {
              name: "Templates",
              Icon: FileText,
              href: "/templates",
            },
            {
              name: "Pricing",
              Icon: CreditCard,
              href: "/pricing",
            },
            {
              name: "How It Works",
              Icon: Settings,
              href: "/how-it-works",
            },
            {
              name: "API Documentation",
              Icon: CodeXml,
              href: "/docs/api",
            },
          ],
        },
        {
          title: "Resources",
          links: [
            {
              name: "Resume Tips",
              Icon: HelpCircle,
              href: "/resources/resume-tips",
            },
            {
              name: "Career Advice",
              Icon: User,
              href: "/resources/career-advice",
            },
            {
              name: "Blog",
              Icon: Blocks,
              href: "/blog",
            },
          ],
        },
        {
          title: "Legal",
          links: [
            {
              name: "Privacy Policy",
              Icon: Scale,
              href: "/legal/privacy",
            },
            {
              name: "Terms of Service",
              Icon: Handshake,
              href: "/legal/terms",
            },
          ],
        },
      ]}
      copyright="ResumeCraft © 2025"
    />
  );
}