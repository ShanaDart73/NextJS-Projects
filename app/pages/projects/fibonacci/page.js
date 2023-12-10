import Link from 'next/link'

let num1 = 0, num2 = 1, num3
const array = [0, 1]

export const recursive = (count) => {
    if (count > 0) {
        num3 = num1 + num2
        num1 = num2
        num2 = num3
        array.push(num3)
        recursive(count - 1)
    }
    return array
}

const Page = () => {
    const arrNum = recursive(5)

    return (
        <div className="content">
            <nav>
                <Link href="/">Home</Link>
            </nav>
            <div>
                <h2>Fibonacci Series</h2>
            </div>
            <div>
                <p>
                    {arrNum.map((value) =>
                        <span key={value}>{value + ", "}</span>
                    )}
                </p>
            </div>
        </div>
    )
}

export default Page