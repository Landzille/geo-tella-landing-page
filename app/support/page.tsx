import type { Metadata } from "next";
import SupportPage from "@/components/supportPage";
import Footer from "@/components/footer";
import Copyright from "@/components/copyright";

export const metadata: Metadata = {
  title: "Geotela support",
  description:
    "Get help with Geotela. Contact us, report content, manage your account.",
};

export default function Support() {
  return (
    <>
      <SupportPage />
      <Footer />
      <Copyright />
    </>
  );
}
