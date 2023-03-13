import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Contact.module.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const catHandRef = useRef(null);
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (hasRunRef.current) {
      return;
    }
    hasRunRef.current = true;

    gsap.to(catHandRef.current, {
      translateX: "0px",
      scrollTrigger: {
        start: "top bottom",
        end: "bottom bottom",
        trigger: sectionRef.current,
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="border-b-2 border-black bg-main-darkBlue overflow-hidden"
    >
      <h2 className="py-3 pl-6 border-b-2 border-black text-5xl font-bold uppercase">
        Contact
      </h2>
      <div className="grid md:grid-cols-2 text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
        <div className="flex flex-col justify-center py-8 px-6">
          <p>
            If you&apos;re interested in discussing potential job opportunities
            or just want to chat about web development, I&apos;d love to hear
            from you! Feel free to reach out to me through email or connect with
            me on LinkedIn. I&apos;m always open to new opportunities and would
            be thrilled to discuss how I can contribute to your team.
          </p>
          <br />
          <ul className="flex gap-x-4">
            <li>
              <a
                href="mailto:hafezfahmi2000@gmail.com"
                className={styles.social}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-full p-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/hafezfhmi"
                target="_blank"
                className={styles.social}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full p-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </li>
            <li className={styles.social}>
              <a
                href="https://www.linkedin.com/in/hafezfhmi"
                target="_blank"
                className={styles.social}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full p-3 fill-[#0072b1]"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center py-4 pl-6 overflow-hidden md:py-12">
          <Image
            src="/images/cat-phone.png"
            width={400}
            height={600}
            alt="cat hand passing giving a phone"
            ref={catHandRef}
            className="w-4/5 ml-auto translate-x-3/4 pointer-events-none select-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
