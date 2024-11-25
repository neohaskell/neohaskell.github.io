import React, { useEffect } from "react";
import Modal from "./Modal";

const localStorageLabel = "has-seen-discord-disclaimer";
const latestDisclaimerVersion = 1;

export default function Disclaimer() {
  const [disclaimerOpen, setDisclaimerOpen] = React.useState(false);
  useEffect(() => {
    setDisclaimerOpen(
      (0 | parseInt(localStorage.getItem(localStorageLabel))) <
        latestDisclaimerVersion
    );
  }, []);

  function dismissDisclaimer() {
    setDisclaimerOpen(false);
    localStorage.setItem(localStorageLabel, latestDisclaimerVersion.toString());
  }
  return (
    <div className="absolute left-1/2 top-1/2">
      <Modal
        open={disclaimerOpen}
        okText="Continue on my own"
        onOk={dismissDisclaimer}
        title="Greetings traveller!"
      >
        <p>
          The NeoHaskell project is a work-in-progress effort in it's early
          days. Mostly everything is missing (
          <a
            className="underline"
            href="/docs/extra-topics/news-announcements"
            target="_blank"
            onClick={dismissDisclaimer}
          >
            click here for a status report
          </a>
          ). But, if you really want to know more about the project:
        </p>
        <a
          className="text-lightsecondary hover:underline hover:decoration-wavy underline-offset-4 py-4 block"
          href="https://discord.com/invite/wDj3UYzec8"
          target="_blank"
          onClick={dismissDisclaimer}
        >
          <h3>JOIN THE DISCORD SERVER!</h3>
        </a>
      </Modal>
    </div>
  );
}
