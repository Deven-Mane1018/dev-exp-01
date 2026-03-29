/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Work from './components/Work';
import Research from './components/Research';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Contact from './components/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative selection:bg-accent selection:text-white">
      <Cursor />
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navigation />
          
          <div id="hero">
            <Hero />
          </div>
          
          <Work />
          <Research />
          <About />
          <Capabilities />
          <Contact />
        </>
      )}
    </main>
  );
}

