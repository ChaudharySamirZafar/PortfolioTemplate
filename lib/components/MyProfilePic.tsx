import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="drop-shadow-xl shadow-black rounded-full mx-auto"
        src={"/images/profilePic.png"}
        width={200}
        height={200}
        alt="Samir Zafar"
        priority={true}
      />
    </section>
  );
}
