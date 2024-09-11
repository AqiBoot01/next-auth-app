import { signIn, signOut, useSession } from "next-auth/react";

const Index = () => {
  const session = useSession();

  if ((session?.data === null) & (session?.status === "unauthenticated")) {
    return <button onClick={signIn}>Login</button>;
  } else {
    return (
      <>
        <h1>Welcome to Auth page {session?.data?.user?.name}</h1>
        <button onClick={signOut}>Signout</button>
      </>
    );
  }
};

export default Index;
