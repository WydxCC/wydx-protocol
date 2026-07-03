import AssetCard from "@/components/AssetCard";
import NFTCard from "@/components/NFTCard";

export default function Dashboard() {

  return (

    <main>

      <h1>Wydx Dashboard</h1>

      <AssetCard />

      <NFTCard rarity="Epic" />

    </main>

  );

}
