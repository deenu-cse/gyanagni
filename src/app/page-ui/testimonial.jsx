import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "This resume builder helped me land my dream job! The templates are professional and easy to customize. Highly recommend it!",
      name: "Sarah Johnson",
      designation: "Software Engineer at TechFlow",
      src: "https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg",
    },
    {
      quote:
        "I was able to create a polished resume in under 30 minutes. The ATS optimization feature is a game-changer!",
      name: "Michael Carter",
      designation: "Marketing Manager at InnovateSphere",
      src: "https://i.pinimg.com/736x/47/91/f0/4791f027dcad85f85883359daf191c5d.jpg",
    },
    {
      quote:
        "The resume builder is incredibly intuitive. I love how I can switch between templates and see instant previews.",
      name: "Emily Davis",
      designation: "HR Specialist at CloudScale",
      src: "https://i.pinimg.com/736x/de/7a/ce/de7acebf5e64a42751cd007b6293ba72.jpg",
    },
    {
      quote:
        "I’ve tried several resume builders, but this one stands out. The customization options are unmatched.",
      name: "James Lee",
      designation: "Data Scientist at DataPro",
      src: "https://i.pinimg.com/736x/55/66/3b/55663bc27bfdc3ce0eda49573ba0319e.jpg",
    },
    {
      quote:
        "The premium features are worth every penny. My resume looks so professional, and I got multiple interview calls within a week!",
      name: "Lisa Martinez",
      designation: "Product Manager at FutureNet",
      src: "https://i.pinimg.com/736x/47/8e/7e/478e7e03fad29ec0dd037ebc135eaaa6.jpg",
    },
  ];
  
  return <AnimatedTestimonials testimonials={testimonials} />;
}

export { AnimatedTestimonialsDemo };
