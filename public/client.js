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

            appendProjectsData = (data) => {
                data.forEach(projeto => {
                    const { titulo, tipo_curso, modalidade, resumo, area_principal,
                        tipo_acao, local, espaco_realizacao, periodo_inscricao, vagas,
                        programacao, publico_alvo, carga_horaria, link_inscricao, equipe,
                        imagens} = projeto;

                    const carousel = document.getElementById("carrossel");
                    imagens.forEach(imagem => {
                        var carr = document.createElement('div');
                        carr.setAttribute('class', 'carousel-item');
                        // if (i == 0)
                        // {
                        //     carr.setAttribute('class', 'active');
                        // }
                        var link = document.createElement('img');
                        link.setAttribute('src', imagem.link);
                        link.setAttribute('class', 'd-block w-100');

                        carr.appendChild(link);
                        carousel.appendChild(carr);

                    });


// <div class="carousel-inner">
//         <div class="carousel-item active">
//         <img class="d-block w-100" src="http://placehold.it/1000x400" alt="First slide">
//         </div>
//         <div class="carousel-item">
//         <img class="d-block w-100" src="http://placehold.it/1000x400" alt="Second slide">
//         </div>
//         <div class="carousel-item">
//         <img class="d-block w-100" src="http://placehold.it/1000x400" alt="Third slide">
//         </div>
//         </div>

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

                    document.getElementById("titulo").innerText = titulo;
                    // document.getElementById("tipo_curso").innerText = tipo_curso;
                    // document.getElementById("modalidade").innerText = modalidade;
                    // document.getElementById("resumo").innerText = resumo;
                });
            }