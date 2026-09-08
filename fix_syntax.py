with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

idx = idx.replace('            ]}\n          />\n        </div>\n\n            ))}\n          </div>\n        </div>', '            ]}\n          />\n        </div>')

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)
