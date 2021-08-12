// Code EyesOnMe Component Here
function EyesOnMe() {
  return (
    <button
      onFocus={() => {
        console.log("Good!");
      }}
      onBlur={() => {
        console.log("Hey! Eyes on me!");
      }}
    >
      Hey! Eyes on me!
    </button>
  );
}

export default EyesOnMe;
