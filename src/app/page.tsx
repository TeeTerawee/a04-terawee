import Banner from "../components/Banner";
import Card from "../components/Card";

export default function Home() {
  return (
    <main>
      <Banner />
      <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.png" />

      <Card venueName="Spark Space" imgSrc="/img/sparkspace.png" />

      <Card venueName="The Grand Table" imgSrc="/img/grandtable.png" />
    </main>
  );
}
