import CardNav from './CardNav'

const Navbar = () => {
  const items = [
    {
      label: "About",
      bgColor: "#000000ff",
      textColor: "#fff",
      links: [
        { label: "Home", ariaLabel: "About Company", href: "/" },
        { label: "Careers", ariaLabel: "About Careers", href: "/about/company" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#000000ff",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "/about/company" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" , href: "/about/company"}
      ]
    },
    {
      label: "Contact",
      bgColor: "#000000ff", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "/about/company" },
        { label: "Twitter", ariaLabel: "Twitter", href: "/about/company" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "/about/company" }
      ]
    }
  ];

  return (
    <CardNav
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Navbar