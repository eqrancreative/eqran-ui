import { RadioGroup, Stack, Container, Flex, Box, Text, useToast, background } from "@chakra-ui/react"
import { useState, useEffect, useRef, useContext, FormEvent, ChangeEvent } from 'react';
import { InputAtom, CheckboxAtom, ButtonAtom, RadioAtom, TextAreaAtom } from '../atoms/_index'
import { ColorContext } from "@/context/ColorContext";
import Content from "../molecules/Content";
import emailjs from "@emailjs/browser"
import Header from "@/organisms/Header";

const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID ?? '';
const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '';
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const ProposalForm = (props: any) => {

  const toast = useToast();
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
        toast({
          title: 'teste',
          description: 'teste'
        });
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
    <>
      <Header mode={'light'} />
      <Flex
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'flex-start'}
        p={'60px 72px 100px'}
        // gap={'219px'}

        bg={color.gray50}
      >
        <Flex
          w={'376px'}
          direction={'column'} alignItems={'flex-start'}
          gap={'8px'} padding={0}
        >
          <Text
            fontWeight={700} fontSize={'14px'} lineHeight={'18px'} letterSpacing={'0.06em'}
            h={'18px'} color={color.gray100}
          >
            SOLICITE SUA PROPOSTA
          </Text>
          <Text
            fontWeight={500} fontSize={'32px'} lineHeight={'40px'} letterSpacing={'0.02em'}
            color={color.gray500} w={'376px'} h={'40px'}
          >
            Vamos construir juntos
          </Text>
          <Text
            fontWeight={500} fontSize={'20px'} lineHeight={'24px'} letterSpacing={'0.02em'}
            w={'308px'} h={'48px'} color={color.gray300}>
            Conte-nos sobre o seu projeto e como podemos ajudá-lo.
          </Text>
        </Flex>
        <Flex
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          p={'32px'} mr={'72px'} gap={'32px'}
          w={'556px'}
        >
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
                placeholder={'(81) 8 8888-8888'}
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
              <Flex
                flexDirection={'column'}
                alignItems={'flex-start'}
                p={'0px'} gap={'16px'}
                onChange={() => { }}
              >
                <CheckboxAtom title={'Sites'} value={'Sites'} />
                <CheckboxAtom title={'Blog'} value={'Blog'} />
                <CheckboxAtom title={'Página de destino (Landing Page)'} value={'Landing Page'} />
                <CheckboxAtom title={'E-commerce'} value={'E-commerce'} />
                <CheckboxAtom title={'Aplicativo'} value={'Aplicativo'} />
                <CheckboxAtom title={'Sistema'} value={'Sistema'} />
              </Flex>
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
              <RadioGroup onChange={setDeadline} value={deadline} w={'443px'}>
                <Stack direction='column' gap={'8px'}> {/* TODO: Ajustar o gap para 16px após descobrir como remover a margin-top dos Radios*/}
                  <RadioAtom value='30 dias' title={'30 dias'} />
                  <RadioAtom value='45 dias' title={'45 dias'} />
                  <RadioAtom value='60 dias' title={'60 dias'} />
                  <RadioAtom
                    value='Não há um (Temos tempo, use tudo oque você precisa.)'
                    title={'Não há um (Temos tempo, use tudo oque você precisa.)'}
                  />
                  <RadioAtom
                    value='Preciso para ontem (Com isso, entendo que terei que investir mais devido ao prazo curto.)'
                    title={'Preciso para ontem (Com isso, entendo que terei que investir mais devido ao prazo curto.)'}
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
                <Stack direction='column' gap={'8px'}>
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
            style={{
              width: '100%',
              height: '48px',

              color: color.gray50,
              backgroundColor: color.gray800,

              _hover: {
                backgroundColor: color.gray900,
              }
            }}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default ProposalForm;