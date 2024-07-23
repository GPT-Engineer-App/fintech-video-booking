import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Index = () => {
  const [date, setDate] = useState();

  return (
    <div className="flex flex-col min-h-screen bg-[#fefef0]">
      {/* Header Section */}
      <header className="bg-[#232a52] text-[#ffffff] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">FinTech Logo</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-[#fdd3fe]">Home</a></li>
              <li><a href="#" className="hover:text-[#fdd3fe]">About</a></li>
              <li><a href="#" className="hover:text-[#fdd3fe]">Services</a></li>
              <li><a href="#" className="hover:text-[#fdd3fe]">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Video Section */}
        <section className="bg-[#5f2efe] py-16">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="w-full max-w-[50%]">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="bg-[#1c1c1c] text-[#ffffff] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Book a Meeting</h2>
            <p className="text-xl mb-8 text-center">Schedule a meeting with our experts</p>
            <form className="max-w-md mx-auto space-y-4">
              <Input type="text" placeholder="Name" className="bg-[#5b5956] text-[#ffffff]" />
              <Input type="email" placeholder="Email" className="bg-[#5b5956] text-[#ffffff]" />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-[#5b5956]"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <Input type="time" className="bg-[#5b5956] text-[#ffffff]" />
              <Button type="submit" className="w-full bg-[#00ba88] hover:bg-[#96fa9d] text-[#1c1c1c]">Book Meeting</Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-[#232a52] text-[#ffffff] py-8 mt-auto">
        <div className="container mx-auto text-center px-4">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-2xl hover:text-[#fdd3fe]"><Facebook /></a>
            <a href="#" className="text-2xl hover:text-[#fdd3fe]"><Twitter /></a>
            <a href="#" className="text-2xl hover:text-[#fdd3fe]"><Instagram /></a>
            <a href="#" className="text-2xl hover:text-[#fdd3fe]"><Linkedin /></a>
          </div>
          <p>&copy; 2024 FinTech Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;