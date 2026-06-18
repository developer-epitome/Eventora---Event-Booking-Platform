import React from "react";
import { FaCalendarCheck, FaUsers, FaTicketAlt, FaShieldAlt } from "react-icons/fa";

const About = () => {
    return (
        <div className="min-h-screen py-12">

            {/* Hero */}
            <div className="bg-gray-900 text-white rounded-3xl p-12 md:p-20 text-center shadow-2xl mb-16">

                <h1 className="text-5xl md:text-6xl font-black mb-6">
                    About Eventora
                </h1>

                <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
                    Eventora is a modern event management platform designed to help
                    people discover, book, and experience amazing events easily.
                    From concerts and workshops to conferences and festivals,
                    we bring every experience closer to you.
                </p>

            </div>



            {/* Mission */}
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 mb-16">


                <div className="bg-white rounded-3xl p-10 shadow-lg border">

                    <h2 className="text-3xl font-bold text-gray-900 mb-5">
                        Our Mission
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        Our mission is to make event booking simple, fast, and secure.
                        We connect event organizers with audiences while providing
                        a smooth booking experience.
                    </p>

                </div>



                <div className="bg-white rounded-3xl p-10 shadow-lg border">

                    <h2 className="text-3xl font-bold text-gray-900 mb-5">
                        Our Vision
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        We aim to become a trusted platform where everyone can
                        discover memorable experiences and create lifelong memories.
                    </p>

                </div>


            </div>



            {/* Features */}

            <div className="max-w-6xl mx-auto px-4">

                <h2 className="text-4xl font-black text-center text-gray-900 mb-10">
                    Why Choose Us?
                </h2>


                <div className="grid md:grid-cols-4 gap-6">


                    <div className="bg-white p-8 rounded-2xl shadow border text-center">
                        <FaCalendarCheck className="text-4xl mx-auto mb-4"/>
                        <h3 className="font-bold text-lg">
                            Easy Booking
                        </h3>
                        <p className="text-gray-500 text-sm mt-2">
                            Book your favourite events quickly.
                        </p>
                    </div>



                    <div className="bg-white p-8 rounded-2xl shadow border text-center">
                        <FaUsers className="text-4xl mx-auto mb-4"/>
                        <h3 className="font-bold text-lg">
                            Community
                        </h3>
                        <p className="text-gray-500 text-sm mt-2">
                            Connect with event communities.
                        </p>
                    </div>




                    <div className="bg-white p-8 rounded-2xl shadow border text-center">
                        <FaTicketAlt className="text-4xl mx-auto mb-4"/>
                        <h3 className="font-bold text-lg">
                            Digital Tickets
                        </h3>
                        <p className="text-gray-500 text-sm mt-2">
                            Manage tickets anytime.
                        </p>
                    </div>




                    <div className="bg-white p-8 rounded-2xl shadow border text-center">
                        <FaShieldAlt className="text-4xl mx-auto mb-4"/>
                        <h3 className="font-bold text-lg">
                            Secure
                        </h3>
                        <p className="text-gray-500 text-sm mt-2">
                            Safe and reliable platform.
                        </p>
                    </div>


                </div>

            </div>



            {/* Footer message */}
            <div className="text-center mt-16">

                <h2 className="text-3xl font-bold text-gray-900">
                    Experience Events Differently
                </h2>

                <p className="text-gray-500 mt-3">
                    Eventora — where moments become memories.
                </p>

            </div>


        </div>
    );
};


export default About;