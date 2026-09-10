import json

with open("package.json", "r") as f:
    pkg = json.load(f)

# Need to downgrade three to a version compatible with threeui sRGBEncoding
# sRGBEncoding was removed in r152
pkg["dependencies"]["three"] = "0.150.1"

with open("package.json", "w") as f:
    json.dump(pkg, f, indent=2)

