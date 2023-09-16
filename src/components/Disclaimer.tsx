import React from "react";
import Modal from "./Modal";

export default function Disclaimer() {
  const [disclaimerOpen, setDisclaimerOpen] = React.useState(true);
  return (
    <div className="absolute left-1/2 top-1/2">
      <Modal
        open={disclaimerOpen}
        okText="Continue on my own"
        onOk={() => setDisclaimerOpen(!disclaimerOpen)}
        title="Greetings traveller!"
      >
        <p>
          The NeoHaskell project is a work-in-progress effort in it's early
          days. Mostly everything is missing. If you're curious about the
          project:
        </p>
        <a
          className="text-lightsecondary hover:underline hover:decoration-wavy underline-offset-4 py-4 block"
          href="https://discord.com/invite/wDj3UYzec8"
          target="_blank"
          onClick={() => setDisclaimerOpen(!disclaimerOpen)}
        >
          <h3>JOIN THE DISCORD SERVER!</h3>
        </a>
      </Modal>
    </div>
  );
}
