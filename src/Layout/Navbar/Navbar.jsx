import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        border-b
        bg-white/90
        backdrop-blur-md
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
        "
      >
        <Logo />

        <DesktopNav />

        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
