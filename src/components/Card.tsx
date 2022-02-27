const cards = [
        {
          id: 1,
          imageSrc: '/images/1.png',
          imageAlt: "///",
        },
        {
                id: 2,
                imageSrc: '/images/2.png',
                imageAlt: "///",
              },
              {
                id: 3,
                imageSrc: '/images/3.png',
                imageAlt: "///",
              },
              {
                id: 4,
                imageSrc: '/images/4.png',
                imageAlt: "///",
              },
      ]
      
      export default function Card() {
        return (
                <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col md:flex-row justify-center items-center  gap-6 px-8 py-10 mx-auto">
                {cards.map((card) => (
      <div key={card.id} className="brand group">
        <img src={card.imageSrc} alt="fill" width='360px' height='450px' />
      </div>
))}
    </section>
        )
      }