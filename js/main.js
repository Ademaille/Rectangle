let rectangle = new Rectangle()

let perimetre = rectangle.perimeter()

let aire = rectangle.area()

let carré = rectangle.isSquare()



const Rect = document.querySelector("#create_rect")
Rect.addEventListener("click", () => {
    let length = document.querySelector("#length").value;
    let width = document.querySelector("#width").value;

    length = Number(length)
    width = Number(width)

    const Création = document.querySelector("#rect_state")
    Création.textContent = "Longueur = " + length + " | Largeur = " + width;
})

const Peri = document.querySelector("#calc_perimeter")
Peri.addEventListener("click", () => {
    const PeriText = document.querySelector("#perimeter_state")
    PeriText.textContent = "Périmètre = " + perimetre;
})

const Aire = document.querySelector("#calc_area")
Aire.addEventListener("click", () => {
    const AireText = document.querySelector("#area_state")
    AireText.textContent = "Aire = " + aire
})
