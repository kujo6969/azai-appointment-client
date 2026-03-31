import { cinzel, fonts } from "@/app/layout";
import Link from "next/link";

const Header = () => {
  const links = [
    { link: "/", label: "AZ+AI", type: "logo" },
    { link: "/appointment", label: "Book Appointment", type: "appointment" },
    { link: "/about", label: "About", type: "link" },
    { link: "/register", label: "Register", type: "link" },
    { link: "/login", label: "Login", type: "link" },
  ];

  const logo = links.find((l) => l.type === "logo");
  const navLinks = links.filter((l) => l.type === "link");
  const appointment = links.find((l) => l.type === "appointment");

  return (
    <div className="flex w-[90%] items-center justify-between p-5 border-b-2 border-gray-500">
      <div>
        {logo && (
          <Link
            href={logo.link}
            className={`${fonts.className} text-4xl tracking-wider`}
          >
            {logo.label}
          </Link>
        )}
      </div>
      <div className="flex gap-6">
        {navLinks.map((link, i) => (
          <Link key={i} href={link.link} className={`${cinzel.className}`}>
            {link.label}
          </Link>
        ))}
      </div>

      <div className="bg-[#FFF7CD] text-black px-3 py-1 rounded-full">
        {appointment && (
          <Link href={appointment.link} className={`${cinzel.className} `}>
            {appointment.label}{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
