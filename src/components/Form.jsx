import React from "react";

const Form = () => (
    <form className="flex flex-col gap-5 w-full max-w-md">
        <label className="font-bold text-lg text-black flex flex-col gap-2">
            Full Name
            <input
                type="text"
                placeholder="Enter your name"
                className="p-3 rounded-lg bg-white/10 text-black focus:bg-cyan-900/20 outline outline-1 outline-gray-400 focus:outline-cyan-500 transition"
            />
        </label>
        <label className="font-bold text-lg text-black flex flex-col gap-2">
            Email
            <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-lg bg-white/10 text-black focus:bg-cyan-900/20 outline outline-1 outline-gray-400 focus:outline-cyan-500 transition"
            />
        </label>
        <label className="font-bold text-lg text-black flex flex-col gap-2">
            Message
            <textarea
                rows={6}
                placeholder="Enter your message"
                className="p-3 rounded-lg bg-white/10 text-black focus:bg-cyan-900/20 outline outline-1 outline-gray-400 focus:outline-cyan-500 resize-none transition"
            />
        </label>
        <button
            type="submit"
            className="mt-4 bg-gray-400 hover:bg-cyan-500 text-white font-bold text-lg rounded-xl py-3 transition"
        >
            Contact Me
        </button>
    </form>
);

export default Form;