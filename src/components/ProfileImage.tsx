"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ProfileImage = () => {
  return (
    <div className="flex items-center justify-start mb-8">
      {/* Animated Card */}
      <motion.div
        className="relative rounded-3xl shadow-lg shadow-primaryColor bg-[#122b3c]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Blob SVG Background */}
        <motion.div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            background: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3ClinearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"%3E%3Cstop offset="0%" style="stop-color:%2322ACF5;stop-opacity:1" /%3E%3Cstop offset="100%" style="stop-color:%23FF6F91;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill="url(%23grad1)" d="M57.5,-54.6C71.4,-44.4,74.7,-22.2,69.9,-4.3C65.1,13.7,52.2,27.5,38.2,38.8C24.2,50.2,9.1,59,-9.2,62.3C-27.6,65.6,-55.1,63.3,-63.4,49.5C-71.7,35.7,-60.9,10.5,-55.4,-13.2C-49.9,-37,-49.8,-59.3,-38.2,-70.1C-26.7,-80.9,-13.4,-80.3,2.6,-83.1C18.6,-86,37.2,-92.1,57.5,-84.4Z" transform="translate(100 100)" /%3E%3C/svg%3E') no-repeat center`,
            backgroundSize: "cover",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        />

        {/* Profile Image */}
        <motion.div
          className="relative z-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            className="rounded-3xl"
            src="/images/naym-logo.png"
            alt="Naym Hossen Full Stack Developer"
            width={250}
            height={150}
            priority
            placeholder="blur"
            blurDataURL="/placeholder-image.jpg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileImage;
