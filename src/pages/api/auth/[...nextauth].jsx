import nextAuth from "next-auth";
import githubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    githubProvider({
      clientId: "Ov23lib5svpj1nRUjyBV",
      clientSecret: "6efeabb61f819472b862fb2f5a782dd6075f953a",
    }),
  ],
};

export default nextAuth(authOptions);
