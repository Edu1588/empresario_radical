import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# Replace the quote HTML
old_quote = '''            <p className="reveal text-3xl font-medium text-gray-800" style={{ fontFamily: "'Caveat', cursive" }}>
              "Porque existe uma diferença enorme entre conhecer gestão e precisar fazer uma empresa funcionar."
            </p>'''

new_quote = '''            <p className="quote-container text-3xl font-medium text-gray-800" style={{ fontFamily: "'Caveat', cursive" }}>
              {'"Porque existe uma diferença enorme entre conhecer gestão e precisar fazer uma empresa funcionar."'.split("").map((char, index) => (
                <span key={index} className="quote-char opacity-0 inline-block">
                  {char === " " ? "\\u00A0" : char}
                </span>
              ))}
            </p>'''

content = content.replace(old_quote, new_quote)

# Add the GSAP animation block right after the hero-bg-layer animation
old_gsap = '''        gsap.to(".hero-bg-layer", {
          opacity: 0,
          scrollTrigger: {
            trigger: "#topo",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });'''

new_gsap = '''        gsap.to(".hero-bg-layer", {
          opacity: 0,
          scrollTrigger: {
            trigger: "#topo",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".quote-char", {
          opacity: 1,
          duration: 0.1,
          stagger: 0.03,
          ease: "none",
          scrollTrigger: {
            trigger: ".quote-container",
            start: "top 85%",
          },
        });'''

content = content.replace(old_gsap, new_gsap)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

