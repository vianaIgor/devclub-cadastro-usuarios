import { useEffect, useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import TopBackground from '../../components/TopBackground';
import Trash from '../../assets/trash.svg'
import { Container, Title, ContainerUsers, CardUsers, TrashIcon, AvatarUsers } from './styles';



function ListUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/users')

            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUsers(id) {
        await api.delete(`/users/${id}`)

        const updatedUsers = users.filter(user => user.id !== id )

        setUsers(updatedUsers)
    }

    const navigate = useNavigate();

    return (
        <Container>
            <TopBackground />
            <Title>Lista de Usuários</Title>

            <ContainerUsers>
                {users.map((user) => (
                        <CardUsers key={user.id}>
                    <AvatarUsers src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
                    <div>
                        <h3>{user.name}</h3>
                        <p>{user.age}</p>
                        <p>{user.email}</p>                                              
                    </div>
                        <TrashIcon src={Trash} alt='icone-deletar' onClick={() => deleteUsers(user.id)}/>
                        </CardUsers>
                ))}

            </ContainerUsers>
            <Button type='button' onClick={() => navigate('/')}>
                Voltar
            </Button>
        </Container>
    );
}

export default ListUsers
