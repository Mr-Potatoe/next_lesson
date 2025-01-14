import Navigation from "@/components/about/navigation";

export default function Home() {
  return (
    <>
    <Navigation />
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center gap-4">
        <p>Next.js + Vercel + Geist</p>
      </div>
    </div>
    </>
  );
}
