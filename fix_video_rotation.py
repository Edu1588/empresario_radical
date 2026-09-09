import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# I need to add an IntersectionObserver to play/pause the video when it enters/leaves the viewport.
# I also need to remove the `lg:-rotate-2` from the video wrapper to make it straight.

# First, add the ref and effect for the video
old_state = '''  const [aberta, setAberta] = useState<number | null>(0);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);'''

new_state = '''  const [aberta, setAberta] = useState<number | null>(0);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(e => console.log("Auto-play prevented", e));
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 } // Play when at least 50% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);'''

content = content.replace(old_state, new_state)

# Second, fix the video container (remove rotation) and add ref
old_video = '''            <div className="bg-[#0A0A0A] p-2 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
              <video
                src="https://res.cloudinary.com/ifuatk2z/video/upload/v1788990263/edmarvideo.mp4"
                controls
                playsInline
                className="w-full h-auto object-cover rounded-[1.4rem]"
              />
            </div>'''

new_video = '''            <div className="bg-[#0A0A0A] p-2 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
              <video
                ref={videoRef}
                src="https://res.cloudinary.com/ifuatk2z/video/upload/v1788990263/edmarvideo.mp4"
                controls
                playsInline
                className="w-full h-auto object-cover rounded-[1.4rem] aspect-[9/16]"
              />
            </div>'''

content = content.replace(old_video, new_video)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

