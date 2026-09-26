import Image from "next/image";
import Banner from "@/components/Homepage/Banner";
import Library from "@/app/Library/page";
export default function Home() {
  return (
<div>
  <Banner></Banner>
  <Library></Library>
</div>
  );
}
