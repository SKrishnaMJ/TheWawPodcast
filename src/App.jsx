import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Episodes from "./components/Episodes.jsx";
import Story from "./components/Hosts.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Episodes />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
