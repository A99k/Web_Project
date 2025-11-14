import React from "react";
import Form from "./Form";

const Contact = () => (
    <section className="flex flex-col md:flex-row justify-between items-start min-h-[80vh] py-16 px-4 md:px-20 text-black font-montserrat gap-10">
        <div className="flex-1 min-w-[260px]">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-12 leading-tight">
                Contact <br /> Me
            </h1>
            <div>
                <h3 className="text-lg font-semibold mb-6">I Also Available on :</h3>
                <div className="flex items-center gap-3 text-lg font-semibold mb-5">
                    <span>Linked in</span>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 rounded px-2 py-1 hover:bg-cyan-500 transition"
                    >
                        <i className="fab fa-linkedin text-xl text-black" />
                    </a>
                </div>
                <div className="flex items-center gap-3 text-lg font-semibold mb-5">
                    <span>Github</span>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 rounded px-2 py-1 hover:bg-cyan-500 transition"
                    >
                        <i className="fab fa-github text-xl text-black" />
                    </a>
                </div>
                <div className="flex items-center gap-3 text-lg font-semibold mb-5">
                    <span>Instagram</span>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 rounded px-2 py-1 hover:bg-cyan-500 transition"
                    >
                        <i className="fab fa-instagram text-xl text-black" />
                    </a>
                </div>
            </div>
        </div>
        <div className="flex-1 flex justify-center">
            <Form />
        </div>
    </section>
);

export default Contact;