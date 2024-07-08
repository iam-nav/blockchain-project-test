import Header from "./component/header/header";
import HeroSection from "./component/heroSection/heroSection";
import TableContainer from "./component/table/table";
import SwapTokens from "./component/swapTokens/swapTokens";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TableContainer />
      <SwapTokens />
    </main>
  );
}
