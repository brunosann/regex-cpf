const cpfs = document.querySelectorAll('.cpf li');

const cpfElementsText = (list) => {
  const arrayCpfs = [...list];
  return arrayCpfs.map(cpf => cpf.innerText);
};

const cpfsText = cpfElementsText(cpfs);

const limparCpfs = (list) => {
  const regexp = /[\D]/g;
  return list.map(cpf => cpf.replace(regexp, ''));
};

const cpfsLimpos = limparCpfs(cpfsText);

const formatarCpfs = (list) => {
  const regexp = /(\d{3})(\d{3})(\d{3})(\d{2})/;
  return list.map(cpf => cpf.replace(regexp, '$1.$2.$3-$4'));
};

const cpfsFormatados = formatarCpfs(cpfsLimpos);

cpfs.forEach((cpf, index) => cpf.innerHTML = cpfsFormatados[index]);