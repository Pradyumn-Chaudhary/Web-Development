import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";

function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card
          title="Card 1"
          subtitle="Subtitle 1"
          cardtext="This is the text for card 1."
        />
        <Card
          title="Card 2"
          subtitle="Subtitle 2"
          cardtext="This is the text for card 2."
        />
        <Card
          title="Card 3"
          subtitle="Subtitle 3"
          cardtext="This is the text for card 3."
        />
        <Card
          title="Card 4"
          subtitle="Subtitle 4"
          cardtext="This is the text for card 4."
        />
        <Card
          title="Card 5"
          subtitle="Subtitle 5"
          cardtext="This is the text for card 5."
        />
        <Card
          title="Card 6"
          subtitle="Subtitle 6"
          cardtext="This is the text for card 6."
        />
        <Card
          title="Card 7"
          subtitle="Subtitle 7"
          cardtext="This is the text for card 7."
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
