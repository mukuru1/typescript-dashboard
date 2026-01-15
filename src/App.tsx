import Header from "./components/header";
import Hero from "./components/hero";
import HowItWorks from "./components/cards";
import Expense from "./components/newsection/expense";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <Expense />
    </>
  );
}
