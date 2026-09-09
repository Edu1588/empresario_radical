import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# Modify the image alignment from `object-[right_top]` to `object-[left_top]`
# Since the image is mirrored (`-scale-x-100`), aligning to `left` of the original image will push the visible content to the right side of the container.
old_image = 'className="absolute inset-0 w-full h-full object-cover transform -scale-x-100 object-[right_top]"'
new_image = 'className="absolute inset-0 w-full h-full object-cover transform -scale-x-100 object-[left_top]"'

content = content.replace(old_image, new_image)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

