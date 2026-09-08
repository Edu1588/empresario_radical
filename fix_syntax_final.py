with open("src/routes/index.tsx", "r") as f:
    lines = f.readlines()

new_lines = []
for idx, line in enumerate(lines):
    new_lines.append(line)
    if "                </p>" in line and idx > 430 and idx < 445:
        if lines[idx+1].strip() == "" and lines[idx+2].strip() == "</div>":
            new_lines.append("              ))}\n            </div>\n          </div>\n")
            
with open("src/routes/index.tsx", "w") as f:
    f.writelines(new_lines)

