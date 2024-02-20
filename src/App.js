import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import {
  NotFound,
  Loader,
  ScrollToTop,
  ProjectDetails,
  Navbar,
  Footer,
} from "./components";

import Contact from "./pages/Contact";
import About from "./pages/About";
import { Analytics } from "@vercel/analytics/react";
const Home = React.lazy(() => import("./pages/Home"));
const Project = React.lazy(() => import("./pages/Project"));

function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");
  return (
    <>
      <ScrollToTop />
      {isFalse || <Navbar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />}></Route>
        </Routes>
      </Suspense>

      {isFalse || <Footer />}
      <Analytics />
    </>
  );
}

export default App;
