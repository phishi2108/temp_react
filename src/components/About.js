import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 py-10 md:px-16 lg:px-32 text-gray-800 dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-red-600 dark:text-red-400">About Us</h1>

        <p className="text-lg mb-6">
          Welcome to <span className="font-semibold text-gray-900 dark:text-white">FoodieHub</span> – your one-stop destination for the most delicious and fastest food delivery service in town!
          Whether you're craving spicy Indian dishes, cheesy pizzas, or refreshing beverages, we've got it all covered and delivered to your doorstep in minutes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-700 dark:text-gray-300">Our Mission</h2>
        <p className="mb-6">
          We’re here to bring joy to your meals by connecting you with your favorite restaurants.
          Our goal is to offer fast, reliable, and hygienic food delivery experiences with just a few clicks.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-700 dark:text-gray-300">Why Choose Us?</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Wide range of cuisines and partner restaurants</li>
          <li>Fast delivery with live order tracking</li>
          <li>Easy-to-use interface with secure payments</li>
          <li>Exclusive deals and discounts every day</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-700 dark:text-gray-300">Meet the Creator</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-red-500 dark:text-red-400">Piyush Ramje</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-200">
            I’m a passionate B.Tech IT student and the creator of this platform. With a love for both technology and food, I built this website to make food delivery more efficient, enjoyable, and accessible.
          </p>
          <p className="mt-2 italic text-sm text-gray-600 dark:text-gray-400">
            "Great food. Great tech. Delivered with heart."
          </p>
        </div>

        <div className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} FoodieHub | Created by Piyush Ramje. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default About;
