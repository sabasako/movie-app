import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Profile() {
  return (
    <header
      style={{ display: "flex", justifyContent: "space-between", padding: 0 }}
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
        <SignInButton>
          <button className="text-red hover:opacity-70 transition-all duration-300">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
    </header>
  );
}
