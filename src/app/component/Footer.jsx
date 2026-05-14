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
    <>
      <style>{`
        
        .gold-gradient { background: linear-gradient(135deg, #f59e0b, #d97706); }
        .gold-text { background: linear-gradient(135deg, #f59e0b, #fbbf24, #d97706); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .shine-btn { position: relative; overflow: hidden; }
        .shine-btn::after {
          content:''; position:absolute; top:-50%; left:-75%; width:50%; height:200%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent);
          transform:skewX(-20deg); animation:footer-shine 3s infinite;
        }
        @keyframes footer-shine { 0%,100%{left:-75%} 50%{left:125%} }
        .footer-link {
          color: #6b7280;
          text-decoration: none;
          font-size: 0.8125rem;
          transition: color 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .footer-link:hover { color: #f59e0b; }
        .footer-link::before {
          content: '';
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #374151;
          display: inline-block;
          flex-shrink: 0;
          transition: background 0.2s ease;
        }
        .footer-link:hover::before { background: #f59e0b; }
        .centre-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          padding: 6px 14px;
          color: #9ca3af;
          font-size: 0.75rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          letter-spacing: 0.03em;
        }
        .centre-pill:hover {
          background: rgba(245,158,11,0.12);
          border-color: rgba(245,158,11,0.3);
          color: #fbbf24;
        }
        .social-btn {
          width: 38px; height: 38px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .social-btn:hover {
          background: rgba(245,158,11,0.15);
          border-color: rgba(245,158,11,0.35);
          transform: translateY(-2px);
        }
        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 80%, transparent);
        }
        .col-heading {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #4b5563;
          margin-bottom: 18px;
        }
        .marquee-footer { display:flex; animation: marquee-f 22s linear infinite; }
        @keyframes marquee-f { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .badge-glow {
          box-shadow: 0 0 24px rgba(245,158,11,0.25), 0 0 48px rgba(245,158,11,0.10);
        }
      `}</style>

      <footer className="footer-root bg-gray-950 overflow-hidden">

        {/* ── TOP CTA BAND ── */}
        <div className="relative overflow-hidden">
          {/* background geometry */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500/6 rounded-full blur-3xl" />
            {/* subtle grid lines */}
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Left copy */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/25 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
                  🎉 Admissions Open — 2026–27
                </div>
                <h2 className="font-display text-3xl lg:text-4xl text-white font-bold leading-snug mb-3">
                  Start Your Child's<br />
                  <span className="gold-text">Success Story</span> Today
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                  Limited seats across all 6 centres. Book a free demo class — no commitment, no pressure.
                </p>
              </div>

              {/* Right CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a href="/contact"
                  className="shine-btn gold-gradient text-white font-bold px-7 py-4 rounded-full shadow-2xl shadow-amber-500/20 hover:scale-105 transition-transform duration-200 text-sm text-center whitespace-nowrap">
                  📅 Book Free Demo Class
                </a>
                <a href="https://wa.me/91XXXXXXXXXX"
                  className="flex items-center justify-center gap-2 bg-[#25D366]/15 border border-[#25D366]/30 text-[#4ade80] font-bold px-7 py-4 rounded-full hover:bg-[#25D366]/25 transition-all duration-200 text-sm whitespace-nowrap">
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        {/* ── MAIN FOOTER GRID ── */}
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">

            {/* Brand column — 4 cols */}
            <div className="lg:col-span-4">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 gold-gradient rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg badge-glow shrink-0"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  S
                </div>
                <div>
                  <div className="font-display font-bold text-white text-lg leading-tight">Saraswati Educare</div>
                  <div className="text-amber-500 text-xs font-medium">Thane's Premier Coaching Institute</div>
                </div>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Saraswati Educare has been building toppers in Thane since 2002. Six coaching centres. IITian faculty. 10,000+ students coached. 24 years of results that speak for themselves.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-7">
                {[
                  { val: "24+", label: "Years" },
                  { val: "6", label: "Centres" },
                  { val: "10K+", label: "Students" },
                ].map((s, i) => (
                  <div key={i} className="bg-white/4 border border-white/6 rounded-xl px-3 py-3 text-center">
                    <div className="font-display font-black gold-text text-xl">{s.val}</div>
                    <div className="text-gray-600 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-xs font-medium mr-1">Follow us:</span>
                {[
                  { icon: "📘", label: "Facebook", href: "#" },
                  { icon: "📸", label: "Instagram", href: "#" },
                  { icon: "▶️", label: "YouTube", href: "#" },
                  { icon: "💼", label: "LinkedIn", href: "#" },
                ].map((s, i) => (
                  <a key={i} href={s.href} title={s.label} className="social-btn">{s.icon}</a>
                ))}
              </div>
            </div>

            {/* Quick Links — 2 cols */}
            <div className="lg:col-span-2">
              <div className="col-heading">Quick Links</div>
              <ul className="space-y-3">
                {quickLinks.map((l, i) => (
                  <li key={i}><a href={l.href} className="footer-link">{l.label}</a></li>
                ))}
              </ul>
            </div>

            {/* Courses — 3 cols */}
            <div className="lg:col-span-3">
              <div className="col-heading">Our Courses</div>
              <ul className="space-y-3">
                {courses.map((l, i) => (
                  <li key={i}><a href={l.href} className="footer-link">{l.label}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact — 3 cols */}
            <div className="lg:col-span-3">
              <div className="col-heading">Contact & Hours</div>
              <div className="space-y-3">
                <a href="tel:+91XXXXXXXXXX"
                  className="flex items-center gap-3 bg-white/4 border border-white/6 rounded-xl px-4 py-3 hover:border-amber-500/25 hover:bg-amber-500/6 transition-all duration-200 group">
                  <span className="text-lg">📞</span>
                  <div>
                    <div className="text-gray-600 text-xs">Call Us</div>
                    <div className="text-gray-300 font-semibold text-sm group-hover:text-amber-400 transition-colors">+91 XXXXX XXXXX</div>
                  </div>
                </a>
                <a href="https://wa.me/91XXXXXXXXXX"
                  className="flex items-center gap-3 bg-white/4 border border-white/6 rounded-xl px-4 py-3 hover:border-[#25D366]/25 hover:bg-[#25D366]/6 transition-all duration-200 group">
                  <span className="text-lg">💬</span>
                  <div>
                    <div className="text-gray-600 text-xs">WhatsApp</div>
                    <div className="text-gray-300 font-semibold text-sm group-hover:text-[#4ade80] transition-colors">+91 XXXXX XXXXX</div>
                  </div>
                </a>
                <a href="mailto:info@saraswatieducare.com"
                  className="flex items-center gap-3 bg-white/4 border border-white/6 rounded-xl px-4 py-3 hover:border-blue-500/25 hover:bg-blue-500/6 transition-all duration-200 group">
                  <span className="text-lg">✉️</span>
                  <div>
                    <div className="text-gray-600 text-xs">Email</div>
                    <div className="text-gray-300 font-semibold text-sm group-hover:text-blue-400 transition-colors text-xs">info@saraswatieducare.com</div>
                  </div>
                </a>

                {/* Hours */}
                <div className="bg-white/4 border border-white/6 rounded-xl px-4 py-3">
                  <div className="text-gray-600 text-xs mb-2 font-semibold">🕐 Business Hours</div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Mon – Sat</span>
                      <span className="text-amber-400 font-semibold">8 AM – 8 PM</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Sunday</span>
                      <span className="text-amber-400 font-semibold">9 AM – 1 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        {/* ── CENTRES ROW ── */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <span className="text-gray-600 text-xs font-bold uppercase tracking-widest shrink-0">
              📍 Our Centres
            </span>
            <div className="flex flex-wrap gap-2">
              {centres.map((c, i) => (
                <a key={i} href={`/centres/${c.slug}`} className="centre-pill">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                  {c.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <span>© {year} Saraswati Educare. All rights reserved.</span>
              <span className="hidden sm:inline text-gray-700">·</span>
              <span className="hidden sm:inline">Est. 2002, Thane West</span>
            </div>
            <div className="flex items-center gap-5">
              {["Privacy Policy", "Terms of Use", "Refund Policy", "Sitemap"].map((l, i) => (
                <a key={i} href="#" className="text-gray-600 hover:text-amber-400 transition-colors duration-200">{l}</a>
              ))}
            </div>

            <div className="flex items-center gap-4">


              <span className="text-gray-400">|</span>

              <span className="text-gray-500 text-sm">
                Developed by{" "}
                <a
                  href="https://nakshatranamahacreations.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-emerald-400 transition-colors"
                >
                  nakshatranamahacreations.com
                </a>
              </span>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}