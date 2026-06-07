"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import TwitterXIcon from "./ui/twitter-x-icon";
import GithubIcon from "./ui/github-icon";
import InstagramIcon from "./ui/instagram-icon";
import SunIcon from "./ui/brightness-down-icon";
import MoonIcon from "./ui/moon-icon";
import HomeIcon from "./ui/home-icon";
import { Separator } from "@/components/ui/separator";
import type { AnimatedIconProps, AnimatedIconHandle } from "./ui/types";

// ─── Types ────────────────────────────────────────────────────────────────────

type IconComponent = React.ForwardRefExoticComponent<
  AnimatedIconProps & React.RefAttributes<AnimatedIconHandle>
>;

interface BaseDockItemProps {
  icon: IconComponent;
  label: string;
  isAnimated?: boolean;
}

interface DockLinkProps extends BaseDockItemProps {
  href: string;
}

interface DockButtonProps extends BaseDockItemProps {
  onClick: () => void;
}

// ─── Social items ─────────────────────────────────────────────────────────────

const socialItems: DockLinkProps[] = [
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/shauray_dhingraa" },
  { icon: GithubIcon,    label: "GitHub",    href: "https://github.com/Shauray018" },
  { icon: TwitterXIcon,  label: "Twitter/X", href: "https://x.com/Shauray_Dhingra" },
];

// ─── Shared tooltip + icon shell ──────────────────────────────────────────────

interface IconShellProps {
  icon: IconComponent;
  label: string;
  isAnimated: boolean;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const IconShell = React.forwardRef<AnimatedIconHandle, IconShellProps>(
  ({ icon: Icon, label, isHovered, onMouseEnter, onMouseLeave }, ref) => (
    <>
      <span className="sr-only">{label}</span>
      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Icon
          ref={ref}
          size={28}
          className="text-neutral-700 dark:text-neutral-200"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? -50 : -40 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none absolute rounded-lg bg-neutral-900/90 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white shadow-xl dark:bg-neutral-100/90 dark:text-neutral-900"
      >
        {label}
      </motion.div>
    </>
  )
);
IconShell.displayName = "IconShell";

// ─── Shared animation hook ────────────────────────────────────────────────────

function useDockAnimation(isAnimated: boolean) {
  const iconRef = useRef<AnimatedIconHandle>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (isAnimated) iconRef.current?.startAnimation();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (isAnimated) iconRef.current?.stopAnimation();
  };

  React.useEffect(() => {
    if (!isAnimated) iconRef.current?.stopAnimation();
  }, [isAnimated]);

  return { iconRef, isHovered, handleMouseEnter, handleMouseLeave };
}

// ─── DockLink ─────────────────────────────────────────────────────────────────

const DockLink = ({ icon, label, href, isAnimated = true }: DockLinkProps) => {
  const { iconRef, isHovered, handleMouseEnter, handleMouseLeave } =
    useDockAnimation(isAnimated);

  return (
    <motion.a
      layout
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="relative flex items-center justify-center"
      whileHover={{ scale: 1.2, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <IconShell
        ref={iconRef}
        icon={icon}
        label={label}
        isAnimated={isAnimated}
        isHovered={isHovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </motion.a>
  );
};

// ─── DockButton ───────────────────────────────────────────────────────────────

const DockButton = ({ icon, label, onClick, isAnimated = true }: DockButtonProps) => {
  const { iconRef, isHovered, handleMouseEnter, handleMouseLeave } =
    useDockAnimation(isAnimated);

  return (
    <motion.button
      layout
      type="button"
      aria-label={label}
      onClick={onClick}
      className="relative flex items-center justify-center"
      whileHover={{ scale: 1.2, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <IconShell
        ref={iconRef}
        icon={icon}
        label={label}
        isAnimated={isAnimated}
        isHovered={isHovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </motion.button>
  );
};

// ─── DockSeparator ────────────────────────────────────────────────────────────

const DockSeparator = () => (
  <div className="flex items-center self-stretch px-1">
    <Separator
      orientation="vertical"
      className="h-8 bg-neutral-200 dark:bg-neutral-700"
    />
  </div>
);

// ─── Dock ─────────────────────────────────────────────────────────────────────

interface DockProps {
  isAnimated?: boolean;
}

const Dock = ({ isAnimated = true }: DockProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    // Removed the h-[400px] centering wrapper — layout handles positioning now
    <motion.div
      layout
      className="flex items-end gap-2 rounded-2xl border border-neutral-200  bg-zinc-100 p-3 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        paddingLeft:  isHovered ? 50 : 12,
        paddingRight: isHovered ? 50 : 12,
        gap:          isHovered ? 24 :  8,
      }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    >
      <DockLink icon={HomeIcon} label="Home" href="/" isAnimated={isAnimated} />
      <DockSeparator />
      {socialItems.map((item) => (
        <DockLink
          key={item.label}
          icon={item.icon}
          label={item.label}
          href={item.href}
          isAnimated={isAnimated}
        />
      ))}
      <DockSeparator />
      <DockButton
        icon={isDark ? SunIcon : MoonIcon}
        label={isDark ? "Light Mode" : "Dark Mode"}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        isAnimated={isAnimated}
      />
    </motion.div>
  );
};

export default Dock;