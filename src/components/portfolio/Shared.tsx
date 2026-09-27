import type { ReactNode } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Utensils,
  Sparkles,
  Users,
  Database,
  ScanFace,
  Hand,
  Volume2,
  Mic,
  MessageSquare,
  Image,
  Timer,
  Code2,
  Film,
  CalendarDays,
  GraduationCap,
  Trophy,
  BookOpen,
  Layers,
  Braces,
  Server,
  Atom,
  Wind,
  Table2,
  Workflow,
  Binary,
  Zap,
  BarChart3,
  AppWindow,
  GitFork,
  Link,
  Mail,
  Download,
} from "lucide-react";
const icons = {
  brain: BrainCircuit,
  chart: ChartNoAxesCombined,
  restaurant: Utensils,
  sparkles: Sparkles,
  users: Users,
  database: Database,
  scan: ScanFace,
  hand: Hand,
  volume: Volume2,
  mic: Mic,
  message: MessageSquare,
  image: Image,
  timer: Timer,
  code: Code2,
  film: Film,
  calendar: CalendarDays,
  graduation: GraduationCap,
  trophy: Trophy,
  book: BookOpen,
  layers: Layers,
  braces: Braces,
  server: Server,
  atom: Atom,
  wind: Wind,
  table: Table2,
  workflow: Workflow,
  binary: Binary,
  zap: Zap,
  bars: BarChart3,
  app: AppWindow,
  github: GitFork,
  linkedin: Link,
  mail: Mail,
  download: Download,
};
export function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const Component = icons[name as keyof typeof icons] || Code2;
  return <Component size={size} strokeWidth={1.6} aria-hidden="true" />;
}
export function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="section-heading">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
export function Tags({ values }: { values: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {values.map((value) => (
        <li key={value}>{value}</li>
      ))}
    </ul>
  );
}
export function ExternalLink({
  href,
  children,
  className = "",
  icon,
  download = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  icon?: string;
  download?: boolean;
}) {
  if (!href)
    return (
      <span
        className={`unavailable ${className}`}
        aria-disabled="true"
        title="Link not added yet"
      >
        {icon && <Icon name={icon} size={17} />}
        {children}
        <span className="soon">Soon</span>
      </span>
    );
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download || undefined}
    >
      {icon && <Icon name={icon} size={17} />}
      {children}
      {!download && <ArrowUpRight size={16} aria-hidden="true" />}
    </a>
  );
}
