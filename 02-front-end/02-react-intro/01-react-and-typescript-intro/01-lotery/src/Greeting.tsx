function Greeting() {
  const firstName = 'Name';
  const lastName = 'Lastname';

  return (
    <>
      <h1 className="greeting">
        Olá {`${firstName} ${lastName}`}
        <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
      </h1>
    </>
  );
}

export default Greeting;
