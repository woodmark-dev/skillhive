import Nav from "./nav";
import Footer from "./footer";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
