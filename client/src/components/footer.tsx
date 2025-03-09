export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12 px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">PolyCraft</h3>
            <p className="text-sm text-muted-foreground">
              Premium design consultancy blending Swiss precision with South African creativity, specializing in 3D modeling, branding, and strategic design consulting.
            </p>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-muted-foreground">
              Lugano, Switzerland & Cape Town, South Africa<br />
              info@polycraftdesigns.com<br />
              +41 123 456 789
            </p>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Privacy Policy</p>
              <p className="text-sm text-muted-foreground">Terms of Service</p>
              <div className="mt-4 text-xs text-muted-foreground/80">
                <p>Swiss UID: CHE-374.188.412</p>
                <p>POLYCRAFT SOUTH AFRICA (Pty) Ltd 2025/164321/07</p>
              </div>
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