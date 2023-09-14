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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh sed pulvinar
        proin gravida hendrerit lectus. Diam maecenas sed enim ut sem viverra
        aliquet eget. Ac felis donec et odio pellentesque diam volutpat.
      </p>
    </div>
  );
};
