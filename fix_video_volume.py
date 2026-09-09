import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# 1. Update the IntersectionObserver effect to set the volume to 20% (0.2) when playing
old_effect = '''  useEffect(() => {
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
    );'''

new_effect = '''  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.volume = 0.25; // Define o volume para 25% para não assustar o usuário
              videoRef.current.play().catch(e => console.log("Auto-play prevented", e));
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 } // Play when at least 50% of the video is visible
    );'''

content = content.replace(old_effect, new_effect)

# 2. Remove the 'controls' attribute from the video and add 'loop' so it acts like a background ambient video but with low audio
old_video = '''              <video
                ref={videoRef}
                src="https://res.cloudinary.com/ifuatk2z/video/upload/v1788990263/edmarvideo.mp4"
                controls
                playsInline
                className="w-full h-auto object-cover rounded-[1.4rem] aspect-[9/16]"
              />'''

new_video = '''              <video
                ref={videoRef}
                src="https://res.cloudinary.com/ifuatk2z/video/upload/v1788990263/edmarvideo.mp4"
                loop
                playsInline
                className="w-full h-auto object-cover rounded-[1.4rem] aspect-[9/16]"
              />'''

content = content.replace(old_video, new_video)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

