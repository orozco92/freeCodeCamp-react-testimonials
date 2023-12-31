import "./App.css";
import Testimonial from "./components/testimonial";

const testimonials = [
  {
    imageUrl: "shawn-wang",
    name: "Shawn Wang",
    location: "Singapore",
    occupation: "Software Engineer",
    work: "Amazon",
    text: `"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."`,
  },
  {
    imageUrl: "sarah-chima",
    name: "Sarah Chima",
    location: "Singapore",
    occupation: "Software Engineer",
    work: "Amazon",
    text: `"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."`,
  },
  {
    imageUrl: "emma-bostian",
    name: "Emma Bostian",
    location: "Singapore",
    occupation: "Software Engineer",
    work: "Amazon",
    text: `"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."`,
  },
];

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonial
          imageUrl={testimonials[0].imageUrl}
          name={testimonials[0].name}
          location={testimonials[0].location}
          occupation={testimonials[0].occupation}
          work={testimonials[0].work}
          text={testimonials[0].text}
        />
      </div>
    </div>
  );
}

export default App;
