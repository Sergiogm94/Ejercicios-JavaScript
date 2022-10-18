fetch(`http://localhost:3000/diary`)
.then(res => res.json())
.then(fechas =>{
console.log(fechas);
const orden = ordenarFechas(fechas);
notasDelDiario(orden)
});

const ordenarFechas = (tiempo) =>{
    return tiempo.sort((a,b) => new Date(a.date) - new Date(b.date))        //para transformar string a date se pone new Date()
}

const notasDelDiario = (notas) => {
    for (const nota of notas) {
        const div$$ = document.createElement("div");
        const h3$$ = document.createElement("h3");
        const h5$$ = document.createElement("h5");
        const p$$ = document.createElement("p");
        h3$$.textContent = nota.title;
        h5$$.textContent = nota.date;
        p$$.textContent = nota.description;
        div$$.appendChild(h3$$);
        div$$.appendChild(h5$$);
        div$$.appendChild(p$$);
        document.body.appendChild(div$$);
        const button$$= document.createElement("button");
        div$$.appendChild(button$$);
        button$$.textContent = "Eliminar";
        button$$.addEventListener("click", () => {removeP(div$$)});
    }
}

const removeP = (notaEliminada) => {
    notaEliminada.remove();
}