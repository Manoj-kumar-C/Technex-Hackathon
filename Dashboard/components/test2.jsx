import detectSpam from "../spamDetector";

const Home = () => {
  const [answer, setAnswer] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const message = event.target.elements.message.value;
    const result = await detectSpam(message);
    setAnswer(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Message:</label>
        <input type="text" id="message" name="message" />
        <button type="submit">Submit</button>
      </form>
      <div>
        Result: {answer}
      </div>
    </div>
  );
};

export default Home;