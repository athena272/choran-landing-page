import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./Contact.module.scss";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Loading from "@/components/Loading";
import SuccessModal from "@/components/SuccessModal";
import ErrorModal from "@/components/ErrorModal";

interface FormValues {
    name: string;
    email: string;
    phone: string;
    segment: string;
}

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);

    const formik = useFormik<FormValues>({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            segment: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Campo obrigatório"),
            email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
            phone: Yup.string()
                .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, "Digite um telefone válido")
                .required("Campo obrigatório"),
            segment: Yup.string().required("Selecione um segmento"),
        }),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values) => handleSubmitForm(values),
    });

    const handleSubmitForm = async (values: FormValues) => {
        setIsLoading(true);
        try {
            await axios.post("/api/sendEmail", {
                messageBody: `Nome: ${values.name}, Email: ${values.email}, Telefone: ${values.phone}, Segmento: ${values.segment}`,
            });

            formik.resetForm();
            setIsLoading(false);
            setSuccessModal(true);
        } catch (error) {
            setIsLoading(false);
            setErrorModal(true);
        }
    };

    const closeModal = () => {
        setSuccessModal(false);
        setErrorModal(false);
    };

    return (
        <>
            {successModal && <SuccessModal closeModal={closeModal} />}
            {errorModal && <ErrorModal closeModal={closeModal} />}
            {isLoading && <Loading />}

            <div className={styles.container} id="contact">
                <div className={styles.texts}>
                    <span>ENTRE EM CONTATO</span>
                    <h2>Soluções de marketing para os mais <strong>diversos negócios</strong> de <strong>diversos tamanhos.</strong></h2>
                    <p>Preencha o formulário</p>
                </div>

                <div className={styles.form}>
                    <form id="contact-form" onSubmit={formik.handleSubmit}>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Nome completo"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            required
                        />
                        {formik.errors.name && <span className={styles.error}>{formik.errors.name}</span>}

                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="E-mail profissional"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            required
                        />
                        {formik.errors.email && <span className={styles.error}>{formik.errors.email}</span>}

                        <Input
                            id="phone"
                            name="phone"
                            type="text"
                            placeholder="Celular/Whatsapp"
                            pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            required
                        />
                        {formik.errors.phone && <span className={styles.error}>{formik.errors.phone}</span>}

                        <Select
                            id="segment"
                            name="segment"
                            placeholder="Selecione o segmento do seu negócio"
                            options={[
                                { label: "E-commerce", value: "ecommerce" },
                                { label: "Infoprodutos", value: "infoprodutos" },
                                { label: "Serviços", value: "servicos" },
                                { label: "Saúde & Bem-estar", value: "saude" },
                                { label: "Educação", value: "educacao" },
                                { label: "Imobiliário", value: "imobiliario" },
                                { label: "Varejo", value: "varejo" },
                                { label: "Indústria", value: "industria" },
                                { label: "Tecnologia", value: "tecnologia" },
                                { label: "Alimentação", value: "alimentacao" },
                                { label: "Beleza & Estética", value: "beleza" },
                                { label: "Turismo & Hotelaria", value: "turismo" },
                                { label: "Construção Civil", value: "construcao" },
                                { label: "Entretenimento", value: "entretenimento" },
                                { label: "Consultoria & Coaching", value: "consultoria" },
                                { label: "Moda & Vestuário", value: "moda" },
                                { label: "Automotivo", value: "automotivo" },
                                { label: "Saúde Mental", value: "saude_mental" },
                                { label: "Marketing & Publicidade", value: "marketing" },
                                { label: "Esportes & Fitness", value: "esportes" },
                                { label: "Jurídico & Advocacia", value: "juridico" },
                                { label: "Recursos Humanos", value: "rh" },
                                { label: "Agronegócio", value: "agronegocio" },
                                { label: "Logística & Transporte", value: "logistica" },
                                { label: "Energia & Sustentabilidade", value: "energia" },
                                { label: "Eventos & Produção Cultural", value: "eventos" },
                                { label: "Outro", value: "outro" }
                            ]}
                            onChange={formik.handleChange}
                            value={formik.values.segment}
                            required
                        />
                        {formik.errors.segment && <span className={styles.error}>{formik.errors.segment}</span>}

                        <Button type="submit" title="RECEBER INFORMAÇÕES" kind="full" onClick={() => console.log("Click on the button!")} />
                    </form>
                </div>

                <div className={styles.footer}>
                    <p>
                        Ao enviar esse formulário, você reconhece que leu e concorda com a nossa
                        <Link href="/">
                            <span> Política de Privacidade.</span>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
