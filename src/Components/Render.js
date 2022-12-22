import React, { useEffect, useState } from 'react'
// import '../Styles/Render.css'


const Render = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {

            fetch('http://127.0.0.1:8000/api/post-user/')
                .then((res) => res.json())
                .then((rep) => setData(rep.data), setIsLoading(false))
        }, 3000)

    })
    if (isLoading) {
        return (
            <div className='itsloading1'>
                its loading
            </div>
        )
    }

    return (
        <div className='myrender'>
            <div>
                <div>
                    {data.map((datum) => {
                        const { id, title,created,thumbnail,body } = datum
                        return (
                            <div>
                                <div key={id}>
                                    <p>{title}</p>
                                    <p >{created} </p>
                                    <img src={thumbnail} alt="" />
                                    <p>{body}</p>
                                    <small>By Yvonne Weideman</small>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Render