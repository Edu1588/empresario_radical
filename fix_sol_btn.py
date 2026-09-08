with open("src/routes/index.tsx", "r") as f:
    idx = f.read()

idx = idx.replace('className={`mt-6 w-full [&>span.invisible]:py-4 ${s.accent === "red" ? "btn-red" : "btn-blue"}`}', 'className={`mt-6 w-full [&>span.invisible]:py-4 [&>div]:w-full ${s.accent === "red" ? "btn-red" : "btn-blue"}`}')

with open("src/routes/index.tsx", "w") as f:
    f.write(idx)

