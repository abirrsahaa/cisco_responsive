const Events = ({ clicked, setclicked }) => {
  return (
    <>
      <div
        onClick={() => setclicked(!clicked)}
        className="bg-black  absolute top-1/2 left-1/2 w-[90vw] mx-auto rounded-2xl min-h-screen hidden"
      ></div>
    </>
  );
};

export default Events;
