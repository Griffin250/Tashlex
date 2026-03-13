import { useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";

const FloatingBookButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        size="lg"
        className="fixed bottom-8 right-8 rounded-full shadow-lg hover:shadow-xl transition-shadow animate-pulse bg-orange-500 hover:bg-orange-600"
      >
        <Phone className="w-5 h-5 mr-2" />
        Book a Call
      </Button>
      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default FloatingBookButton;
