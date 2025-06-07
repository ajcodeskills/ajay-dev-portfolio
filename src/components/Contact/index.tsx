import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 bg-[#fcf9f9] px-4 py-12 md:flex-row">
      <div className="mb-12 flex max-w-xl flex-1 flex-col items-start justify-center md:mb-0">
        <h1 className="mb-8 font-mono text-4xl leading-tight md:text-5xl">
          Let's make something amazing
          <br />
          together.
        </h1>
        <p className="mb-8 font-mono text-2xl">
          Starts by{' '}
          <a
            href="#contact"
            className="text-blue-500 underline transition-all duration-300 hover:animate-bounce hover:text-blue-700"
          >
            saying hi
          </a>
        </p>
        <a
          href="/AjayKumar_CV.pdf"
          download
          className="mt-4 rounded bg-blue-500 px-6 py-2 font-mono text-white shadow transition-colors hover:bg-blue-600"
        >
          Download CV
        </a>
      </div>
      {/* Right Section */}
      <div className="flex w-full max-w-xl flex-1 flex-col items-start">
        <div className="mb-6">
          <div className="mb-2 font-mono text-gray-500">Information</div>
          <div className="mb-1 font-mono text-2xl">
            Bangalore, Karnataka, India
          </div>
          <div className="font-mono text-3xl font-bold">
            ajaykr.dev914@gmail.com
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
