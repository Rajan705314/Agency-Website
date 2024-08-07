import React from 'react'

export default function Stats() {

    const stats = [
        {
            data: "35K",
            title: "Customers"
        },
        {
            data: "10K+",
            title: "Downloads"
        },
        {
            data: "40+",
            title: "Countries"
        },
        {
            data: "30M+",
            title: "Total revenue"
        },
    ]

  return (
    <>
    <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
                
                <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
                    <div className="max-w-2xl">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            We do our best to make customers always happy
                        </h3>
                        <p className="mt-3 max-w-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
                        </p>
                    </div>
                    <div className="flex-none mt-6 md:mt-0 lg:mt-6">
                        <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                            {
                                stats.map((item, idx) => (
                                    <li key={idx} className="">
                                        <h4 className="text-4xl text-indigo-600 font-semibold">{item.data}</h4>
                                        <p className="mt-3 font-medium">{item.title}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                   
                </div>
                <div className="sm:hidden lg:block lg:max-w-xl">
                    <img src="https://th.bing.com/th/id/R.b5fd5552b4503ddb532935e2312e2815?rik=Nd07YtSd6Gn0Pw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fcomputer-transparent-image%2fcomputer-transparent-image-21.png&ehk=L%2fIpNwIxcdXbFAmihG%2fS3a1d5fo7Or1VatOBIP1knWg%3d&risl=&pid=ImgRaw&r=0tps://img.freepik.com/premium-vector/software-code-lines-screen-laptop_251819-2398.jpg" className="rounded-lg" alt="" />
                </div>
            </div>
        </section>
    </>
  )
}
