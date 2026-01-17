const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center sticky top-0  z-50 p-4 bg-base-100 shadow-lg">
      <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
        ET
        <span className="text-accent">DV</span>
      </a>
      <ul className=" hidden  md:flex space-x-6 font-semibold text-lg">
        <a href="#Accueil" className="btn btn-sm btn-ghost">
          Acceuil
        </a>
        <a href="#Apropos" className="btn btn-sm btn-ghost">
          A propos
        </a>
        <a href="#Programmes" className="btn btn-sm btn-ghost">
          Programmes
        </a>
        <a href="#Galleries" className="btn btn-sm btn-ghost">
          Galleries
        </a>
        <a href="#Evenements" className="btn btn-sm btn-ghost">
          Evènements
        </a>
        <a href="#Contact" className="btn btn-sm btn-ghost">
          Contact
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
