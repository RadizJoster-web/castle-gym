import { useState } from "react";
import Header from "./Header";
import AuthOptions from "./AuthOptions";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthPage({ action }: { action: "login" | "register" }) {
  const [auth, setAuth] = useState(action);

  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row bg-background text-foreground overflow-x-hidden">
      <div className="hidden lg:flex w-full lg:w-1/2 min-h-[40vh] lg:min-h-screen items-center justify-center relative p-6 sm:p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-border/40">
        <Header />
      </div>

      <div className="h-screen w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-lg">
          <div>
            <AuthOptions auth={auth} setAuth={setAuth} />

            <div className="mt-8 min-h-[560px]">
              {auth === "login" ? <LoginForm /> : <RegisterForm />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
