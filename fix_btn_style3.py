with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

# Add w-fit to buttons that need it
idx = idx.replace('className="btn-whatsapp [&>span.invisible]:px-10 [&>span.invisible]:py-4"', 'className="btn-whatsapp w-fit [&>span.invisible]:px-10 [&>span.invisible]:py-4"')
idx = idx.replace('className="btn-blue [&>span.invisible]:px-10 [&>span.invisible]:py-4"', 'className="btn-blue w-fit [&>span.invisible]:px-10 [&>span.invisible]:py-4"')
idx = idx.replace('className="btn-blue mt-8"', 'className="btn-blue w-fit mt-8 [&>span.invisible]:px-10 [&>span.invisible]:py-4"')
idx = idx.replace('className="btn-whatsapp mt-9 mx-auto [&>span.invisible]:px-12 [&>span.invisible]:py-5"', 'className="btn-whatsapp w-fit mt-9 mx-auto [&>span.invisible]:px-12 [&>span.invisible]:py-5"')


with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

