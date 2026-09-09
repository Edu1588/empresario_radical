import re

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

bg_snippet = '''      {/* Hero Background */}
      <div className="absolute top-0 inset-x-0 h-screen min-h-[800px] overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-[center_top] bg-no-repeat opacity-30 transform -scale-x-100 mix-blend-luminosity"
          style={{ backgroundImage: "url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788952730/1745.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
      </div>

      {/* Header */}'''

content = content.replace("      {/* Header */}", bg_snippet)

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

