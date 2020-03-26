import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';

export default function IndexPage() {
    return(
        <div>
        <h1> COVID-19 virus 우한 폐렴(코로나 바이러스) 세계 현재 상황 </h1>
        <Stats url="https://covid19.mathdro.id/api" />
        <h1> COVID-19 virus 우한 폐렴(코로나 바이러스) 중국 현재 상황 </h1>
        <Stats url="https://covid19.mathdro.id/api/countries/CN" />
        <CountrySelector />
        </div>
    );
}