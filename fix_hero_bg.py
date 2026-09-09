import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# 1. Update GSAP
old_gsap = r'''        gsap\.utils\.toArray<HTMLElement>\("\.aura"\)\.forEach\(\(el, i\) => \{
          gsap\.to\(el, \{
            xPercent: i % 2 \? -12 : 12,
            yPercent: i % 2 \? 10 : -10,
            duration: 9 \+ i,
            repeat: -1,
            yoyo: true,
            ease: "sine\.inOut",
          \}\);
        \}\);'''

new_gsap = """        gsap.utils.toArray<HTMLElement>(".aura").forEach((el, i) => {
          gsap.to(el, {
            xPercent: i % 2 ? -12 : 12,
            yPercent: i % 2 ? 10 : -10,
            duration: 9 + i,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

        gsap.to(".hero-bg-layer", {
          opacity: 0,
          scrollTrigger: {
            trigger: "#topo",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });"""

content = re.sub(old_gsap, new_gsap, content)

# 2. Update JSX
old_jsx = r'<div className="absolute top-0 inset-x-0 h-screen min-h-\[800px\] overflow-hidden pointer-events-none z-0">'
new_jsx = '<div className="hero-bg-layer fixed top-0 inset-x-0 h-[120vh] min-h-[800px] overflow-hidden pointer-events-none z-0">'
# Notice I made it h-[120vh] so on mobile when address bar hides, it doesn't leave a gap, though h-screen is usually fine. h-screen is fine. Let's keep h-screen.
new_jsx = '<div className="hero-bg-layer fixed top-0 inset-x-0 h-screen min-h-[800px] overflow-hidden pointer-events-none z-0">'

content = content.replace(old_jsx, new_jsx)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

