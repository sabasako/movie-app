import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Profile() {
  return (
    <header
      style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
    >
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              userPreviewMainIdentifier: "text-2xl",
            },
          }}
          signInUrl="/sign-in"
        />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </header>
  );
}
