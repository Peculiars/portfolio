import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GridGlobe } from "./GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  id,
  img,
  imgClassName,
  spareImg,
  titleClassName,
  description,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: string | number;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  titleClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input text-white relative row-span-1 overflow-hidden flex flex-col justify-between space-y-4 rounded-3xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
      style={{
        background: 'rgb(7,4,29)',
        backgroundColor: 'linear-gradient(90deg, rgba(7, 4, 29, 1) 0%, rgba(12, 14, 35, 1) 100%)',
      }}
    >
        <div className={`${id === 6 ? 'flex justify-center h-full' : ''}`}>
            <div>
                {img && (
                    <img src={img} alt={img} className={cn(imgClassName, 'object-cover', 'object-center')} />
                )}
            </div>
            <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                {spareImg && (
                    <img src={spareImg} alt={spareImg} className="object-cover object-center w-full h-full" />
                )}
            </div>
            {id === 6 && (
              <BackgroundGradientAnimation>
                <div className="absolute z-50 items-center justify-center text-white font-bold"/>
              </BackgroundGradientAnimation>
            )}
            <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10">
              {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-80 text-neutral-600 dark:text-neutral-200">
              {title}
            </div>
          {id === 2 && ( <GridGlobe/> )}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {['Reactjs', 'Nextjs', 'Tailwindcss', 'Typescript', 'Javascript', 'Nodejs'].map((item) => (
                  <span key={item} className="py-2 lg:py-4 px-3 lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e] text-xs font-medium text-neutral-600 dark:text-neutral-200">
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg bg-[#10132e] text-center"/>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};
