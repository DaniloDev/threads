import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <h1 style={{ color: "#fff" }}>HOME</h1>
      <UserButton afterSignOutUrl="/" />
    </>
  );
}
