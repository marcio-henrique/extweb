fetch('/projetos')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendProjectsData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });

            //set attributes from json to html with creating html elements
            appendProjectsData = (data) => {
                data.forEach(projeto => {

                    const { titulo, tipo_curso, modalidade, resumo, area_principal,
                        tipo_acao, local, espaco_realizacao, periodo_inscricao, vagas, programacao, 
                        publico_alvo, carga_horaria, link_inscricao, equipe,
                        imagens} = projeto;
                    
                    
                    document.getElementById("titulo").innerText = titulo;
                    document.getElementById("txtDescricao").innerText = resumo;

                    //especificações
                    document.getElementById("publicoAlvo").innerText = publico_alvo;
                    document.getElementById("modalidade").innerText = modalidade;
                    document.getElementById("areaPrincipal").innerText = area_principal;
                    document.getElementById("tipoAcao").innerText = tipo_acao;
                    document.getElementById("cargaHoraria").innerText = carga_horaria;

                    //inscrições
                    document.getElementById("inicioInscricoes").innerText = periodo_inscricao.data_inicial;
                    document.getElementById("fimInscricoes").innerText = periodo_inscricao.data_final;
                    document.getElementById("linkInscricoes").href = link_inscricao;


                    //programação
                    document.getElementById("txtDataP").innerText = programacao[0].data;
                    document.getElementById("inicioP").innerText = programacao[0].horario_inicial;
                    document.getElementById("fimP").innerText = programacao[0].horario_final;
                    document.getElementById("atividadesP").innerText = programacao[0].atividades;

                    //local
                    document.getElementById("cidade").innerText = local.municipio;
                    document.getElementById("estado").innerText = local.estado;
                    document.getElementById("espaco").innerText = espaco_realizacao;

                    //vagas                
                    document.getElementById("vagasdisponiveis").innerText = vagas.quantidade_total;
                    document.getElementById("vagasocupadas").innerText = vagas.quantidade_ocupada;
                    
                    //equipe
                    document.getElementById("nomeContato0").innerText = equipe[0].nome;
                    document.getElementById("categoriaContato0").innerText = equipe[0].categoria;
                    document.getElementById("funcaoContato0").innerText = equipe[0].funcao;
                    document.getElementById("emailContato0").innerText = equipe[0].email;
                    document.getElementById("nomeContato1").innerText = equipe[1].nome;
                    document.getElementById("categoriaContato1").innerText = equipe[1].categoria;
                    document.getElementById("funcaoContato1").innerText = equipe[1].funcao;
                    document.getElementById("emailContato1").innerText = equipe[1].email;
                    document.getElementById("nomeContato2").innerText = equipe[2].nome;
                    document.getElementById("categoriaContato2").innerText = equipe[2].categoria;
                    document.getElementById("funcaoContato2").innerText = equipe[2].funcao;
                    document.getElementById("emailContato2").innerText = equipe[2].email;
                
                    //set images on carousel
                    var carousel = document.getElementById("carrossel");
                    var slide_list = document.getElementById("slideList");
                    imagens.forEach((imagem, i) => {
                        console.log(imagem.link);
// <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        var carr = document.createElement("div");
                        var slide = document.createElement("li");

                        carr.classList.add("carousel-item");
                        slide.setAttribute("data-target", "carouselExampleIndicators");
                        slide.setAttribute("data-slide-to", i);
                        
                        if (i == 0)
                        {
                            carr.classList.add("active");
                            slide.classList.add("active");
                        }

                        var link = document.createElement("img");
                        link.setAttribute("src", imagem.link);
                        link.setAttribute("height", 500);
                        link.setAttribute("width", 1000);
                        link.setAttribute("class", "d-block w-100");

                        carr.appendChild(link);
                        carousel.appendChild(carr);
                        slide_list.appendChild(slide);

                    }); 

                    // const b = document.createElement('b');
                    // const p1 = document.createElement('p');
                    // const p2 = document.createElement('p');
                    // const p3 = document.createElement('p');
                    //
                    // b.textContent = phone.name;
                    // p2.textContent = "Número: " + phone.display_number;
                    // p3.textContent = "Local: " + phone.location;
                    //
                    // lista.appendChild(item);
                    // p1.appendChild(b);
                    // item.appendChild(p1);
                    // item.appendChild(p2);
                    // item.appendChild(p3);

                    // document.getElementById("tipo_curso").innerText = tipo_curso;
                    // document.getElementById("modalidade").innerText = modalidade;
                });
            }