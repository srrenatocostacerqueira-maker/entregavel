import { useState } from "react";
import { Ambient } from "./components/Ambient";
import { Nav } from "./components/Nav";
import { Opening } from "./components/Opening";
import { DaysList } from "./components/DaysList";
import { BookReader } from "./components/reader/BookReader";
import { Thumbnails } from "./components/Thumbnails";
import { Footer } from "./components/Footer";

export default function App() {
  const [jump, setJump] = useState({ page: 0, n: 0 });
  const openDay = (page: number) => setJump((j) => ({ page, n: j.n + 1 }));

  return (
    <div className="grain relative min-h-screen overflow-x-clip">
      <Ambient />
      <Nav />
      <main>
        <Opening />
        <DaysList onOpen={openDay} />
        <BookReader jump={jump} />
        <Thumbnails />
      </main>
      <Footer />
    </div>
  );
}
