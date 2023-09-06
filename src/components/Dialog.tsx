import React from "react";
import Button from "./Button";
import classNames from "classnames";

type DialogType = {
  children?: React.ReactNode;
  width?: "fit" | "full" | "1/2" | "1/3";
  cancelButtonText?: string;
  actionButtonText?: string;
  actionButtonColor?:
    | "violet"
    | "pink"
    | "red"
    | "orange"
    | "yellow"
    | "lime"
    | "cyan";
};

const Dialog = ({
  children,
  width,
  cancelButtonText,
  actionButtonText,
  actionButtonColor,
}: DialogType) => {
  return (
    <div
      className={classNames(
        "p-9 dark:bg-slate-850 bg-white  border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center",
        { "w-fit": width === "fit" },
        { "w-full": width === "full" },
        { "w-1/2": width === "1/2" },
        { "w-1/3": width === "1/3" }
      )}
    >
      <div className="flex flex-col gap-4">
        {children}
        <div className="flex space-x-2 mx-auto">
          {cancelButtonText && (
            <button className="text-base">{cancelButtonText}</button>
          )}
          {actionButtonText && (
            <Button
              rounded="full"
              color={actionButtonColor && actionButtonColor}
            >
              <h3>{actionButtonText}</h3>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
