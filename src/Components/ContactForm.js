import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const {
    control,
    formState: { errors },
    trigger,
  } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Trigger validation before sending the email
    const isValid = await trigger();

    if (isValid) {
      emailjs.sendForm("service_loynpfn", "template_qpx3o6m", e.target, "UuRiOOjesc0IR48il");
      setIsSuccess(true);
    }
  };

  return (
    <div className="pt-10">
      <hr className="mb-4 border-t border-gray-300" />

      <form
        onSubmit={sendEmail}
        className="bg-ebony-500 text-gray-888888 rounded-md"
      >
        <div className="-mx-4 flex flex-wrap">
          <div className="mb-4 w-1/2 px-4">
            <label htmlFor="name" className="font-medium mb-2 block text-sm">
              Name
            </label>
            <Controller
              name="name" // Set the name attribute to match your HTML structure
              control={control}
              defaultValue=""
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    id="name"
                    type="text"
                    name="name" // Set the name attribute to match your HTML structure
                    className="w-full rounded-md border border-gray-300 bg-[#EBEBEB] p-2 text-[#888888]"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="mb-4 w-1/2 px-4">
            <label htmlFor="email" className="font-medium mb-2 block text-sm">
              Email
            </label>
            <Controller
              name="email" // Set the name attribute to match your HTML structure
              control={control}
              defaultValue=""
              rules={{
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    id="email"
                    type="text"
                    name="email" // Set the name attribute to match your HTML structure
                    className="w-full rounded-md border border-gray-300 bg-[#EBEBEB] p-2 text-[#888888]"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>
              )}
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="font-medium mb-2 block text-sm">
            Message
          </label>
          <Controller
            name="message" // Set the name attribute to match your HTML structure
            control={control}
            defaultValue=""
            rules={{ required: "Message is required" }}
            render={({ field }) => (
              <div>
                <textarea
                  {...field}
                  id="message"
                  name="message" // Set the name attribute to match your HTML structure
                  className="w-full rounded-md border border-gray-300 bg-[#EBEBEB] p-2 text-[#888888]"
                  rows="4"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>
            )}
          />
        </div>

        <button
          type="submit"
          className="w-[100%] rounded-md bg-[#fd9d4d] py-2 text-white"
        >
          Send
        </button>
        {isSuccess && (
          <p className="text-green-500 mt-[10px]">Email sent successfully!</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
