"use client";

import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const phone = "919623447764"; 
  const message = "Hello! I visited your website and would like to know more about your IT services."; 
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      onClick={() => window.open(url, "_blank")}
      className="bg-green-500 hover:bg-green-600 cursor-pointer text-white flex gap-2 items-center font-medium"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path d="M20.52 3.48C18.24 1.2 15.24 0 12 0C5.37 0 0 5.37 0 12C0 14.28 0.72 16.44 2.04 18.36L0 24L5.76 21.96C7.56 23.04 9.72 24 12 24C18.63 24 24 18.63 24 12C24 8.76 22.8 5.76 20.52 3.48ZM12 21.6C10.08 21.6 8.28 21 6.72 20.04L6.36 19.8L3 21L4.2 17.76L3.96 17.4C2.88 15.84 2.4 14.04 2.4 12C2.4 6.72 6.72 2.4 12 2.4C14.88 2.4 17.64 3.6 19.68 5.64C21.72 7.68 22.92 10.44 22.92 13.32C22.92 18.6 18.6 22.92 12 22.92V21.6ZM18 14.16C17.64 13.92 16.08 13.2 15.72 13.08C15.36 12.96 15.12 12.96 14.88 13.32C14.64 13.68 14.04 14.4 13.8 14.64C13.56 14.88 13.32 14.88 12.96 14.76C11.88 14.28 10.92 13.68 10.08 12.84C9.24 12 8.52 11.04 8.04 9.96C7.92 9.6 7.92 9.36 8.16 9.12C8.28 8.88 8.76 8.28 9 8.04C9.24 7.8 9.36 7.56 9.36 7.2C9.36 6.96 9.36 6.72 9.24 6.48C9.12 6.24 8.4 4.68 8.16 4.32C7.92 3.96 7.68 3.96 7.32 3.96C7.08 3.96 6.84 3.96 6.6 3.96C6.36 3.96 6 3.96 5.76 4.2C5.52 4.44 4.56 5.04 4.56 6.48C4.56 7.92 5.64 9.48 6.72 11.16C7.8 12.84 9.72 14.76 11.4 15.84C13.08 16.92 14.64 18 16.08 18C17.52 18 18.12 17.04 18.36 16.8C18.6 16.56 18.6 16.2 18.6 15.96C18.6 15.72 18.6 15.48 18.6 15.24C18.6 15 18.36 14.4 18 14.16Z" />
      </svg>
      WhatsApp Us
    </Button>
  );
}
