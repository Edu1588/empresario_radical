import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# 1. Update imports
old_import = 'import { Activity } from "lucide-react";'
new_import = 'import { Activity, ArrowUp } from "lucide-react";'
content = content.replace(old_import, new_import)

# 2. Add state and effect in Landing component
old_state = '''  const root = useRef<HTMLDivElement>(null);
  const [marcados, setMarcados] = useState<number[]>([]);
  const [aberta, setAberta] = useState<number | null>(0);'''

new_state = '''  const root = useRef<HTMLDivElement>(null);
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
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };'''
content = content.replace(old_state, new_state)

# 3. Add button at the end of Landing component
old_footer = '''      <footer className="border-t border-gray-100 py-10 text-center text-xs text-gray-400">
        <p className="font-bold text-white">EMPRESÁRIO RADICAL</p>
        <p className="mt-2">Mentorias • Imersões • Palestras Corporativas</p>
      </footer>
    </div>'''

new_footer = '''      <footer className="border-t border-gray-100 py-10 text-center text-xs text-gray-400">
        <p className="font-bold text-white">EMPRESÁRIO RADICAL</p>
        <p className="mt-2">Mentorias • Imersões • Palestras Corporativas</p>
      </footer>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[#e5372b] text-white shadow-[0_4px_14px_0_rgba(229,55,43,0.39)] transition-all duration-300 hover:scale-110 hover:bg-[#b3221b] ${
          showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
      </button>
    </div>'''
content = content.replace(old_footer, new_footer)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

