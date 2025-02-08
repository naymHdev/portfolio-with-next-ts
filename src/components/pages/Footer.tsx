const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <>
      <section>
        <p className="mt-16 font-medium md:font-bold text-foreground text-sm text-center italic">
          Built with Next JS 14, Tailwind, Node Js and Framer Motion by Naym
          Hossen ©{Year}
        </p>
      </section>
    </>
  );
};

export default Footer;
