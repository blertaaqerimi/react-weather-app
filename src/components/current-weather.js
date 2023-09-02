
const CurrentWeather = ({ data }) => {
    return (
        <div className="card mt-4 d-flex flex-row" style={{ maxWidth: "440px", borderRadius: "6px", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", margin: "20px auto" }}>
            <div className="card-body text-center">
                <img style={{ width: "80px" }} src={`icons/${data.weather[0].icon}.png`} alt="weather" />
                <h5 className="mt-2">{data.city}</h5>
                <p>{data.weather[0].description}</p>
            </div>
            <div className="card-body text-center">
                <h1 className="text-center fw-bold">{Math.round(data.main.temp)}°C</h1>
                <div className="d-flex flex-column align-items-center">
                    <div><b>Feels like:</b> {Math.round(data.main.feels_like)}°C</div>
                    <div><b>Wind:</b> {data.wind.speed}m/s</div>
                    <div><b>Humidity:</b> {data.main.humidity}%</div>
                    <div><b>Pressure:</b> {data.main.pressure}hPa</div>
                </div>
            </div>
        </div>
    )
};

export default CurrentWeather;

