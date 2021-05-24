function ResultLeft({ dataCity }: any) {
  const errorStyle = {
    backgroundColor: "rgba(255,67,67,0.6)",
  };

  if (!dataCity) {
    return <p style={errorStyle}>Cidade não encontrada</p>;
  } else {
    return (
      <>
        <p>Cidade: {dataCity.city}</p>
        <p>País: {dataCity.country}</p>
        <p>Temperatura em graus: {dataCity.temperature} Celcius</p>
        <p>Umidade: {dataCity.humidity}</p>
        <p>Clima: {dataCity.weather}</p>
      </>
    );
  }
}

export default ResultLeft;