import { useNavigate  } from "react-router-dom";

import { MdPerson, MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Container, Title, Column, TitleLogin, SubtitleLogin, FazerLoginText, Row, TextoComum, Wrapper } from './styles';

import { useForm } from "react-hook-form";

const Cadastro = () =>
{
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const handleClickSignIn = () => {
        navigate('/login')
    }
    
    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.</Title>
                </Column>
                <Column>
                    <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit()}>
                        <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="nome"  control={control} />
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                        {errors.senha && <span>Senha é obrigatório</span>}
                        <Button title="Entrar" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <TextoComum>
                            Ao clicar em "criar minha conta grátis",
                            <br />
                            declaro que aceito as Políticas de
                            <br />
                            Privacidade e os Termos de Uso da DIO"
                        </TextoComum>
                    </Row>
                    <Row>
                        <TextoComum>Já tenho conta.</TextoComum>
                        <FazerLoginText onClick={handleClickSignIn}>Fazer login</FazerLoginText>
                    </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Cadastro }; 