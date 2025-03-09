export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PolyCraft</h3>
            <p className="text-sm text-muted-foreground">
              Premium design consultancy blending Swiss precision with South African creativity, specializing in 3D modeling, branding, and strategic design consulting.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-muted-foreground">
              Lugano, Switzerland & South Africa<br />
              info@polycraftdesigns.com<br />
              +41 123 456 789
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Privacy Policy</p>
              <p className="text-sm text-muted-foreground">Terms of Service</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} PolyCraft. All rights reserved.
        </div>
      </div>
    </footer>
  );
}