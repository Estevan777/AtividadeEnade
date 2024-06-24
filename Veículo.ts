const veiculos: Veiculos = require('./veiculos.json');

type Veiculo = {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
  valor: number;
};

type CategoriaVeiculo = {
  novos: Veiculo[];
  usados: Veiculo[];
};

type Veiculos = {
  carros: CategoriaVeiculo;
  motos: CategoriaVeiculo;
};

const veiculosData: Veiculos = veiculos as any;

export const filtrarVeiculosPorMarca = (tipo: 'carros' | 'motos', marca: string): Veiculo[] => {
  return [...veiculosData[tipo].novos, ...veiculosData[tipo].usados]
    .filter(veiculo => veiculo.marca === marca);
};

export const somarValoresPorMarca = (tipo: 'carros' | 'motos', marca: string): number => {
  return filtrarVeiculosPorMarca(tipo, marca)
    .reduce((total, veiculo) => total + veiculo.valor, 0);
};

export const filtrarVeiculosPorAno = (tipo: 'carros' | 'motos', ano: number): Veiculo[] => {
  return [...veiculosData[tipo].novos, ...veiculosData[tipo].usados]
    .filter(veiculo => veiculo.ano > ano);
};
