import React from "react";
import Button from "./Button";

export interface ModalProps {
  title: string | React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  okText?: string;
  cancelText?: string;
  onOk?: () => void;
  onCancel?: () => void;
}

export default function Modal({
  title,
  children,
  open,
  okText = "OK",
  cancelText,
  onOk = () => {},
  onCancel = () => {},
}: ModalProps) {
  return (
    open && (
      <div
        className="z-999 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10"
        onClick={() => onOk()}
      >
        <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
          <div className="w-full">
            <div className="mx-auto my-20 max-w-[400px] flex flex-col gap-5">
              <h1 className="text-5xl font-extrabold text-center">{title}</h1>
              <div className="text-xl leading-relaxed text-center">
                {children}
              </div>
              <div className="flex flex-row items-stretch gap-4">
                {cancelText && (
                  <Button
                    color="red"
                    className="grow"
                    onClick={() => onCancel()}
                  >
                    <h3>{cancelText}</h3>
                  </Button>
                )}
                {okText && (
                  <Button className="grow" onClick={() => onOk()}>
                    <h3>{okText}</h3>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
