import { Facebook, Instagram, LinkedIn } from "@/ui/misc/SocialIcons";

type socialIcon = {
  id: number;
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string | undefined }>;
};

export const socials: socialIcon[] = [
  {
    id: 1,
    label: "Facebook",
    href: "https://facebook.com/example",
    icon: Facebook,
  },
  {
    id: 2,
    label: "Instagram",
    href: "https://instagram.com/example",
    icon: Instagram,
  },
  {
    id: 3,
    label: "LinkedIn",
    href: "https://linkedin.com/example",
    icon: LinkedIn,
  },
];
