import Card from 'components/shared/Card';
import {
  HTMLIcon,
  JSIcon,
  ReactIcon,
  ReduxIcon,
} from 'components/shared/Icons';

const Introduction = () => {
  const name = `${`   `}Ajay Kumar`;
  return (
    <div className="mx-auto flex max-w-7xl items-center gap-20 py-16">
      <div className="flex flex-col justify-start gap-4">
        <div className="mb-6 w-fit rounded bg-emerald-400 px-3 py-1.5 text-lg text-white">
          Senior frontend developer
        </div>
        <h1 className="mb-10 text-4xl">
          Hi, I&apos;m<span className="font-semibold">{name}</span>
        </h1>
        <p className="text-2xl leading-12 tracking-wide text-gray-400">
          Passionate senior frontend engineer skilled in web technology, focused
          on crafting seamless user experiences and building innovative web
          solutions
        </p>
      </div>
      <div className="relative flex items-center justify-center">
        <img
          src="/assets/ajay.jpeg"
          alt="ajay-profile"
          className="w-[70rem] rounded-full"
        />
        <Card className="group absolute top-20 left-[-5rem] overflow-hidden rounded-full bg-gray-200 p-4 shadow-lg">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,_rgba(250,185,140,0.8),_white)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <HTMLIcon className="relative z-10 h-12 w-12 fill-orange-500" />
        </Card>
        <Card className="group absolute bottom-5 left-[-2rem] overflow-hidden rounded-full bg-gray-200 p-6 shadow-lg">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,_rgba(151,222,251,0.8),_white)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <ReactIcon className="relative z-10 h-16 w-16 fill-sky-500" />
        </Card>
        <Card className="group absolute top-20 right-[-5rem] overflow-hidden rounded-full bg-gray-200 p-6 shadow-lg">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,_rgba(250,185,140,0.8),_white)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <ReduxIcon className="relative z-10 h-16 w-16 fill-violet-500" />
        </Card>
        <Card className="group absolute right-[-5rem] bottom-20 overflow-hidden rounded-full bg-gray-200 p-6 shadow-lg">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,_rgba(250,185,140,0.8),_white)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <JSIcon className="relative z-10 h-10 w-10 fill-yellow-500" />
        </Card>
      </div>
    </div>
  );
};

export default Introduction;
