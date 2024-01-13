const TripPlanCountryCard = () => {
  return (
    <Styled.CountryContainer>
      {getCountries().map((country) => (
        <button key={country.name} onClick={() => selectCountry(country.name)}>
          {country.name}
        </button>
      ))}
    </Styled.CountryContainer>
  );
};

export default TripPlanCountryCard;
