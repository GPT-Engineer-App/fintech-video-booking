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
import { Calendar as CalendarIcon } from "lucide-react";

const Index = () => {
  const [date, setDate] = useState();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">FinTech Logo</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Video Section */}
      <section className="bg-blue-900 py-16">
        <div className="container mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Book a Meeting</h2>
          <p className="text-xl mb-8 text-center">Schedule a meeting with our experts</p>
          <form className="max-w-md mx-auto space-y-4">
            <Input type="text" placeholder="Name" className="bg-gray-800 text-white" />
            <Input type="email" placeholder="Email" className="bg-gray-800 text-white" />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
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
            <Input type="time" className="bg-gray-800 text-white" />
            <Button type="submit" className="w-full">Book Meeting</Button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-4">
            {/* Placeholder social media icons */}
            <a href="#" className="text-2xl">📘</a>
            <a href="#" className="text-2xl">🐦</a>
            <a href="#" className="text-2xl">📸</a>
            <a href="#" className="text-2xl">🔗</a>
          </div>
          <p>&copy; 2024 FinTech Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;