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
      <Hero />
      <HowItWorks />
      <Footer />
    </div>
  );
}
