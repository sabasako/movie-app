import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center mt-32 lg:mt-12">
      <SignUp
        appearance={{
          elements: {
            headerTitle: "text-3xl",
            card: "bg-semiDarkBlue",
            formButtonPrimary:
              "bg-red hover:bg-pureWhite hover:text-semiDarkBlue transition duration-300",
            footerActionLink: "text-red",
            footerAction: "flex justify-center w-full",
            formFieldInput: "bg-semiDarkBlue",
          },
        }}
      />
    </div>
  );
}
