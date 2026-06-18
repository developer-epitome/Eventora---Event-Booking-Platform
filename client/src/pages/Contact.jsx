import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Message sent successfully! We will contact you soon.");

        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <div className="min-h-screen py-12">

            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-black text-gray-900 mb-4">
                    Contact Us
                </h1>

                <p className="text-gray-500 text-lg">
                    Have questions? We would love to hear from you.
                </p>
            </div>


            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">


                {/* Contact Information */}
                <div className="bg-gray-900 text-white rounded-3xl p-10 shadow-xl">

                    <h2 className="text-3xl font-bold mb-8">
                        Get In Touch
                    </h2>


                    <div className="space-y-8">


                        <div className="flex items-center gap-5">
                            <div className="bg-white text-gray-900 p-4 rounded-xl">
                                <FaEnvelope />
                            </div>

                            <div>
                                <h3 className="font-bold">
                                    Email
                                </h3>

                                <p className="text-gray-300">
                                    support@eventora.com
                                </p>
                            </div>
                        </div>



                        <div className="flex items-center gap-5">

                            <div className="bg-white text-gray-900 p-4 rounded-xl">
                                <FaPhone />
                            </div>

                            <div>
                                <h3 className="font-bold">
                                    Phone
                                </h3>

                                <p className="text-gray-300">
                                    +91 98765 43210
                                </p>
                            </div>

                        </div>



                        <div className="flex items-center gap-5">

                            <div className="bg-white text-gray-900 p-4 rounded-xl">
                                <FaMapMarkerAlt />
                            </div>

                            <div>

                                <h3 className="font-bold">
                                    Location
                                </h3>

                                <p className="text-gray-300">
                                    Pune, Maharashtra, India
                                </p>

                            </div>

                        </div>


                    </div>

                </div>



                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
                >

                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        Send Message
                    </h2>



                    <div className="space-y-5">


                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />


                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />



                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />



                        <button
                            type="submit"
                            className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-black transition flex items-center justify-center gap-3"
                        >

                            <FaPaperPlane />
                            Send Message

                        </button>


                    </div>


                </form>


            </div>


        </div>
    );
};


export default Contact;