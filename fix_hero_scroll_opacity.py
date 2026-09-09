import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# 1. We need to handle the hero opacity on scroll. Let's add state and event listener for hero opacity.
old_state = '''  const root = useRef<HTMLDivElement>(null);
  const [marcados, setMarcados] = useState<number[]>([]);
  const [aberta, setAberta] = useState<number | null>(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);'''


new_state = '''  const root = useRef<HTMLDivElement>(null);
  const [marcados, setMarcados] = useState<number[]>([]);
  const [aberta, setAberta] = useState<number | null>(0);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Top button logic
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
      
      // Hero opacity logic (fade out completely by 600px of scroll)
      const scrollY = window.scrollY;
      const fadeStart = 50;
      const fadeEnd = 600;
      if (scrollY <= fadeStart) {
        setHeroOpacity(1);
      } else if (scrollY >= fadeEnd) {
        setHeroOpacity(0);
      } else {
        setHeroOpacity(1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);'''

content = content.replace(old_state, new_state)


# 2. Change Hero Background back to fixed but apply dynamic opacity
old_hero_bg = """      {/* Hero Background */}
      <div className="absolute top-0 inset-x-0 h-[100vh] min-h-[800px] overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform -scale-x-100"
          style={{ backgroundImage: "url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788975669/edmar9.png')" }}
        />"""

new_hero_bg = """      {/* Hero Background */}
      <div 
        className="fixed top-0 inset-x-0 h-[100vh] min-h-[800px] overflow-hidden pointer-events-none z-0 transition-opacity duration-75"
        style={{ opacity: heroOpacity }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform -scale-x-100"
          style={{ backgroundImage: "url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788975669/edmar9.png')" }}
        />"""

content = content.replace(old_hero_bg, new_hero_bg)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

