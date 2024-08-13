import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import HOT from '@mui/icons-material/WbSunny';
import COLD from '@mui/icons-material/AcUnit';
import RAIN from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    const HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670493557623-d0c91a65b633?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjB3aW50ZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhaW4lMjB3aXRoJTIwdW1icmVsbGF8ZW58MHx8MHx8fDA%3D";
    return(
        <div className="InfoBox">
            <h2>WeatherInfo - {info.weather}
            
            </h2>
            <div className='Cardcontainer'>
                <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                    sx={{ height: 250 }}
                    image={info.humidity>85 ? RAIN_URL : info.temp<20 ? COLD_URL : HOT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} &nbsp;
                    {info.humidity>89 ? <RAIN/> : info.temp<20 ? <COLD/> : <HOT/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Teperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i><b>{info.weather}</b></i> and temperature feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    )
}