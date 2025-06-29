// Função para identificar a bandeira do cartão pelo número
function identificarBandeira(numeroCartao) {
  // Remove espaços e traços
  const num = numeroCartao.replace(/[\s-]/g, '');

  // Expressões regulares para diferentes bandeiras
  const bandeiras = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    MasterCard: /^(5[1-5][0-9]{14}|2(2[2-9][0-9]{12}|[3-6][0-9]{13}|7[01][0-9]{12}|720[0-9]{12}))$/,
    Amex: /^3[47][0-9]{13}$/,
    Elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))[0-9]{0,10})|((5067)|(4576)|(4011))[0-9]{0,12})$/,
    Hipercard: /^(606282|3841)[0-9]{5,}$/,
    Diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    JCB: /^(?:2131|1800|35\d{3})\d{11}$/
  };

  for (const bandeira in bandeiras) {
    if (bandeiras[bandeira].test(num)) {
      return bandeira;
    }
  }

  return 'Bandeira não identificada';
}

// Exemplo de uso
const cartao = "4111 1111 1111 1111";
console.log(identificarBandeira(cartao)); // Deve imprimir "Visa"
