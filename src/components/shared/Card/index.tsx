import { twMerge } from 'tailwind-merge';

type TCardProps = {
  className?: string;
  children: React.ReactNode;
};
const Card = ({ className, children }: TCardProps) => {
  return (
    <div
      className={twMerge(
        'card hover:card-hover relative flex items-center justify-center bg-[#e0e0e0] transition-all duration-300 ease-in-out',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
