import re

with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# Replace the hero image
# We need to find the hero section. 
# The hero image currently uses `src={mentor}` in `<div className="reveal hero-reveal relative">`

hero_match = re.search(r'(<div className="reveal hero-reveal relative">.*?</Section>)', idx, re.DOTALL)
if hero_match:
    hero_content = hero_match.group(1)
    hero_content = hero_content.replace(
        'src={mentor}',
        'src="https://res.cloudinary.com/ifuatk2z/image/upload/v1788898824/empre_Radical.png"'
    )
    # The image is scaled with object-cover, maybe we don't need to change other classes.
    idx = idx[:hero_match.start()] + hero_content + idx[hero_match.end():]

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

