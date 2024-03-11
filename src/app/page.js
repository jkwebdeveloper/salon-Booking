import dynamic from "next/dynamic";
const Home = dynamic(() => import("@/components/Home"));

export default function Page() {
  return (
    <div className="xl:space-y-11 space-y-6">
      <Home />
    </div>
  );
}
