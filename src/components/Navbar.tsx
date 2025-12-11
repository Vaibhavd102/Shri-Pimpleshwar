// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Darshan", href: "#darshan" },
//   { name: "Events", href: "#events" },
//   { name: "Contact", href: "#contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo */}
//           <a href="#home" className="flex items-center gap-2">
//             <span className="text-2xl md:text-3xl text-primary om-symbol">ॐ</span>
//             <div className="flex flex-col">
//               <span className="font-heading text-sm md:text-base font-semibold text-foreground leading-tight">
//                 श्री पिंपलेश्वर
//               </span>
//               <span className="font-heading text-xs md:text-sm text-primary leading-tight">
//                 महादेव मंदिर
//               </span>
//             </div>
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
//               >
//                 {link.name}
//               </a>
//             ))}
//             <a
//               href="#donate"
//               className="gradient-saffron text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity shadow-soft"
//             >
//               Donate
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-foreground p-2"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden py-4 border-t border-primary/20 animate-fade-in">
//             <div className="flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                   className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//               <a
//                 href="#donate"
//                 onClick={() => setIsOpen(false)}
//                 className="gradient-saffron text-primary-foreground px-6 py-3 rounded-full font-medium text-center hover:opacity-90 transition-opacity shadow-soft"
//               >
//                 Donate
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Darshan", href: "#darshan" },
  { name: "Gallery", href: "#gallery" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl text-primary om-symbol">ॐ</span>
            <div className="flex flex-col">
              <span className="font-heading text-sm md:text-base font-semibold text-foreground leading-tight">
                श्री पिंपलेश्वर
              </span>
              <span className="font-heading text-xs md:text-sm text-primary leading-tight">
                महादेव मंदिर
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#donate"
              className="gradient-saffron text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity shadow-soft"
            >
              Donate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/20 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#donate"
                onClick={() => setIsOpen(false)}
                className="gradient-saffron text-primary-foreground px-6 py-3 rounded-full font-medium text-center hover:opacity-90 transition-opacity shadow-soft"
              >
                Donate
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;