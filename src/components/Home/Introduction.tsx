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
    <div className="py-16px mx-auto flex items-center gap-20">
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
        <Card className="absolute top-10 left-[-2rem] h-20 w-20 rounded-full">
          <HTMLIcon className="relative h-12 w-12 fill-orange-400" />
        </Card>
        <Card className="absolute right-2 bottom-2 h-36 w-36 rounded-full">
          <ReactIcon className="relative z-10 h-24 w-24 fill-sky-500" />
        </Card>
        <Card className="absolute top-10 right-[-2rem] h-24 w-24 rounded-full">
          <ReduxIcon className="relative z-10 h-16 w-16 fill-violet-500" />
        </Card>
        <Card className="absolute bottom-10 left-[-2rem] h-16 w-16 rounded-full">
          <JSIcon className="relative z-10 h-8 w-8 fill-yellow-500" />
        </Card>
      </div>
    </div>
  );
};

export default Introduction;
