import Link from 'next/link'

const fibonacci = "In fibonacci series, the sum of two adjacent numbers is equal to the following number. For example: 0, 1, 1, 2, 3, 5, etc."

export default function Home() {
    const big_header = "next.js"
    const small_header = "next.js"
    const about = "Next.JS Portfolio"

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
                        <Link href="pages/projects/fibonacci">Fibonacci Series</Link>
                        <p>{fibonacci}</p>
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
    )
}
