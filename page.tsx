import Image from "next/image";
import Link from "next/link";

const nav = ["Collections", "Projects", "Studio", "Journal"];

const collections = [
  { name: "Lumière Residences", tag: "Residential", img: "https://picsum.photos/seed/lum-residence/900/1200", desc: "Warm dim-to-warm technology for living spaces that shift from day to night." },
  { name: "Atelier Architectural", tag: "Architectural", img: "https://picsum.photos/seed/atelier-arch/900/1200", desc: "Precision optics and minimalist forms for galleries, hotels, and civic spaces." },
  { name: "Hue Intelligence", tag: "Smart", img: "https://picsum.photos/seed/hue-smart/900/1200", desc: "Adaptive scenes and circadian rhythm control, orchestrated from a single app." },
];

const projects = [
  { title: "Nordic Embassy Pavilion", loc: "Oslo", year: "2025", img: "https://picsum.photos/seed/nordic-pav/1200/800" },
  { title: "The Meridian Hotel", loc: "Copenhagen", year: "2024", img: "https://picsum.photos/seed/meridian-hotel/1200/800" },
  { title: "Villa Krona", loc: "Stockholm", year: "2025", img: "https://picsum.photos/seed/villa-krona/1200/800" },
  { title: "Atrium Museum Wing", loc: "Helsinki", year: "2023", img: "https://picsum.photos/seed/atrium-museum/1200/800" },
];

const principles = [
  { n: "01", t: "Light as Material", d: "We treat illumination with the same rigor as stone, timber, or steel. Every fixture is drawn, not decorated." },
  { n: "02", t: "Warmth by Default", d: "Our spectra are tuned to candlelight warmth at dusk, protecting circadian rhythm without sacrificing clarity." },
  { n: "03", t: "Invisible Technology", d: "Sensors, drivers, and controls disappear into architecture. The light is felt, the machinery is not." },
];

const stats = [
  { v: "132", l: "Years of lighting research" },
  { v: "4,800+", l: "Architectural projects lit" },
  { v: "97%", l: "Designer retention rate" },
  { v: "60s", l: "Average scene-switch latency" },
];

const journal = [
  { t: "Why 2700K is the new black", d: "The return of warm minimalism in residential specification.", img: "https://picsum.photos/seed/journal-warm/800/600" },
  { t: "Glare, quantified", d: "UGR ratings and what they actually mean for hotel lobbies.", img: "https://picsum.photos/seed/journal-glare/800/600" },
  { t: "The end of the downlight grid", d: "Layered ambient strategies for open-plan living.", img: "https://picsum.photos/seed/journal-layered/800/600" },
];

export default function Page() {
  return (
    <main className="bg-[#121110] text-[#EDE8E0] antialiased">
      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://picsum.photos/seed/philips-hero/1920/1080" alt="Warm architectural interior" fill priority className="object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/40 to-transparent" />
        </div>
        <nav className="absolute top-0 inset-x-0 flex items-center justify-between px-8 md:px-16 py-8 z-10">
          <span className="text-sm tracking-[0.35em] uppercase">Philips Lighting</span>
          <div className="hidden md:flex gap-10 text-xs tracking-[0.2em] uppercase text-[#EDE8E0]/70">
            {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-[#E8B86D] transition-colors">{n}</a>)}
          </div>
          <Link href="#contact" className="text-xs tracking-[0.2em] uppercase border border-[#E8B86D] text-[#E8B86D] px-5 py-2.5 hover:bg-[#E8B86D] hover:text-[#121110] transition-colors">Book a consult</Link>
        </nav>
        <div className="relative z-10 px-8 md:px-16 pb-24 max-w-5xl">
          <p className="text-xs tracking-[0.4em] uppercase text-[#E8B86D] mb-6">Premium lighting solutions</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.02] tracking-tight">
            Light, composed<br />like architecture.
          </h1>
          <p className="mt-8 max-w-xl text-[#EDE8E0]/70 text-lg leading-relaxed">
            Residential warmth, architectural precision, and intelligent control. One studio, three disciplines, zero compromise.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#collections" className="bg-[#E8B86D] text-[#121110] px-8 py-4 text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#EDE8E0] transition-colors">Explore collections</Link>
            <Link href="#projects" className="border border-[#EDE8E0]/30 px-8 py-4 text-xs tracking-[0.25em] uppercase hover:border-[#E8B86D] hover:text-[#E8B86D] transition-colors">View projects</Link>
          </div>
        </div>
      </section>

      {/* 2. MANIFESTO */}
      <section className="px-8 md:px-16 py-32 md:py-44">
        <div className="max-w-4xl">
          <p className="text-xs tracking-[0.4em] uppercase text-[#E8B86D] mb-8">Manifesto</p>
          <p className="text-3xl md:text-5xl font-serif leading-tight text-[#EDE8E0]">
            We believe a room is finished when the light feels inevitable. Not added, not applied, but grown from the architecture itself.
          </p>
        </div>
      </section>

      {/* 3. COLLECTIONS */}
      <section id="collections" className="px-8 md:px-16 py-24">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl md:text-6xl font-serif">Collections</h2>
          <span className="text-xs tracking-[0.3em] uppercase text-[#EDE8E0]/50 hidden md:block">Three disciplines</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((c) => (
            <article key={c.name} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1C1A18]">
                <Image src={c.img} alt={c.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase bg-[#121110]/70 backdrop-blur px-3 py-1.5">{c.tag}</span>
              </div>
              <h3 className="mt-6 text-2xl font-serif">{c.name}</h3>
              <p className="mt-3 text-sm text-[#EDE8E0]/60 leading-relaxed max-w-xs">{c.desc}</p>
              <span className="mt-4 inline-block text-xs tracking-[0.25em] uppercase text-[#E8B86D] border-b border-[#E8B86D]/40 pb-1 group-hover:border-[#E8B86D] transition-colors">Discover</span>
            </article>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PROJECT */}
      <section id="projects" className="px-8 md:px-16 py-24">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 relative aspect-[16/10] overflow-hidden">
            <Image src="https://picsum.photos/seed/featured-project/1600/1000" alt="Nordic Embassy Pavilion" fill className="object-cover" />
          </div>
          <div className="md:col-span-5 md:pl-8">
            <p className="text-xs tracking-[0.4em] uppercase text-[#E8B86D] mb-6">Featured project</p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Nordic Embassy Pavilion</h2>
            <p className="mt-6 text-[#EDE8E0]/70 leading-relaxed">
              A floating timber roof lit by 340 concealed warm-dim points. The light traces the grain of the wood without ever revealing its source.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6 text-sm">
              <div><dt className="text-[#EDE8E0]/40 uppercase tracking-widest text-[10px]">Location</dt><dd className="mt-1">Oslo, Norway</dd></div>
              <div><dt className="text-[#EDE8E0]/40 uppercase tracking-widest text-[10px]">Year</dt><dd className="mt-1">2025</dd></div>
              <div><dt className="text-[#EDE8E0]/40 uppercase tracking-widest text-[10px]">Scope</dt><dd className="mt-1">Full architectural lighting</dd></div>
              <div><dt className="text-[#EDE8E0]/40 uppercase tracking-widest text-[10px]">System</dt><dd className="mt-1">Hue Intelligence</dd></div>
            </dl>
            <Link href="#contact" className="mt-10 inline-block border border-[#EDE8E0]/30 px-8 py-4 text-xs tracking-[0.25em] uppercase hover:border-[#E8B86D] hover:text-[#E8B86D] transition-colors">Read case study</Link>
          </div>
        </div>
      </section>

      {/* 5. PRINCIPLES */}
      <section className="px-8 md:px-16 py-24 bg-[#1C1A18]">
        <h2 className="text-4xl md:text-5xl font-serif mb-16">How we work</h2>
        <div className="grid md:grid-cols-3 gap-px bg-[#EDE8E0]/10">
          {principles.map((p) => (
            <div key={p.n} className="bg-[#1C1A18] p-10 md:p-14">
              <span className="text-[#E8B86D] text-sm tracking-[0.3em]">{p.n}</span>
              <h3 className="mt-6 text-2xl font-serif">{p.t}</h3>
              <p className="mt-4 text-sm text-[#EDE8E0]/60 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PROJECT INDEX */}
      <section className="px-8 md:px-16 py-24">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl md:text-6xl font-serif">Selected work</h2>
          <span className="text-xs tracking-[0.3em] uppercase text-[#EDE8E0]/50 hidden md:block">2023 to 2025</span>
        </div>
        <div className="divide-y divide-[#EDE8E0]/10 border-y border-[#EDE8E0]/10">
          {projects.map((p) => (
            <a key={p.title} href="#contact" className="group grid md:grid-cols-12 gap-4 items-center py-8 hover:bg-[#1C1A18] transition-colors px-2 md:px-4">
              <span className="md:col-span-5 text-2xl md:text-3xl font-serif group-hover:text-[#E8B86D] transition-colors">{p.title}</span>
              <span className="md:col-span-3 text-sm text-[#EDE8E0]/50">{p.loc}</span>
              <span className="md:col-span-2 text-sm text-[#EDE8E0]/50">{p.year}</span>
              <span className="md:col-span-2 text-right text-xs tracking-[0.25em] uppercase text-[#E8B86D] opacity-0 group-hover:opacity-100 transition-opacity">View</span>
            </a>
          ))}
        </div>
      </section>

      {/* 7. STATS */}
      <section className="px-8 md:px-16 py-24 bg-[#E8B86D] text-[#121110]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="text-5xl md:text-6xl font-serif">{s.v}</div>
              <div className="mt-3 text-xs tracking-[0.2em] uppercase opacity-70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. JOURNAL */}
      <section id="journal" className="px-8 md:px-16 py-24">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl md:text-6xl font-serif">Journal</h2>
          <span className="text-xs tracking-[0.3em] uppercase text-[#EDE8E0]/50 hidden md:block">Notes from the studio</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {journal.map((j) => (
            <article key={j.t} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1C1A18]">
                <Image src={j.img} alt={j.t} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="mt-6 text-xl font-serif group-hover:text-[#E8B86D] transition-colors">{j.t}</h3>
              <p className="mt-2 text-sm text-[#EDE8E0]/60">{j.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 9. CTA */}
      <section id="contact" className="relative px-8 md:px-16 py-40 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://picsum.photos/seed/cta-light/1920/800" alt="" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#121110] via-transparent to-[#121110]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-[#E8B86D] mb-8">Begin a project</p>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">Tell us about the space. We will tell you how it should feel.</h2>
          <Link href="mailto:studio@philips-lighting.example" className="mt-12 inline-block bg-[#E8B86D] text-[#121110] px-12 py-5 text-xs tracking-[0.3em] uppercase font-medium hover:bg-[#EDE8E0] transition-colors">Book a lighting consult</Link>
          <p className="mt-8 text-xs text-[#EDE8E0]/40 tracking-widest uppercase">Response within one business day</p>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="px-8 md:px-16 py-16 border-t border-[#EDE8E0]/10 flex flex-col md:flex-row justify-between gap-10 text-sm text-[#EDE8E0]/50">
        <div>
          <div className="text-[#EDE8E0] tracking-[0.35em] uppercase text-sm mb-4">Philips Lighting</div>
          <p className="max-w-xs leading-relaxed">Premium lighting solutions for residential, architectural, and smart environments.</p>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#EDE8E0]/30">Studio</span>
            <a href="#collections" className="hover:text-[#E8B86D] transition-colors">Collections</a>
            <a href="#projects" className="hover:text-[#E8B86D] transition-colors">Projects</a>
            <a href="#journal" className="hover:text-[#E8B86D] transition-colors">Journal</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#EDE8E0]/30">Contact</span>
            <a href="mailto:studio@philips-lighting.example" className="hover:text-[#E8B86D] transition-colors">studio@philips-lighting.example</a>
            <span>Amsterdam, Netherlands</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
