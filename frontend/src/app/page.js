"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/context/AuthContext";

import Hero from "@/components/Hero";
import HowItWorks from "@/components/Howitworks";
import Footer from "@/components/Footer";

export default function Home() {
  const { user } = UserAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  return (
    <div>

      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        
        <section className="relative min-h-screen snap-start ">
          <Hero />
          <a
            href="#next-section"
            class="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-3xl animate-bounce text-gray-500"
          >
            ↓{" "}
          </a>
        </section>
        <section className="min-h-screen snap-start ">
          <HowItWorks />
        </section>
      </div>
    </div>
  );
}
