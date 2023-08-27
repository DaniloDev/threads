import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <h1>HOME</h1>
      <UserButton afterSignOutUrl="/" />
    </>
  );
}
