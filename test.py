# Check that the CTA button in the final call looks right
with open("src/routes/index.tsx", "r") as f:
    print(f.read().count('btn-whatsapp'))
