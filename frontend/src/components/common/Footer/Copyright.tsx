export default function Copyright() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border-color pt-8">
      <p className="font-body text-sm text-muted text-center sm:text-left">
        © 2026 Castle Gym. All rights reserved.
      </p>

      <div className="flex items-center gap-6 font-body text-sm text-muted">
        <a href="#" className="hover:text-primary transition-colors">
          Privacy Policy
        </a>

        <a href="#" className="hover:text-primary transition-colors">
          Terms of Service
        </a>
      </div>
    </div>
  );
}
