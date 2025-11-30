import Button from '../components/Button';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[900px] w-full">
      <div className="flex flex-col items-center gap-[38px] px-[294px] w-full">
        <h1 className="font-serif text-h1 text-brand-black text-center tracking-[-0.335px]">
          Make it Brutally Simple.
        </h1>
        <Button variant="black">
          Work with us
        </Button>
      </div>
    </section>
  );
}

