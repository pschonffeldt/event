import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Link href="/privacy-policy">Privacy policy</Link>
      <Link href="/terms-conditions">Terms and Conditions</Link>
    </footer>
  );
}
