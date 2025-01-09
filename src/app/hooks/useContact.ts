import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useToast } from "../contexts/ToastContext";

export const useContact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { showToast } = useToast();

  const handleSubmit = async (event: any) => {
    console.log(12312);
    event.preventDefault();
    emailjs
      .sendForm("service_64el0ej", "template_ao6uwif", form.current!, {
        publicKey: "NGwk9pa_hc7SnM5yM"
      })
      .then(
        () => {
          form.current!.reset();
          showToast("Your message has been sent successfully!", "success");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return { form, handleSubmit };
};
