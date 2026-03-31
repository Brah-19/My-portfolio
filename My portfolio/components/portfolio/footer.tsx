"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border mt-12">
      <div className="text-center text-muted-foreground text-sm">
        <p>©{currentYear} Toks, All Right Reserved</p>
      </div>
    </footer>
  )
}
