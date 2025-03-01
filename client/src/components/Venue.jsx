import React from "react";
import { motion } from "framer-motion";
import { MapPin, Bus, Train, Plane } from "lucide-react";

function Venue() {
  return (
    <div className="min-h-screen bg-gray-100  p-4">
      <div className="inline-block bg-white border-4 border-black py-3 px-6 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-10 ml-28">
            <h2 className="text-3xl font-bold">Venue</h2>
          </div>
      <div className="flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl overflow-hidden max-w-5xl w-full border border-gray-200 "
      >
        <div className="flex flex-col md:flex-row border-black border-4 ">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full md:w-1/2 h-[400px] md:h-auto relative bg-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4903.486149707512!2d80.0367138759944!3d12.819404087482159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f76c4db87a47%3A0x341fa471f8027d68!2sSRM%20University%2C%20Kattankulathur%2C%20Tamil%20Nadu%20603203!5e1!3m2!1sen!2sin!4v1740809355106!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </motion.div>

          {/* Info Section */}
          <div className="w-full md:w-1/2 p-6">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl font-bold text-gray-900"
            >
              SRM University, Kattankulathur
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-600 mt-2"
            >
              Potheri, SRM Nagar, Kattankulathur,
              <br />
              Tamil Nadu 603203
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://maps.app.goo.gl/iePSYbgAq7LYkRJ77"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-orange-500 mt-2 hover:text-orange-600 transition-colors"
            >
              <MapPin size={16} className="mr-1" />
              Open in Google Maps
            </motion.a>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-xl font-bold text-gray-900 mt-6"
            >
              Getting There
            </motion.h2>

            {/* Transportation Options */}
            <div className="mt-4 space-y-4">
              {/* Bus */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Bus size={20} className="text-purple-600" />
                  </div>
                  <h3 className="ml-3 font-semibold text-gray-900">Bus</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="font-medium mr-1">•</span>{" "}
                    <span>
                      Route 500: From Chennai to SRM University. Buses depart
                      three times a day and the journey takes approximately 1
                      hour.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-1">•</span>{" "}
                    <span>
                      Route T60 or T60 LSS: From Tambaram to SRM or Potheri
                      stop. Approximately 20-minute travel time from Tambaram to
                      SRM IST.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Train */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Train size={20} className="text-purple-600" />
                  </div>
                  <h3 className="ml-3 font-semibold text-gray-900">Train</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="font-medium mr-1">•</span>{" "}
                    <span>
                      Suburban Train: From Chennai Fort to Potheri Halt. Trains
                      depart every 30 minutes, with a journey time of
                      approximately 1 hour and 12 minutes.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Airport */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Plane size={20} className="text-purple-600" />
                  </div>
                  <h3 className="ml-3 font-semibold text-gray-900">Airport</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="font-medium mr-1">•</span>{" "}
                    <span>
                      Taxi: From Chennai International Airport to SRM
                      University. The journey takes approximately 36 minutes and
                      costs between ₹1,000 and ₹1,300.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-1">•</span>{" "}
                    <span>
                      Prepaid Taxi Service: Available inside the airport, with
                      fares typically ranging from ₹800 to ₹900, depending on
                      demand.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    </div>
  );
}

export default Venue;
