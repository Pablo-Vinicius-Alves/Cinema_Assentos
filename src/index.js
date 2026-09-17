class Cinema {
    constructor(fileiras, assentosPf) {
        this.fileiras = fileiras;
        this.assentosPf = assentosPf;
        this.precoUnico = 50;
        this.assentos = this.criarAssento()
    };

    criarAssento() {
        const mapa = new Map();

        for (let f = 0; f < this.fileiras; f++) {
            const letra = String.fromCharCode(65 + f);

            for (let i = 1; i <= this.assentosPf; i++) {
                const id = letra + i;
                mapa.set(id, { ocupado: false })
            }
        }
        return mapa;
    }

    reservarAssento(id) {
        if (this.assentos.has(id) == true) {
            const assento = this.assentos.get(id)

            if (assento.ocupado == false) {
                assento.ocupado = true;
            } else {
                throw new Error("Assento ocupado!");
            }
        } else {
            throw new Error("Esse assento não existe!");
        }
    }

    cancelarAssento(id) {
        if (this.assentos.has(id) == true) {
            const assento = this.assentos.get(id)
            if (assento.ocupado == true) {
                assento.ocupado = false;
            } else {
                throw new Error("Esse assento não está sendo ocupado")
            }
        } else {
            throw new Error("Esse ssento não existe!");
        }
    }

    assentosDisponiveis() {
        const disponiveis = [];

        for (const [id, assento] of this.assentos) {
            if (assento.ocupado == false) {
                disponiveis.push(id);
            }
        }
        return disponiveis;
    }

    calcularValor(qntd) {
        const valor = this.precoUnico * qntd
        if (qntd >= 4) {
            const desconto = valor * (10 / 100)
            return valor - desconto;
        }
        return valor;
    }
}


const cinema = new Cinema(6, 5)
console.log("Assentos disponíveis", cinema.assentosDisponiveis())
console.log(cinema.calcularValor(2));  
console.log(cinema.calcularValor(4));  
console.log(cinema.calcularValor(6));  
// console.log(cinema.assentos.size)

// try {
//     cinema.reservarAssento("B3");
//     console.log("B3", cinema.assentos.get("B3"));
    
//     console.log("Assento reservado com sucesso!");
// } catch (Error) {
//     console.log(Error.message);
// }

// console.log("Assentos disponíveis", cinema.assentosDisponiveis());

// try {
//     cinema.cancelarAssento("B3");
//     console.log("B3", cinema.assentos.get("B3"));
//     console.log("Reserva cancelada com sucesso!");
// } catch (Error) {
//     console.log(Error.message);
// }

console.log("Assentos disponíveis", cinema.assentosDisponiveis());



