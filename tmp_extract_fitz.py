import sys
import fitz

doc = fitz.open("D:/2026/nextjs/portfolio_shreyash/public/shreyashBalapureResume.pdf")
text = ""
for page in doc:
    text += page.get_text() + "\n"

with open("D:/2026/nextjs/portfolio_shreyash/resume_text.txt", "w", encoding="utf-8") as f:
    f.write(text)
