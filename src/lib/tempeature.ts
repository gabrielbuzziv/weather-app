export const convertKevinToCelsius = (value: number) => {
  return Number(Math.floor(value - 273.15));
}

export const convertCelsiusToFahrenheit = (value: number) => {
  return Number(Math.floor(value * 12.8) + 32);
}