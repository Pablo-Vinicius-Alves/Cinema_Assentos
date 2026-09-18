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
                throw new Error("Assento ocupado!!");
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
            throw new Error("Esse assento não existe!");
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

    idAssentos(f) {
        const letra = String.fromCharCode(65 + f);
        const ids = [];

        for (let i = 1; i <= this.assentosPf; i++) {
            const id = letra + i
            ids.push(id);
        }
        return ids;
    }

    melhorAssento(f, qntd) {
        const ids = this.idAssentos(f);
        const bloco = [];

        for (const id of ids) {
            const assento = this.assentos.get(id);

            if (assento.ocupado == false) {
                bloco.push(id)
                if (bloco.length === qntd) {
                    console.log(`Esse é o melhor lugar para ${qntd} pessoas.`);
                    return bloco
                }
            } else {
                bloco.length = 0;
            }
        };
        return null;
    }

    reservarMelhores(qntd) {
        for (let f = 0; f < this.fileiras; f++) {
            const bloco = this.melhorAssento(f, qntd);

            if (bloco != null) {
                for (const id of bloco) {
                    this.reservarAssento(id);
                }
                const precoFinal = this.calcularValor(qntd);
                return { assentos: bloco, preco: precoFinal }
            }
        }
        return null;
    }
}

module.exports = Cinema;



// TESTES AO LONGO DO PROJETO:
// const cinema = new Cinema(5, 5);

// const resultado = cinema.reservarMelhores(4);
// console.log("Resultado", resultado);

// console.log("Assentos disponíveis", cinema.assentosDisponiveis())

// console.log(cinema.reservarMelhores(6));
// console.log("Assentos disponíveis", cinema.assentosDisponiveis())
// console.log(cinema.idAssentos(0));
// console.log(cinema.idAssentos(1));

// const cinema = new Cinema(6, 5)
// console.log("Assentos disponíveis", cinema.assentosDisponiveis())
// console.log(cinema.calcularValor(2));
// console.log(cinema.calcularValor(4));
// console.log(cinema.calcularValor(6));
// console.log(cinema.assentos.size)

// try {
//     cinema.reservarAssento("A2");
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

// console.log("Assentos disponíveis", cinema.assentosDisponiveis());



