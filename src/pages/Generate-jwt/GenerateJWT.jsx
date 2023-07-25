import generateJwt from "../../api/jwt";

const GenerateJWT = () => {

    const jwtCreate = () => {
        generateJwt({ email: "ab@gmail.com" })
    }

    return (
        <div className="py-36">
            <button onClick={jwtCreate} className="border border-y-lime-100 p-4 bg-gray-500 text-white">Generate Jwt</button>
        </div>
    );
};

export default GenerateJWT;