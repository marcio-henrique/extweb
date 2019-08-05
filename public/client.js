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
                    const { titulo, tipo_curso, modalidade, resumo } = projeto;
                    document.getElementById("titulo").innerText = titulo;
                    document.getElementById("tipo_curso").innerText = tipo_curso;
                    document.getElementById("modalidade").innerText = modalidade;
                    document.getElementById("resumo").innerText = resumo;
                });
            }