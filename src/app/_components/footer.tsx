import { assert } from "console";
import Container from "./container";

export function Footer() {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t">
      <Container>
        <div className="">
          <h3 className="text-center">
          Copyright Hari - 2024
          </h3>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
