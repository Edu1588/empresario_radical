import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

old_image = """              <img
                src="https://res.cloudinary.com/ifuatk2z/image/upload/v1788214935/empresarioRadical6.png"
                alt="O que é ser Radical"
                className="w-full h-auto object-cover rounded-[1.4rem] opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />"""

new_video = """              <video
                src="https://res.cloudinary.com/ifuatk2z/video/upload/v1788990263/edmarvideo.mp4"
                controls
                playsInline
                className="w-full h-auto object-cover rounded-[1.4rem]"
              />"""

content = content.replace(old_image, new_video)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

