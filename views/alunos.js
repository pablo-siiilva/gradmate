document.addEventListener("DOMContentLoaded", () => {
    const alunos = JSON.parse(document.querySelector(".list").dataset.alunos);
    const itemsPerPage = 10;  // Defina quantos itens por página
    let currentPage = 1;

    const currentPageElement = document.getElementById("currentPage");
    const totalPagesElement = document.getElementById("totalPages");
    const footer = document.querySelector(".footer");

    function renderPage(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageItems = alunos.slice(startIndex, endIndex);

        const listContainer = document.querySelector(".list");
        listContainer.innerHTML = ""; // Limpa a lista atual

        if (pageItems.length > 0) {
            pageItems.forEach(aluno => {
                const listItem = document.createElement("div");
                listItem.className = "list-item";
                listItem.textContent = aluno.name;
                listContainer.appendChild(listItem);
            });
        } else {
            const noItem = document.createElement("div");
            noItem.className = "list-item";
            noItem.textContent = "Nenhum item encontrado";
            listContainer.appendChild(noItem);
        }

        currentPageElement.textContent = currentPage;
        totalPagesElement.textContent = Math.ceil(alunos.length / itemsPerPage);

        // Mostrar ou ocultar a navegação de página com base no número de alunos
        if (alunos.length > itemsPerPage) {
            footer.style.display = "flex";
        } else {
            footer.style.display = "none";
        }
    }

    function navigate(direction) {
        const totalPages = Math.ceil(alunos.length / itemsPerPage);
        currentPage += direction;

        if (currentPage < 1) {
            currentPage = 1;
        } else if (currentPage > totalPages) {
            currentPage = totalPages;
        }

        renderPage(currentPage);
    }

    document.querySelectorAll(".page-button").forEach(button => {
        button.addEventListener("click", (event) => {
            const direction = event.target.innerText.includes("⬅️") ? -1 : 1;
            navigate(direction);
        });
    });

    // Inicializa a primeira página
    renderPage(currentPage);
});
