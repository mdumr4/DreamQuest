
export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex items-center justify-center py-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dream Quest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
