type Props = {
    name?: string;
    age?: number;
    isStudent?: boolean;
}

const PropsComponent = ({ name, age, isStudent }: Props) => {
    return (
        <>
            <h1>
                Hello nama saya {name}, saya berumur {age} tahun dan status saya adalah {isStudent ? " Mahasiswa" : " Bukan Mahasiswa"}
            </h1>
        </>
    );
}

export default PropsComponent;
