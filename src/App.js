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
    location: "Nigeria",
    occupation: "Software Engineer",
    work: "ChatDesk",
    text: `"freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."`,
  },
  {
    imageUrl: "emma-bostian",
    name: "Emma Bostian",
    location: "Sweden",
    occupation: "Software Engineer",
    work: "Amazon",
    text: `"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."`,
  },
];

function App() {
  const [shawn, sarah, emma] = testimonials;
  return (
    <div className="App">
      <div className="app-container">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonial
          imageUrl={shawn.imageUrl}
          name={shawn.name}
          location={shawn.location}
          occupation={shawn.occupation}
          work={shawn.work}
          text={shawn.text}
        />
        <Testimonial
          imageUrl={sarah.imageUrl}
          name={sarah.name}
          location={sarah.location}
          occupation={sarah.occupation}
          work={sarah.work}
          text={sarah.text}
        />
        <Testimonial
          imageUrl={emma.imageUrl}
          name={emma.name}
          location={emma.location}
          occupation={emma.occupation}
          work={emma.work}
          text={emma.text}
        />
      </div>
    </div>
  );
}

export default App;
