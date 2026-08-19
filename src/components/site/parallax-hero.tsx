// ParallaxHero: mouse-tracking animation removed — it interfered with mega menu navigation.
// The component now simply renders children without transformation.
export function ParallaxHero({ children }: { children: React.ReactNode }) {
  return <div className="w-full">{children}</div>;
}
