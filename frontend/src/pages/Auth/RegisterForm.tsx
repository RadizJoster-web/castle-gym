import FormInput from "../../components/ui/FormInput";
import SubmitButton from "../../components/ui/SubmitButton";

export default function RegisterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle register logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-secondary font-display mb-2">
          Create Account
        </h2>
        <p className="text-sm text-muted font-body">
          Start your fitness journey today.
        </p>
      </div>

      <FormInput
        id="register-name"
        label="Full Name"
        type="text"
        placeholder="username"
      />

      <FormInput
        id="register-email"
        label="Email Address"
        type="email"
        placeholder="username@gmail.com"
      />

      <FormInput
        id="register-phoneNum"
        label="phone Number"
        type="phoneNum"
        placeholder="081234567890"
      />

      <FormInput
        id="register-password"
        label="Password"
        type="password"
        placeholder="......"
      />

      <SubmitButton label="Create Account" />
    </form>
  );
}

