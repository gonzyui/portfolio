import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Link from "next/link";

const words = ["gonzyui", "developer", "anime lover", "AI enthusiast", "gamer"];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const typeSpeed = 120;
  const deleteSpeed = 50;
  const pauseDelay = 1000;

  useEffect(() => {
    const currentWord = words[index];
    let timeout: NodeJS.Timeout;

    if (!deleting && text !== currentWord) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, typeSpeed);
    } else if (!deleting && text === currentWord) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, pauseDelay);
    } else if (deleting && text !== "") {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, deleteSpeed);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
      <>
        <SEO
            title="Gonzyui | Developer Portfolio"
            description="Full-stack developer passionate about AI, Python, TypeScript, and anime/manga applications."
        />
        <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white px-6">
          <motion.h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500">{text}</span>
            <motion.span className="animate-blink inline-block">|</motion.span>
          </motion.h1>

          <motion.p className="text-lg text-gray-300 max-w-2xl mb-6">
            I build powerful applications with
            <span className="text-green-400"> Python</span> and
            <span className="text-teal-400"> TypeScript</span>, focusing on tools that help the
            <span className="text-red-400"> anime & manga</span> community.
          </motion.p>

          <Link href="/projects" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition">
              View My Projects
          </Link>
        </section>
      </>
  );
}