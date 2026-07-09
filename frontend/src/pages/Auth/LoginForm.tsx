import FormInput from "../../components/ui/FormInput";
import SubmitButton from "../../components/ui/SubmitButton";

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-secondary font-display mb-2">
          Welcome Back
        </h2>
        <p className="text-sm text-muted font-body">
          Please enter your details to sign in.
        </p>
      </div>

      <FormInput
        id="login-email"
        label="Email Address"
        type="email"
        placeholder="Enter your email"
      />

      <FormInput
        id="login-password"
        label="Password"
        type="password"
        placeholder="Enter your password"
      />

      <div className="flex justify-end mb-2">
        <button
          type="button"
          className="text-xs font-semibold text-muted hover:text-primary transition-colors font-body"
        >
          Forgot Password?
        </button>
      </div>

      <SubmitButton label="Sign In" />
    </form>
  );
}
