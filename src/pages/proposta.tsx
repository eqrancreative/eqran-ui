import { RadioGroup, Stack, Container, Flex, Box, Text } from "@chakra-ui/react"
import { useState, useEffect, useRef, useContext, FormEvent, ChangeEvent } from 'react';
import { InputAtom, CheckboxAtom, ButtonAtom, RadioAtom, TextAreaAtom } from '../atoms/_index'
import { ColorContext } from "@/context/ColorContext";
import Content from "../molecules/Content";
import emailjs from "@emailjs/browser"

const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID ?? '';
const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '';
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const ProposalForm = () => {

    const formRef = useRef<HTMLFormElement>(null);
    const color = useContext(ColorContext)

    const [name, setName] = useState<string>();
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [projectDescription, setProjectDescription] = useState<string>();
    const [projectDetails, setProjectDetails] = useState<string>();
    const [platforms, setPlatforms] = useState([]);
    const [deadline, setDeadline] = useState<string>();
    const [budget, setBudget] = useState<string>();
    const [formSent, setFormSent] = useState(false);

    //TODO: Create a string concat to merge the checkbox values
    function handleCheckbox(e: ChangeEvent) {
        // platforms.map((item) => {
        //     {... item,  }
        // })
    }

    function sendEmail(e: FormEvent) {
        e.preventDefault()

        const params = {
            customer: name,
            phone_number: phoneNumber,
            email: email,
            project: projectDescription,
            details: projectDetails,
            platforms: platforms,
            deadline: deadline,
            budget: budget
        }

        emailjs.send(serviceID, templateID, params, publicKey)
            .then(() => {
                setFormSent(true);
                formRef.current?.reset();
            })
    }

    useEffect(() => {
        if (formSent) {
            setFormSent(false)
        }
    }, [formSent])

    return (
        <form ref={formRef} style={{ background: color.lightBackground }}>
            <Flex flexDirection={'row'} justifyContent={'space-between'}>
                <Box mt={'60px'} ml={'72px'}>
                    <Text fontSize={14} fontWeight={700} mb={'8px'} lineHeight={'8px'} color={color.grey002}>
                        SOLICITE SUA PROPOSTA
                    </Text>
                    <Text fontSize={32} fontWeight={500} mb={'8px'} lineHeight={'40px'} color={color.grey001}>
                        Vamos construir juntos
                    </Text>
                    <Text w={'308px'} fontWeight={500} lineHeight={'24px'} color={color.grey003}>
                        Conte-nos sobre o seu projeto e como podemos ajudá-lo.
                    </Text>
                </Box>
                <Container m={0} mt={'60px'} mr={'111px'} mb={'132px'} p={'32px'} maxW={'556px'}>
                    <Content
                        label={'Seu nome'}
                        child={
                            <InputAtom
                                type={'text'}
                                placeholder={'Digite seu nome'}
                                function={
                                    (e: ChangeEvent<HTMLFormElement>) => setName(e.target.value)
                                }
                            />
                        }
                    />
                    <Content
                        label={'Seu telefone'}
                        child={
                            <InputAtom
                                type={'text'}
                                placeholder={'(81) 88888-8888'}
                                function={
                                    (e: ChangeEvent<HTMLFormElement>) => setPhoneNumber(e.target.value)
                                }
                            />
                        }
                    />
                    <Content
                        label={'Seu e-mail'}
                        child={
                            <InputAtom
                                type={'text'}
                                placeholder={'email@domínio.com'}
                                function={
                                    (e: ChangeEvent<HTMLFormElement>) => setEmail(e.target.value)
                                }
                            />
                        }
                    />
                    <Content
                        label={'O que você tem em mente?'}
                        child={
                            <Stack spacing={5} direction='column' onChange={() => { }}>
                                <CheckboxAtom title={'Site'} value={'Site'} />
                                <CheckboxAtom title={'Blog'} value={'Blog'} />
                                <CheckboxAtom title={'Página de destino (Landing Page)'} value={'Landing Page'} />
                                <CheckboxAtom title={'E-commerce'} value={'E-commerce'} />
                                <CheckboxAtom title={'Aplicativo'} value={'Aplicativo'} />
                                <CheckboxAtom title={'Sistema'} value={'Sistema'} />
                            </Stack>
                        }
                        isInput={false}
                    />
                    <Content
                        label={'Conte-nos sobre o projeto'}
                        child={
                            <TextAreaAtom
                                placeholder={'Descreva mais sobre seu modelo de negócio.'}
                                function={
                                    (e: ChangeEvent<HTMLFormElement>) => setProjectDescription(e.target.value)
                                }
                            />
                        }
                    />
                    <Content
                        label={'É importante entender melhor sobre o seu negócio.'}
                        child={
                            <TextAreaAtom
                                placeholder={'Descreva mais sobre seu modelo de negócio.'}
                                function={
                                    (e: ChangeEvent<HTMLFormElement>) => setProjectDetails(e.target.value)
                                }
                            />
                        }
                    />
                    <Content
                        label={'Qual seria um prazo estimado?'}
                        child={
                            <RadioGroup onChange={setDeadline} value={deadline}>
                                <Stack direction='column'>
                                    <RadioAtom value='30 dias' title={'30 dias'} />
                                    <RadioAtom value='45 dias' title={'45 dias'} />
                                    <RadioAtom value='60 dias' title={'60 dias'} />
                                    <RadioAtom
                                        value='Não há um (Temos tempo, use tudo oque você precisa'
                                        title={'Não há um (Temos tempo, use tudo oque você precisa'} />
                                    <RadioAtom
                                        value='Preciso para ontem (Com isso, entendo que terei que investir mais devido ao prazo curto.'
                                        title={'Preciso para ontem (Com isso, entendo que terei que investir mais devido ao prazo curto.'}
                                    />
                                </Stack>
                            </RadioGroup>
                        }
                        isInput={false}
                    />
                    <Content
                        label={'Existe uma predefinição de orçamento?'}
                        child={
                            <RadioGroup onChange={setBudget} value={budget}>
                                <Stack direction='column'>
                                    <RadioAtom value='Até 2 mil' title={'Até 2 mil'} />
                                    <RadioAtom value='De 2 a 5 mil' title={'De 2 a 5 mil'} />
                                    <RadioAtom value='De 5 a 10 mil' title={'De 5 a 10 mil'} />
                                    <RadioAtom value='De 10 a 20 mil' title={'De 10 a 20 mil'} />
                                    <RadioAtom value='Prefiro não informar' title={'Prefiro não informar'} />
                                </Stack>
                            </RadioGroup>
                        }
                        isInput={false}
                    />
                    <ButtonAtom
                        title={'SOLICITAR PROPOSTA'}
                        action={sendEmail}
                    />
                </Container>
            </Flex>
        </form>
    )
}

export default ProposalForm;