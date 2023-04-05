import ResultsHead from "./Results/ResultsHead";
import ResultsList from "./Results/ResultsList";

export default function MyResults() {
  return (
    <section className="onlineshop-app__results results">
      <ResultsHead/>
      <ResultsList/>
    </section>
  )
}