export function Footer() {
  return (
    <footer className="py-8 border-t border-primary/20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Ligia Corrêa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
