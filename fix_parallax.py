import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# Add heroScroll state
old_state = '''  const [showTopBtn, setShowTopBtn] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);'''

new_state = '''  const [showTopBtn, setShowTopBtn] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [heroScroll, setHeroScroll] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);'''

content = content.replace(old_state, new_state)

# Add heroScroll update
old_scroll = '''      // Hero opacity logic (fade out completely by 600px of scroll)
      const scrollY = window.scrollY;
      const fadeStart = 50;
      const fadeEnd = 600;
      if (scrollY <= fadeStart) {
        setHeroOpacity(1);
      } else if (scrollY >= fadeEnd) {
        setHeroOpacity(0);
      } else {
        setHeroOpacity(1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
      }'''

new_scroll = '''      // Hero opacity logic (fade out completely by 600px of scroll)
      const scrollY = window.scrollY;
      setHeroScroll(scrollY);
      
      const fadeStart = 50;
      const fadeEnd = 600;
      if (scrollY <= fadeStart) {
        setHeroOpacity(1);
      } else if (scrollY >= fadeEnd) {
        setHeroOpacity(0);
      } else {
        setHeroOpacity(1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
      }'''

content = content.replace(old_scroll, new_scroll)

# Add parallax transforms
old_hero = '''      {/* Hero */}
      <section id="topo" className="relative mx-auto max-w-6xl px-6 pb-24 pt-40 lg:pt-52 transition-opacity duration-75" style={{ opacity: heroOpacity }}>
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="reveal hero-reveal bg-white shadow-sm border border-gray-200 mb-7 inline-flex rounded-full px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
              Mentorias • Imersões • Palestras Corporativas
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">'''

new_hero = '''      {/* Hero */}
      <section id="topo" className="relative mx-auto max-w-6xl px-6 pb-24 pt-40 lg:pt-52 transition-opacity duration-75" style={{ opacity: heroOpacity }}>
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div style={{ transform: `translateY(${heroScroll * 0.4}px)` }}>
            <p className="reveal hero-reveal bg-white shadow-sm border border-gray-200 mb-7 inline-flex rounded-full px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
              Mentorias • Imersões • Palestras Corporativas
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">'''

content = content.replace(old_hero, new_hero)

old_img_container = '''          <div className="reveal hero-reveal relative">
            <div className="bg-[#111111] border border-white/10 overflow-hidden rounded-[2rem] p-2">'''

new_img_container = '''          <div className="reveal hero-reveal relative" style={{ transform: `translateY(${heroScroll * 0.15}px)` }}>
            <div className="bg-[#111111] border border-white/10 overflow-hidden rounded-[2rem] p-2">'''

content = content.replace(old_img_container, new_img_container)


old_bg_element = '''      {/* Background decoration elements */}
      <div 
        className="absolute top-0 inset-x-0 h-[100vh] pointer-events-none z-0 overflow-hidden transition-opacity duration-75"
        style={{ opacity: heroOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#e5372b]/10 via-[#0A0A0A] to-[#1e5ae8]/10 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[-20rem] right-[-20rem] w-[50rem] h-[50rem] bg-[#e5372b]/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[-10rem] w-[30rem] h-[30rem] bg-[#1e5ae8]/10 rounded-full blur-[120px]" />
      </div>'''

new_bg_element = '''      {/* Background decoration elements */}
      <div 
        className="absolute top-0 inset-x-0 h-[100vh] pointer-events-none z-0 overflow-hidden transition-opacity duration-75"
        style={{ opacity: heroOpacity, transform: `translateY(${heroScroll * 0.6}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#e5372b]/10 via-[#0A0A0A] to-[#1e5ae8]/10 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[-20rem] right-[-20rem] w-[50rem] h-[50rem] bg-[#e5372b]/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[-10rem] w-[30rem] h-[30rem] bg-[#1e5ae8]/10 rounded-full blur-[120px]" />
      </div>'''

content = content.replace(old_bg_element, new_bg_element)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

