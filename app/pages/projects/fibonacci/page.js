import Link from 'next/link'

const Page = () => {
    return (
        <div className="content">
            <nav>
                <Link href="/">
                    <h3>Home</h3>
                </Link>
            </nav>
            <div>
                <h1>Fibonacci Series</h1>
            </div>
            <div>
                <h2>My code goes here</h2>
            </div>
        </div>
    )
}

export default Page