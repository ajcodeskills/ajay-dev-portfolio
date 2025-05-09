import { twMerge } from 'tailwind-merge';

type TCardProps = {
  className: string;
  children: React.ReactNode;
};
const Card = ({ className, children }: TCardProps) => {
  return (
    <div
      className={twMerge(
        'flex items-center justify-center rounded-full',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
