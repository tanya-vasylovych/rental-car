"use client";

type Props = {
  width: number;
  height: number;
  className?: string;
  ariaLabel?: string;
};

export default function Logo({ className, ariaLabel = "RentalCar" }: Props) {
  return (
    <img
      src="/logo/Logo.svg"
      alt={ariaLabel}
      width={104}
      className={className}
      aria-label={ariaLabel}
    />
  );
}
