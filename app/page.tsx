import Image from "next/image";

export default function Home() {
  return (

      <>

        {/* Hero section */}
        <section className="magicpattern w-full flex justify-center items-center">
          
          <div className="cnt-section-text w-[90%] flex justify-center items-center flex-col">
              <h1 className="text-white text-3xl font-bold text-center">The Future of Cooking is Here</h1>

              <p className="text-white text-center my-6 font-bold">Turn Ingredients into Culinary Creations with Ease.</p>


              <div className="flex w-full my-7 justify-around items-center">

                <button className="text-sm px-3 py-2 rounded-sm text-black bg-white">
                  Get Started 🚀
                </button>

                <button className=" text-sm px-3 py-2 rounded-sm text-black bg-white">
                  Learn More 🔍
                </button>


              </div>

          </div>
        </section>

        {/* How it work */}

        <section className="w-full flex flex-col gap-6 justify-center items-center py-12">

            <h1 className="text-xl font-bold">How It Works 🛠️</h1>

            <div className="w-[90%] rounded-sm flex gap-6 justify-center items-center flex-col mt-4 shadow-[-2px_4px_17px_1px_rgba(51,_65,_85,_0.12)] px-6 py-6">

              <h1 className="text-xl text-black text-center font-bold">Your Personal Cooking <br /> Assistant 🍳</h1>

              <ol className="list-decimal px-4">
                <li> Add Your Ingredients 🥕🧅 <br /> Enter what you have in your fridge or pantry.</li>
                <li>Let AI Work Its Magic ✨ <br /> Our smart algorithm generates creative and delicious recipes tailored to your ingredients.</li>
                <li>Start Cooking 🍽️ <br /> Follow simple step-by-step instructions and enjoy your meal!</li> 
              </ol>

            </div>

        </section>
    </>

  );
}
