import Image, { type ImageProps } from "next/image";
import LogoImage from '../../public/logo.svg'
import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" role="img" aria-label="Veg logo">
      <Image
        src={LogoImage}
        alt="Logo"
        width={48}
        height={48}
      />
    </Link>
  );
}