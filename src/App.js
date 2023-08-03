import { useEffect } from "react";
import "./styles.css";
export default function App() {
  useEffect(() => {
    setKeyDisplayOnClick();
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (event) => {
    const key = event.key.toUpperCase();
    getSound(key);
    setKeyDisplayOnKeyDown();
  };
  const drumPads = [
    {
      keyCode: 81,
      keyName: "Heater 1",
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      keyName: "Heater 2",
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      keyName: "Heater 3",
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      keyName: "Heater 4",
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      keyName: "Clap",
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      keyName: "Open-HH",
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      keyName: "Kick-n'-Hat",
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      keyName: "Kick",
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      keyName: "Closed-HH",
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  function getSound(findKey) {
    // console.log(findKey);
    const sound = document.getElementById(findKey);
    // console.log(sound);
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
    // sound.play();
  }
  function setKeyDisplayOnClick() {
    const buttonElements = document.querySelectorAll(".drum-pad");
    const keyDisplay = document.getElementById("keyDisplay");

    buttonElements.forEach((button) => {
      button.addEventListener("click", () => {
        const keyAttribute = button.getAttribute("name");
        keyDisplay.textContent = keyAttribute;
      });
    });
  }
  // not working
  function setKeyDisplayOnKeyDown() {
    const buttonElements = document.querySelectorAll(".drum-pad");
    const keyDisplay = document.getElementById("keyDisplay");

    document.addEventListener("keydown", (event) => {
      const key = event.key.toUpperCase();

      buttonElements.forEach((button) => {
        const keyAttribute = button.getAttribute("name");
        if (keyAttribute === key) {
          keyDisplay.textContent = keyAttribute;
          // Perform additional actions if needed
        }
      });
    });
  }
  return (
    <>
      <h1>Hello CodeSandbox</h1>
      <div id="drum-machine">
        <div id="display">
          <div className="drum-pads">
            {drumPads.map((key) => (
              <button
                onClick={() => {
                  getSound(key.text);
                }}
                className="drum-pad"
                id={key.keyCode}
                name={key.keyName}
              >
                {key.text}
                <audio className="clip" id={key.text} src={key.src}></audio>
              </button>
            ))}
          </div>
          <div id="keyDisplay"></div>
        </div>
      </div>
    </>
  );
}
