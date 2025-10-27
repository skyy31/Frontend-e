import React from 'react'

interface Props {
    
}

const DisplayData = () => {
    const nama = "Sumayouw Montela"
    const user = {
        nama: "Sumayouw Montela",
        umur: 20,
        job: "Frontend Developer"
    }
    return (
        <h1>Hello nama saya {user.nama}, umur saya {user.umur} tahun, saya seorang {user.job}</h1>
    )
}

export default DisplayData
