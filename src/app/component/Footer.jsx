
export default function Footer() {
  const centres = [
    { name: "Kapurbawdi", slug: "kapurbawdi" },
    { name: "Majiwada", slug: "majiwada" },
    { name: "Highland Dhokali", slug: "highland-dhokali" },
    { name: "Lodha Amara", slug: "lodha-amara" },
    { name: "Kasheli", slug: "kasheli" },
    { name: "Gokul Nagar", slug: "gokul-nagar" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Results", href: "/results" },
    { label: "Blog", href: "/blog" },
    { label: "Students Hub", href: "/students-hub" },
    { label: "Contact Us", href: "/contact" },
  ];

  const courses = [
    { label: "Foundation Class 7–10", href: "/courses#foundation" },
    { label: "11th & 12th Science", href: "/courses#hsc" },
    { label: "IIT JEE Mains & Advanced", href: "/courses#jee" },
    { label: "NEET UG", href: "/courses#neet" },
    { label: "MHT-CET", href: "/courses#mhtcet" },
    { label: "Olympiad Preparation", href: "/courses#olympiad" },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 overflow-hidden text-white">

      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">

          
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/25 text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              🎉 Admissions Open — 2026–27
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold leading-snug mb-3">
              Start Your Child's <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-600 bg-clip-text text-transparent">
                Success Story
              </span>{" "}
              Today
            </h2>

            <p className="text-gray-400 text-sm max-w-md">
              Limited seats across all 6 centres. Book a free demo class — no commitment, no pressure.
            </p>
          </div>

         
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="relative overflow-hidden bg-gradient-to-br from-amber-400 to-amber-600 text-white font-bold px-7 py-4 rounded-full shadow-lg shadow-amber-500/20 hover:scale-105 transition"
            >
              <span className="relative z-10">📅 Book Free Demo Class</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition" />
            </a>

            <a
              href="https://wa.me/919136332019"
              className="flex items-center justify-center gap-2 bg-green-500/10 border border-green-400/30 text-green-300 font-bold px-7 py-4 rounded-full hover:bg-green-500/20 transition"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">

          
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-amber-500/20">
                S
              </div>

              <div>
                <div className="font-bold text-lg">Saraswati Educare</div>
                <div className="text-amber-400 text-xs">
                  Thane's Premier Coaching Institute
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Saraswati Educare has been building toppers in Thane since 2002.
              Six coaching centres. IITian faculty. 10,000+ students coached.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {[
                { val: "24+", label: "Years" },
                { val: "6", label: "Centres" },
                { val: "10K+", label: "Students" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl py-3 text-center"
                >
                  <div className="text-amber-400 font-bold text-xl">
                    {s.val}
                  </div>
                  <div className="text-gray-500 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-widest text-gray-500 mb-4 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <a className="flex items-center gap-2 text-gray-400 text-sm hover:text-amber-400 transition" href={l.href}>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-widest text-gray-500 mb-4 uppercase">
              Our Courses
            </h4>
            <ul className="space-y-3">
              {courses.map((l, i) => (
                <li key={i}>
                  <a className="flex items-center gap-2 text-gray-400 text-sm hover:text-amber-400 transition" href={l.href}>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-widest text-gray-500 mb-4 uppercase">
              Contact & Hours
            </h4>

            <div className="space-y-3">

              <a href="tel:+919136332019" className="flex gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                📞 <div>
                  <div className="text-xs text-gray-500">Call</div>
                  <div className="text-sm text-gray-300">+91 9136332019</div>
                </div>
              </a>

              <a href="https://wa.me/918779624253" className="flex gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                💬 <div>
                  <div className="text-xs text-gray-500">WhatsApp</div>
                  <div className="text-sm text-gray-300">8779624253</div>
                </div>
              </a>

              <a href="mailto:saraswati.educare.thane@gmail.com" className="flex gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                ✉️ <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="text-sm text-gray-300 break-all">
                    saraswati.educare.thane@gmail.com
                  </div>
                </div>
              </a>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-sm">
                <div className="text-gray-500 text-xs mb-2">🕐 Hours</div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Mon–Sat</span>
                  <span className="text-amber-400">8 AM – 8 PM</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Sun</span>
                  <span className="text-amber-400">9 AM – 1 PM</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">
            📍 Our Centres
          </span>

          {centres.map((c, i) => (
            <a
              key={i}
              href={`/centres/${c.slug}`}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 hover:text-amber-400 hover:border-amber-400/30 transition"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              {c.name}
            </a>
          ))}
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

     
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">

        <div className="flex items-center gap-2">
          <span>© {year} Saraswati Educare</span>
          <span className="hidden md:inline">· Est. 2002</span>
        </div>

        <div className="flex gap-5">
          {["Privacy Policy", "Terms", "Refund", "Sitemap"].map((l, i) => (
            <a key={i} href="#" className="hover:text-amber-400 transition">
              {l}
            </a>
          ))}
        </div>

        <div className="text-gray-500">
          Developed by{" "}
          <a
            href="https://nakshatranamahacreations.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
          >
            Nakshatra Namaha Creations
          </a>
        </div>
      </div>
    </footer>
  );
}