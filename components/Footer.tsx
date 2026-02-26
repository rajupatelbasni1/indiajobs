import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-white mt-16 py-14 px-6 border-t">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-2xl font-bold">Why Choose IndiaJobs?</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div>
            <h3 className="font-semibold">✔ Daily Updates</h3>
            <p className="text-gray-600 mt-2">
              We provide fastest updates on govt & private jobs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">✔ All Jobs in One Place</h3>
            <p className="text-gray-600 mt-2">
              Admit cards, results, forms, notifications everything available.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">✔ Easy to Use</h3>
            <p className="text-gray-600 mt-2">
              Simple interface for students and job seekers.
            </p>
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-6">
          <SocialIcons />
        </div>

        {/* Legal Links */}
        <div className="mt-10 text-sm text-gray-600 flex flex-wrap justify-center gap-3">
          <a href="/about" className="hover:text-black">About Us</a>
          <a href="/contact" className="hover:text-black">Contact Us</a>
          <a href="/disclaimer" className="hover:text-black">Disclaimer</a>
          <a href="/dmca" className="hover:text-black">DMCA</a>
          <a href="/privacy-policy" className="hover:text-black">Privacy Policy</a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} IndiaJobs.co — All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}