export default function AuthOptions({
  auth,
  setAuth,
}: {
  auth: "login" | "register";
  setAuth: (auth: "login" | "register") => void;
}) {
  return (
    <div className="w-full inline-flex items-center justify-center p-1 bg-main rounded-full border border-border-color">
      <button
        onClick={() => setAuth("login")}
        className={`w-full px-6 py-3 rounded-full font-body text-sm font-semibold transition-all duration-300 ${
          auth === "login"
            ? "bg-primary text-main shadow-lg shadow-primary/20"
            : "text-muted hover:text-secondary"
        }`}
      >
        Login
      </button>

      <button
        onClick={() => setAuth("register")}
        className={`w-full px-6 py-3 rounded-full font-body text-sm font-semibold transition-all duration-300 ${
          auth === "register"
            ? "bg-primary text-main shadow-lg shadow-primary/20"
            : "text-muted hover:text-secondary"
        }`}
      >
        Register
      </button>
    </div>
  );
}
