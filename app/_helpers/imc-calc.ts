//calculo de imc
export function imcCalc(weight: string, height: string): number {
  const parsedWeight = Number(weight);
  const parsedHeight = Number(height);
  return Number((parsedWeight / (parsedHeight * parsedHeight)).toFixed(2));
}

//classificar imc
export function imcClassification(imc: number): string {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    return "Sobrepeso";
  } else if (imc >= 30 && imc < 34.9) {
    return "Obesidade grau 1";
  } else if (imc >= 35 && imc < 39.9) {
    return "Obesidade grau 2";
  } else {
    return "Obesidade grau 3";
  }
}