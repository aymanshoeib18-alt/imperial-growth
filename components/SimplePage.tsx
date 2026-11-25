import Header from "./Header";
import Footer from "./Footer";

/** Shell for the funnel and legal pages. */
export default function SimplePage({
  children,
  showCta = false,
  width = "narrow",
}: {
  children: React.ReactNode;
  showCta?: boolean;
  width?: "narrow" | "wide";
}) {
  return (
    <>
      <Header showCta={showCta} />
      <main
        className={`mx-auto w-full flex-1 px-5 py-14 sm:px-8 sm:py-20 ${
          width === "narrow" ? "max-w-2xl" : "max-w-3xl"
        }`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
