import Card from '../CardCmp/Card';

const HomePage = () => {
  return (
    <>
      <section className="py-10 bg-bgGray mt-20">
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card />
        </div>
      </section>
    </>
  );
};

export default HomePage;
