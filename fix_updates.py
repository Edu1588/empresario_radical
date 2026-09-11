import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# 1. Add Volume icons to lucide-react import
old_import = 'import { Activity, ArrowUp } from "lucide-react";'
new_import = 'import { Activity, ArrowUp, Volume2, VolumeX } from "lucide-react";'
content = content.replace(old_import, new_import)

# 2. Add isMuted state
old_state = '''  const [heroScroll, setHeroScroll] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);'''

new_state = '''  const [heroScroll, setHeroScroll] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);'''
content = content.replace(old_state, new_state)

# 3. Fix volume logic in observer
old_volume = '''            if (entry.isIntersecting) {
              videoRef.current.volume = 0.25; // Define o volume para 25% para não assustar o usuário
              videoRef.current.play().catch(e => console.log("Auto-play prevented", e));'''

new_volume = '''            if (entry.isIntersecting) {
              videoRef.current.volume = 1; // Deixa o volume no max, mas começa mutado
              videoRef.current.play().catch(e => console.log("Auto-play prevented", e));'''
content = content.replace(old_volume, new_volume)

# 4. Add muted property and toggle button to video
old_video_container = '''            <div className="bg-[#0A0A0A] p-2 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
              <video
                ref={videoRef}
                src="https://res.cloudinary.com/ifuatk2z/video/upload/v1788990263/edmarvideo.mp4"
                loop
                playsInline
                className="w-full h-auto object-cover rounded-[1.4rem] aspect-[9/16]"
              />
            </div>'''

new_video_container = '''            <div className="relative bg-[#0A0A0A] p-2 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
              <video
                ref={videoRef}
                src="https://res.cloudinary.com/ifuatk2z/video/upload/v1788990263/edmarvideo.mp4"
                loop
                playsInline
                muted={isMuted}
                className="w-full h-auto object-cover rounded-[1.4rem] aspect-[9/16]"
              />
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-6 right-6 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md transition-all shadow-lg border border-white/10 z-10"
                aria-label={isMuted ? "Ativar som" : "Desativar som"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>'''
content = content.replace(old_video_container, new_video_container)

# 5. Fix "A Jornada" background position on mobile
old_jornada_bg = '<div className="absolute inset-0 bg-[url(\'https://res.cloudinary.com/ifuatk2z/image/upload/v1788975668/edmar1.png\')] bg-cover bg-center bg-fixed opacity-100 z-0" />'
new_jornada_bg = '<div className="absolute inset-0 bg-[url(\'https://res.cloudinary.com/ifuatk2z/image/upload/v1788975668/edmar1.png\')] bg-cover bg-[position:80%_top] md:bg-center bg-fixed opacity-100 z-0" />'
content = content.replace(old_jornada_bg, new_jornada_bg)

# 6. Fix CTA Button styling for mobile
old_cta_btn = '''          <AnimatedButton href="#contato" className="btn-whatsapp w-fit mx-auto mt-8 sm:mt-9 [&>span.invisible]:px-5 sm:[&>span.invisible]:px-9 [&>span.invisible]:py-3 sm:[&>span.invisible]:py-4 text-[9px] sm:text-xs md:text-sm">
            QUERO FALAR SOBRE MINHA EMPRESA
          </AnimatedButton>'''

new_cta_btn = '''          <AnimatedButton href="#contato" className="btn-whatsapp w-full max-w-[280px] sm:max-w-none sm:w-fit mx-auto mt-8 sm:mt-9 [&>span.invisible]:px-4 sm:[&>span.invisible]:px-9 [&>span.invisible]:py-4 text-[10px] sm:text-xs md:text-sm">
            QUERO FALAR SOBRE MINHA EMPRESA
          </AnimatedButton>'''
content = content.replace(old_cta_btn, new_cta_btn)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

