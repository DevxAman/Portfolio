import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { toast } from "sonner";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { useInView } from "../utils/hooks";
import { slideIn } from "../utils/motion";

// Contact
export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  // Load the 3D earth (≈3MB model) only when the contact section is close
  const [earthRef, showEarth] = useInView<HTMLDivElement>("300px");

  // handle form change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  // validate form on submit
  const validateForm = () => {
    // form fields
    const { name, email, message } = form;

    type Current = {
      name: boolean;
      email: boolean;
      message: boolean;
    };

    // Error message
    const nameError = document.querySelector("#name-error")!;
    const emailError = document.querySelector("#email-error")!;
    const messageError = document.querySelector("#message-error")!;
    const current: Current = { name: false, email: false, message: false };

    // validate name
    if (name.trim().length < 3) {
      nameError.classList.remove("hidden");
      current["name"] = false;
    } else {
      nameError.classList.add("hidden");
      current["name"] = true;
    }

    const email_regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // valiate email
    if (!email.trim().toLowerCase().match(email_regex)) {
      emailError.classList.remove("hidden");
      current["email"] = false;
    } else {
      emailError.classList.add("hidden");
      current["email"] = true;
    }

    // validate message
    if (message.trim().length < 5) {
      messageError.classList.remove("hidden");
      current["message"] = false;
    } else {
      messageError.classList.add("hidden");
      current["message"] = true;
    }

    // True if all fields are validated
    return Object.keys(current).every(
      (k) => current[k as keyof typeof current],
    );
  };

  // handle form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // prevent default page reload
    e.preventDefault();

    // validate form
    if (!validateForm()) return false;

    // show loader
    setLoading(true);

    // send email
    emailjs
      .send(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Amandeep Singh",
          from_email: form.email.trim().toLowerCase(),
          to_email: import.meta.env.VITE_APP_EMAILJS_RECIEVER,
          message: form.message,
        },
        {
          publicKey: import.meta.env.VITE_APP_EMAILJS_KEY,
        }
      )
      .then(() => toast.success("Thanks for contacting me."))
      .catch((error) => {
        // Error handle
        console.log("[CONTACT_ERROR]: ", error);
        toast.error("Something went wrong.");
      })
      .finally(() => {
        setLoading(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      });
  };

  return (
    <SectionWrapper idName="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-5 xs:p-6 sm:p-8 rounded-2xl border border-white/5"
        >
          {/* Title */}
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8"
          >
            {/* Name */}
            <label htmlFor="name" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name*</span>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                title="What's your name?"
                disabled={loading}
                aria-disabled={loading}
                className="bg-tertiary py-3.5 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent font-medium transition-[border-color,box-shadow] duration-200 focus:border-[#915eff]/70 focus:shadow-[0_0_0_4px_rgba(145,94,255,0.15)] disabled:bg-tertiary/20 disabled:text-white/60"
              />

              {/* Invalid Name */}
              <span className="text-red-400 mt-2 hidden" id="name-error">
                Invalid Name!
              </span>
            </label>

            {/* Email */}
            <label htmlFor="email" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email*</span>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="johndoe@email.com"
                title="What's your email?"
                disabled={loading}
                aria-disabled={loading}
                className="bg-tertiary py-3.5 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent font-medium transition-[border-color,box-shadow] duration-200 focus:border-[#915eff]/70 focus:shadow-[0_0_0_4px_rgba(145,94,255,0.15)] disabled:bg-tertiary/20 disabled:text-white/60"
              />

              {/* Invalid Email */}
              <span className="text-red-400 mt-2 hidden" id="email-error">
                Invalid E-mail!
              </span>
            </label>

            {/* Message */}
            <label htmlFor="message" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message*</span>
              <textarea
                rows={7}
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hello there!"
                title="What do you want to say?"
                disabled={loading}
                aria-disabled={loading}
                className="bg-tertiary py-3.5 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent font-medium transition-[border-color,box-shadow] duration-200 focus:border-[#915eff]/70 focus:shadow-[0_0_0_4px_rgba(145,94,255,0.15)] disabled:bg-tertiary/20 disabled:text-white/60 disabled:resize-none"
              />

              {/* Invalid Message */}
              <span className="text-red-400 mt-2 hidden" id="message-error">
                Invalid Message!
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              title={loading ? "Sending..." : "Send"}
              className="bg-[#915eff] hover:bg-[#7c4ae6] active:scale-[0.98] py-3 px-8 outline-none w-full xs:w-fit text-white font-bold shadow-lg shadow-[#915eff]/20 rounded-xl transition-[background-color,transform] duration-200 focus-visible:ring-2 focus-visible:ring-white/60 disabled:bg-tertiary/20 disabled:text-white/60 disabled:shadow-none"
              disabled={loading}
              aria-disabled={loading}
            >
              {/* check loader state */}
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* Earth Model */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[300px]"
        >
          <div ref={earthRef} className="w-full h-full">
            {showEarth && <EarthCanvas />}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
