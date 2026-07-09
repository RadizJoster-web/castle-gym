import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from "react-icons/ri";

export default function SocialMedia() {
  return (
    <div>
      <h4 className="font-body text-primary mb-5">Follow Us</h4>

      <div className="flex gap-4">
        <a
          href="#"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border-color text-secondary transition-all duration-300 hover:border-primary hover:text-primary"
        >
          <RiInstagramLine size={22} />
        </a>

        <a
          href="#"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border-color text-secondary transition-all duration-300 hover:border-primary hover:text-primary"
        >
          <RiFacebookCircleLine size={22} />
        </a>

        <a
          href="#"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border-color text-secondary transition-all duration-300 hover:border-primary hover:text-primary"
        >
          <RiTwitterXLine size={20} />
        </a>

        <a
          href="#"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border-color text-secondary transition-all duration-300 hover:border-primary hover:text-primary"
        >
          <RiYoutubeLine size={22} />
        </a>
      </div>
    </div>
  );
}
