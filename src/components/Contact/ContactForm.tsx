import Card from 'components/shared/Card';

const ContactForm = () => {
  return (
    <Card className="flex min-w-lg flex-col items-center justify-start overflow-hidden rounded-lg border border-blue-400 bg-[#f6f3f3] p-6 shadow-lg">
      <form className="relative z-10 flex w-full flex-col gap-6">
        <h2 className="mb-2 w-full border-b border-blue-400 px-1 pb-1 font-mono text-lg text-blue-500">
          Get in touch
        </h2>
        <input
          type="text"
          placeholder="Name"
          className="border-b border-blue-400 bg-transparent px-1 py-2 text-gray-700 placeholder-gray-500 transition-colors focus:border-blue-600 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-b border-blue-400 bg-transparent px-1 py-2 text-gray-700 placeholder-gray-500 transition-colors focus:border-blue-600 focus:outline-none"
        />
        <textarea
          placeholder="Message"
          rows={3}
          className="resize-none border-b border-blue-400 bg-transparent px-1 py-2 text-gray-700 placeholder-gray-500 transition-colors focus:border-blue-600 focus:outline-none"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600 focus:outline-none"
          >
            Send
          </button>
        </div>
      </form>
    </Card>
  );
};

export default ContactForm;
