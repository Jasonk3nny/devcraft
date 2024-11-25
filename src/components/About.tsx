import React from 'react';
import { Code2, Globe, Coffee, Laptop } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Passionate about creating exceptional digital experiences
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="relative">
            <div className="relative">
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80&w=800&h=1000"
                  alt="Developer working"
                  className="object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 rounded-lg p-6 shadow-xl">
                <div className="flex items-center space-x-2 text-white">
                  <Code2 className="h-6 w-6" />
                  <span className="text-lg font-semibold">5+ Years Experience</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="space-y-8">
            <div className="prose prose-lg">
              <h3 className="text-2xl font-bold text-gray-900">Hi, I'm Jason Kenny</h3>
              <p className="text-gray-600 mt-4">
                As a full-stack web developer based in Salzburg, Austria, I specialize in crafting beautiful, functional websites that help businesses succeed online. With over 5 years of experience in web development, I've developed a deep understanding of both front-end and back-end technologies.
              </p>
              <p className="text-gray-600 mt-4">
                My expertise lies in creating one-page websites that tell compelling stories and Pimcore CMS implementations that make content management a breeze. I believe in writing clean, maintainable code and creating user experiences that delight and engage.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <Globe className="h-8 w-8 text-blue-600 mb-4" />
                <h4 className="font-semibold text-gray-900">Modern Tech Stack</h4>
                <p className="text-gray-600 mt-2">Using latest web technologies for optimal performance</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <Coffee className="h-8 w-8 text-blue-600 mb-4" />
                <h4 className="font-semibold text-gray-900">Problem Solver</h4>
                <p className="text-gray-600 mt-2">Turning complex challenges into elegant solutions</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <Laptop className="h-8 w-8 text-blue-600 mb-4" />
                <h4 className="font-semibold text-gray-900">Responsive Design</h4>
                <p className="text-gray-600 mt-2">Ensuring perfect display across all devices</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <Code2 className="h-8 w-8 text-blue-600 mb-4" />
                <h4 className="font-semibold text-gray-900">Clean Code</h4>
                <p className="text-gray-600 mt-2">Writing maintainable, efficient code</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</div>
              <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">TypeScript</div>
              <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Node.js</div>
              <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Pimcore</div>
              <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">PHP</div>
              <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">TailwindCSS</div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}