const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <>
      <section>
        <p className="mt-16 text-sm font-medium italic text-center text-foreground md:text-base">
          Built with Next.js 15.1 — Full-Stack Portfolio by Naym Hossen ©{Year}
        </p>
      </section>
    </>
  );
};

export default Footer;
