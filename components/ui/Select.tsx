"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

type SelectProps = {
  id: string;
  name: string;
  options: readonly string[];
  defaultValue?: string;
  required?: boolean;
};

const triggerClasses =
  "flex w-full cursor-pointer items-center justify-between border border-line bg-surface px-4 py-3 text-left text-[15px] text-ink " +
  "transition-colors duration-300 hover:border-muted/60 " +
  "focus:border-accent focus:outline-none";

export default function Select({
  id,
  name,
  options,
  defaultValue,
  required,
}: SelectProps) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue ?? options[0] ?? "");
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.max(0, options.indexOf(defaultValue ?? options[0] ?? "")),
  );

  useEffect(() => {
    if (!open) return;
    listRef.current?.focus();

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  function choose(option: string) {
    setValue(option);
    setActiveIndex(options.indexOf(option));
    setOpen(false);
    rootRef.current?.querySelector("button")?.focus();
  }

  function onTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (
      event.key === "ArrowDown" ||
      event.key === "ArrowUp" ||
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      setOpen(true);
    }
  }

  function onListKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => Math.min(current + 1, options.length - 1));
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) => Math.max(current - 1, 0));
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const option = options[activeIndex];
      if (option) choose(option);
      return;
    }
    if (event.key === "Escape" || event.key === "Tab") {
      setOpen(false);
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} required={required} />
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={onTriggerKeyDown}
        className={`${triggerClasses} ${open ? "border-accent" : ""}`}
      >
        <span>{value}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 12 8"
          className={`size-3 shrink-0 text-muted transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </svg>
      </button>

      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          tabIndex={-1}
          aria-activedescendant={`${id}-option-${activeIndex}`}
          onKeyDown={onListKeyDown}
          className="absolute z-20 mt-1.5 w-full border border-ink bg-surface py-1 shadow-[0_16px_40px_rgba(16,16,20,0.1)] focus:outline-none"
        >
          {options.map((option, optionIndex) => {
            const selected = option === value;
            const active = optionIndex === activeIndex;
            return (
              <li
                key={option}
                id={`${id}-option-${optionIndex}`}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setActiveIndex(optionIndex)}
                onClick={() => choose(option)}
                className={`flex cursor-pointer items-center justify-between px-4 py-2.5 text-[15px] transition-colors duration-150 ${
                  selected
                    ? "bg-accent text-white"
                    : active
                      ? "bg-accent-soft text-ink"
                      : "text-ink"
                }`}
              >
                {option}
                {selected && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 12 10"
                    className="size-3 shrink-0"
                  >
                    <path
                      d="M1 5 L4.5 8.5 L11 1.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="square"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
