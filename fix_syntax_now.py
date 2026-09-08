with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

idx = idx.replace(
    '</p>\n\n        </div>\n      </Section>',
    '</p>\n              ))}\n            </div>\n          </div>\n        </div>\n      </Section>'
)

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

