import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-lightergray py-[20px] text-center text-[16px] text-black/80 font-[410]">
      <p>&copy; 2022 Appstest</p>
      <div className="mt-[12px]">
        <Link href="/">
          <a href="">Terms & Conditions</a>
        </Link>{" "}
        | {}
        <Link href="/">Privacy Policy</Link> | {}
        <Link href="/">Sitemap</Link>
      </div>
    </div>
  );
};

export default Footer;
