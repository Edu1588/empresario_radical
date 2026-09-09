import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# Modify the image alignment from `object-[center_top]` to `object-[left_top]` to show the left side of the image (which becomes the right side visually after the -scale-x-100 mirror)
# Actually, if it's mirrored horizontally, we want to align to the right side of the ORIGINAL image to make it show up on the left side of the MIRRORED result?
# Let's just use object-left or object-right. If it's mirrored, `object-right` of original image becomes left side of the mirrored element.
old_image = 'className="absolute inset-0 w-full h-full object-cover transform -scale-x-100 object-[center_top]"'
new_image = 'className="absolute inset-0 w-full h-full object-cover transform -scale-x-100 object-[right_top]"'

content = content.replace(old_image, new_image)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

