import React from 'react'

const StudentDescription = (props) => {
    console.log('Props do Componente', props);

    return (
        <>
            <div>
                {/* <h3>StudentDescription</h3> */}
                <strong>Nome: </strong><span>{props.nome}</span> <br />
                <strong>Idade: </strong><span>{props.idade}</span> <br />
            </div>
            <hr />
        </>

    )
}

export default StudentDescription