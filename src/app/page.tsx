"use client";
import React from "react";
import Container from "./_components/container";
import About from "./_components/about";
export default function Index() {
  return (
    <main>
      <Container>
        <section className="my-2">
          <About />
        </section>
      </Container>
    </main>
  );
}
