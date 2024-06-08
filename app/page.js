import Link from "next/link";

export default function Home() {
  const big_header = "next.js";
  const small_header = "next.js";
  const about = "Next.JS Portfolio";

  return (
    <div className="container">
      <header>
        <div className="sphere">
          <p>{small_header}</p>
          <h1>{big_header}</h1>
          <p>{small_header}</p>
        </div>
      </header>

      <div>
        <section className="one">
          <div className="wrapper">
            <Link href="pages/e-commerce">e-commerce</Link>
          </div>
        </section>
        <section className="two">
          <div className="wrapper">Palindrome Number</div>
        </section>
        <section className="three">
          <div className="wrapper">Armstrong Number</div>
        </section>
        <section className="four">
          <div className="wrapper">Pattern With Numbers</div>
        </section>
      </div>

      <footer>
        <div>
          <p>{about}</p>
        </div>
      </footer>
    </div>
  );
}
