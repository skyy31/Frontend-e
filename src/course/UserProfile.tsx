import { useState} from "react"

type User = {
    name: string;
    age: number;
};

const UserProfile = () => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <div>
            {user ? (
                <>
                    <h1>{user.name}</h1>
                    <p>Age: {user.age}</p>
                </>
            ) : (
                <p>No user data available</p>
            )}
        </div>
    )
}

export default UserProfile;
