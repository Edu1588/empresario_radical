import re

with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# Change the section background and text
idx = idx.replace(
    '<Section id="autoridade" bgClass="bg-[#0A0A0A]" textClass="text-white"',
    '<Section id="autoridade" bgClass="bg-white" textClass="text-gray-900"'
)

# Change the image container background
idx = idx.replace(
    '<div className="reveal bg-[#111111] border border-white/10 overflow-hidden rounded-3xl p-2">',
    '<div className="reveal bg-white shadow-sm border border-gray-200 overflow-hidden rounded-3xl p-2">'
)

# Change the image source for the autoridade section specifically
# The hero section also has `src={mentor}` but I want to only change it inside the autoridade section.
autoridade_match = re.search(r'(<Section id="autoridade".*?</Section>)', idx, re.DOTALL)
if autoridade_match:
    autoridade_content = autoridade_match.group(1)
    
    # Change text color
    autoridade_content = autoridade_content.replace(
        '<div className="space-y-4 leading-relaxed text-gray-400">',
        '<div className="space-y-4 leading-relaxed text-gray-600">'
    )
    
    autoridade_content = autoridade_content.replace(
        '<p className="reveal font-semibold text-white">',
        '<p className="reveal font-semibold text-gray-900">'
    )
    
    # Small quote cards
    autoridade_content = autoridade_content.replace(
        'className="reveal bg-[#111111] border border-white/10 rounded-2xl p-4 text-xs leading-relaxed text-gray-400"',
        'className="reveal bg-white shadow-sm border border-gray-200 rounded-2xl p-4 text-xs leading-relaxed text-gray-600"'
    )
    
    # Stats bar if any
    autoridade_content = autoridade_content.replace(
        '<div className="reveal bg-[#0A0A0A] border border-white/10 mt-8 flex flex-col items-start gap-5 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between">',
        '<div className="reveal bg-white border border-gray-200 shadow-sm mt-8 flex flex-col items-start gap-5 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between">'
    )
    
    # Image
    autoridade_content = autoridade_content.replace(
        'src={mentor}',
        'src="https://res.cloudinary.com/ifuatk2z/image/upload/v1788214935/empresarioRadical6.png"'
    )
    autoridade_content = autoridade_content.replace(
        'className="h-full w-full rounded-[1.4rem] object-cover"',
        'className="h-full w-full rounded-[1.4rem] object-cover -scale-x-100"'
    )
    
    idx = idx[:autoridade_match.start()] + autoridade_content + idx[autoridade_match.end():]

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

