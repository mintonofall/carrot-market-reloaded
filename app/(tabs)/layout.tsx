import TabBar from "@/components/tab-bar";

export default function TabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {children}
      <TabBar />
    </div>
  );
}
