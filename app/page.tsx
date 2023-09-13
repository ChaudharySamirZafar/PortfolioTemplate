import MyProfilePic from "@/lib/components/MyProfilePic";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 pb-8">
      <Introduction />
      <hr className="border-skin-line" />
    </div>
  );
}

const Introduction = () => {
  return (
    <div>
      <MyProfilePic />
      <h1 className="text-2xl font-semibold capitalize">About</h1>
      <p className="text-md font-medium">
        Hello, I&apos;m Samir, I&apos;m currently a software engineer at{" "}
        <a
          className="font-semibold underline cursor-pointer"
          href="https://www.booking.com"
        >
          booking
        </a>
        . This site is multi-purpose, I am aiming to upload blogs that help
        fellow engineers out whilst also showing off my latest creations and
        skills.
      </p>
    </div>
  );
};
