import { ModelsWrapper, ModelSection, Carousel1, Maps, NavBar, Modal} from "../Model";
import { Container, ParticleBackground, Button, ButtonForm } from "./styles";

import Home from "../../styles/Home.module.css";
import Quemsomos from "../../styles/Quemsomos.module.css";
import Servicos from "../../styles/Servicos.module.css";
import Time from "../../styles/Time.module.css";
import Contato from "../../styles/Contato.module.css";
import Edital from "../../styles/Edital.module.css";

import Logomarca from "../../assets/img/logomarca_white.png";
import Logotipo from "../../assets/img/logotipo_bg.png";
import Avatar from "../../assets/img/avatar.png";
 import Icon1 from "../../assets/img/icon_1.png";
/*import Icon2 from "../../assets/img/icon_2.png"; */
import IconBlock from "../../assets/img/icon_block.png";
import Email from "../../assets/img/email.png";
import Telefone_icon from "../../assets/img/telefone_icon.png";
import Localizacao_icon from "../../assets/img/localizacao_icon.png";
import Youtube_icon from "../../assets/img/Youtube_icon.png";
import Instagram_icon from "../../assets/img/Instagram_icon.png";
import Twitter_icon from "../../assets/img/Twitter_icon.png";
import Facebook_icon from "../../assets/img/Facebook_icon.png";
import IconAppDesign from "../../assets/img/icon_app_design.png";
import IconDesenvolvimento from "../../assets/img/icon_desenvolvimento.png";
import IconRequisitos from "../../assets/img/icon_requisitos.png";
import IconValores from "../../assets/img/compassion.png";
import IconMissao from "../../assets/img/valores.png";

import particlesConfig from "../../assets/particlesConfig.json";

import Particles from "react-particles-js";


function Page() {
  return (
    <>
    <ParticleBackground>
       {/*  <Particles
          params={{
            particles: {
              number: {
                value: 10,
              },
              size: {
                value: 3,
              },
            },
          }}
        /> */}
        <Particles params={{particlesConfig}} className="App-particles__container" />
      
      </ParticleBackground>
    <Container>
      <NavBar/>
      
      <ModelsWrapper>
        <div>
          {/*Home*/}
          <ModelSection>
            <div className={Home.container} id="home">
              <div className={Home.hero}>
                <img className={Home.logomarca} src={Logomarca} alt="" />
                <span className={Home.description}> Conectando Tecnologia com Grandes Ideias </span>
                <span className={Home.description}> Fábrica de software do iCEV  </span>
                {/* <a href="#edital">
                  <Button>Edital</Button>
                </a> */}
              </div>
            </div>
          </ModelSection>
          {/*Quem somos*/}
          <ModelSection>
            <div className={Quemsomos.container} id="quem-somos">
              <div className={Quemsomos.leftContainer}>
                <div className={Quemsomos.description}>
                  <h2>Biticev</h2>
                  <span>
                  <p>
                    Tendo em vista a missão da Escola de Tecnologia Aplicada do 
                    iCEV de fornecer à comunidade Piauiense um espaço de suporte
                     a propostas inovadoras, nasce a Fábrica de Software - BitiCEV, 
                     em 2021. Desse modo, visamos proporcionar a conquista da 
                     excelência e eficiência no desenvolvimento de iniciativas 
                     empreendedoras, por meio da disponibilização de serviços 
                     voltados ao desenvolvimento de aplicações de TI. 
                      <br />
                      <br />
                    Ademais, somos um contexto de desenvolvimento acadêmico, uma
                     vez que professores e docentes realizam trabalho integrado 
                     para seleção e execução de abordagens criativas, ágeis e 
                     diferenciadas para a prestação dessas funções, sempre atentos 
                     às responsabilidades sociais alcançadas.
                    </p>
                  </span>
                </div>

                <div className={Quemsomos.list}>
                  <div className={Quemsomos.item}>
                    <img className={Quemsomos.icone} src={IconMissao} alt="" />
                    <div className={Quemsomos.item__description}>
                      <h3>Missão</h3>
                      <p>
                      Proporcionamos serviços de consultoria, curadoria, design 
                      e desenvolvimento de software, por meio da atuação em um
                       espaço inovador, com integração de alunos e professores 
                       em uma jornada de aprendizagem criativa.
                      </p>
                    </div>
                  </div>
                  <div className={Quemsomos.item}>
                    <img className={Quemsomos.icone} src={IconValores} alt="" />
                    <div className={Quemsomos.item__description}>
                      <h3>Valores</h3>
                      <p>
                      Fornecer orientação e direção a idealização, planejamento 
                      e construção de produtos tecnológicos, com foco na praticidade,
                       velocidade e qualidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Quemsomos.rightContainer}>
                <img className={Quemsomos.logotipo} src={Logotipo} alt="" />
              </div>
            </div>
          </ModelSection>

          {/*EDital */}
          <ModelSection>
            <div className={Edital.container} id="quem-somos">
              <div className={Edital.leftContainer}>
                <div className={Edital.description}>
                  <h2>Edital</h2>
                  <span>
                    <p>
                      O Edital visa selecionar propostas para desenvolvimento de
                      artefatos de software pela Fábrica Educacional de Software 
                      da iCEV - BitiCEV.
                      <br />
                      <br />
                      O iCEV, disponibiliza por meio deste edital, sua Fábrica 
                      Educacional de Software - BitiCEV para apoio a projetos, 
                      com vistas ao estabelecimento de ações para o fortalecimento 
                      destas entidades e que contribuam para o incremento das atividades inovadoras,
                    na forma do desenvolvimento de aplicações de TI. 
                    </p>
                  </span>
                </div>

                <div className={Edital.list}>
                  <div className={Edital.item}>
                    <img className={Edital.icone} src={Icon1} alt="" />
                    <div className={Edital.item__description}>
                      <h3>Inscrição</h3>
                      <p>
                        As inscrições abriram no dia 17/11/2021 e se encerram em 
                        17/12/2021 às 18 horas. 
                        Acesse o edital vigente e confira todas as regras para participação.
                      </p>
                    </div>
                  </div>
                  <div className={Edital.inscricao}>
                      <Button>Edital</Button>
                      <Modal> 
                        Inscrição
                      </Modal>
                  </div>
                </div>
              </div>
              <div className={Edital.rightContainer}>
                <img className={Edital.logotipo} src={Logotipo} alt="" />
              </div>
            </div>
          </ModelSection>

          {/*Servicos*/}
          <ModelSection>
            <div className={Servicos.container} id="servicos">
              <h2>Serviços</h2>
              <div className={Servicos.list}>
                <div className={Servicos.item}>
                  <img className={Servicos.icone} src={IconDesenvolvimento} alt="" />
                  <h3>Desenvolvimento</h3>
                  <p>Construção de aplicações com metodologias ágeis e aplicações de padrões de projetos, tendo em vista a qualidade, manutenibilidade e escalabilidade do projetos.</p>
                </div>

                <div className={Servicos.item}>
                  <img className={Servicos.icone} src={IconAppDesign} alt="" />
                  <h3>Design UI/UX</h3>
                  <p>Realização de prototipagem de projetos, tendo em foco a excelência da experiência de uso do usuário na aplicação, em consonância com a missão e valores almejados.</p>
                </div>

                <div className={Servicos.item}>
                  <img className={Servicos.icone} src={IconRequisitos} alt="" />
                  <h3>Consultoria</h3>
                  <p>Por meio da realização de técnicas de elicitação, determinam-se e analisam-se Requisitos Funcionais e Não Funcionais de projetos em estágio de concepção</p>
                </div>

                {/* <div className={Servicos.item}>
                  <img className={Servicos.icone} src={IconBlock} alt="" />
                  <h3>Desenvolvimento</h3>
                  <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                </div>

                <div className={Servicos.item}>
                  <img className={Servicos.icone} src={IconBlock} alt="" />
                  <h3>Desenvolvimento</h3>
                  <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                </div>

                <div className={Servicos.item}>
                  <img className={Servicos.icone} src={IconBlock} alt="" />
                  <h3>Desenvolvimento</h3>
                  <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                </div> */}
              </div>
            </div>
          </ModelSection>

          {/*Time*/}

          <ModelSection>
            <div className={Time.container} id="time">
              <h2>Time</h2>
              <Carousel1 />
            </div>
          </ModelSection>

          {/*Contato*/}
          <ModelSection>
            <div className={Contato.main} id="contato">
              <div className={Contato.container}>
                <h2>Contato</h2>
                <div className={Contato.contato}>
                  <form className={Contato.form}>
                  <p>Fale Conosco</p>
                    <input
                      className={Contato.input}
                      type="text"
                      placeholder="Nome"
                    ></input>
                    <input
                      className={Contato.input}
                      type="email"
                      placeholder="Email"
                    ></input>
                    <input
                      className={Contato.input}
                      type="text"
                      placeholder="Sua Mensagem"
                    ></input>
                    <ButtonForm type="submit">Send</ButtonForm>
                  </form>
                  <div className={Contato.containerInfo}>
                  <div className={Contato.info}>
                      <img src={Email} className={Contato.icon} alt="" />
                      <p>bitcev@gmail.com </p>
                    </div>
                    <div className={Contato.info}>
                      <img src={Telefone_icon} className={Contato.icon} alt="" />
                      <p>bitcev@gmail.com </p>
                    </div>
                    <div className={Contato.info}>
                      <img src={Localizacao_icon} className={Contato.icon} alt="" />
                      <p>bitcev@gmail.com </p>
                    </div>
                    <div className={Contato.social}>
                      <a href="https://www.youtube.com/"> <img src={Youtube_icon} alt="" /></a>
                      <img  src={Instagram_icon} alt="" />
                      <img  src={Facebook_icon} alt="" />
                      <img  src={Twitter_icon} alt="" />
                    </div>
                    <Maps />
                  </div>
                </div>
              </div>
              <div className={Contato.rodape}>
                <div className="">
                  <img className={Contato.logomarca} src={Logomarca} alt="" />
                </div>
                <div className={Contato.link}>
                  <p>© 2021 Made with lot of ❤ and ☕ by BitCev®</p>
                </div>
                {/* <div className={Contato.link}>
                  <a href="#home">
                    <span>Home</span>
                  </a>
                  <a href="#quem-somos">
                    <span>Quem Somos</span>
                  </a>
                  <a href="#servicos">
                    <span>Serviços</span>
                  </a>
                  <a href="#time">
                    <span>Time</span>
                  </a>
                  <a href="#contato">
                    <span>Contato</span>
                  </a>
                </div> */}
              </div>
            </div>
          </ModelSection>
        </div>
      </ModelsWrapper>
    </Container>
    </>
  );
}

export default Page;
