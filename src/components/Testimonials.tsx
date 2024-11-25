import React from 'react';
import { Star } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      content: "Working with this developer was an absolute pleasure. The one-page website they created for us perfectly captures our brand and has significantly improved our conversion rates.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content: "The Pimcore implementation exceeded our expectations. The attention to detail and technical expertise made our complex project a success.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Emma Davis",
      role: "Product Owner",
      content: "Outstanding work on our e-commerce platform. The custom features and optimizations have helped us scale our online presence effectively.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Client Testimonials
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Here's what clients say about working with me
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              className="relative p-8 bg-white rounded-xl shadow-md transform transition duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute top-0 -translate-y-1/2 left-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <div className="mt-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}