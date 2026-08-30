import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function EnquiryPage() {
  return (
    <main className="min-h-screen bg-white pt-16 md:pt-20">
      <Navbar />
      <EnquiryForm />
      <Footer />
    </main>
  );
}
