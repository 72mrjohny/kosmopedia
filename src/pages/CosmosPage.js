import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/cosmos.css';

const data = {
    objects: [
        {
            id: 1,
            name: "galaktyka Andromedy",
            type: "galaxy",
            link: "https://pl.wikipedia.org/wiki/Galaktyka_Andromedy",
            text: "Galaktyka Andromedy (zwana również Messier 31, M31 lub NGC 224, a wcześniej także Wielką Mgławicą w Andromedzie) – galaktyka spiralna, leżąca około 2,52 miliona lat świetlnych od Ziemi w gwiazdozbiorze Andromedy.Do niedawna sądzono[kiedy?], że Galaktyka Andromedy jest najmasywniejszą galaktyką w Grupie Lokalnej, w skład której wchodzą również Droga Mleczna, Galaktyka Trójkąta oraz około 50 mniejszych galaktyk. Obecnie, na podstawie nowszych danych obserwacyjnych, uważa się, że Droga Mleczna zawiera więcej ciemnej materii i może być najmasywniejszym obiektem w grupie. Galaktyka Andromedy ma jednak znacznie więcej gwiazd, obserwacje przy pomocy Teleskopu Spitzera pozwalają szacować ich liczbę na około bilion.",
        },
        {
            id: 2,
            name: "Droga Mleczna",
            type: "galaxy",
            link: "https://pl.wikipedia.org/wiki/Droga_Mleczna",
            text: "Galaktyka spiralna z poprzeczką, w której znajduje się m.in. nasz Układ Słoneczny. Droga Mleczna nazywana jest też po prostu Galaktyką, ale wtedy dla odróżnienia od innych galaktyk pisana jest wielką literą „G”. Zawiera od 100 (według starszych szacunków) do 400 miliardów (według nowszych szacunków) gwiazd. Ma średnicę około 100 000 lat świetlnych i grubość ok. 1000 lat świetlnych.Droga Mleczna porusza się w kosmosie w kierunku Supergromady Lokalnej. Ta zaś wraz z naszą Drogą Mleczną przyciągana jest przez Wielki Atraktor, czyli olbrzymie skupisko galaktyk zgrupowanych w gromady i supergromady. Oddziaływanie grawitacyjne między Drogą Mleczną a Wielkim Atraktorem powoduje, że nasza Galaktyka porusza się w kierunku jego centrum z prędkością ponad dwóch milionów kilometrów na godzinę.",
        },
        {
            id: 3,
            name: "galaktyka NGC 4993",
            type: "galaxy",
            link: "https://pl.wikipedia.org/wiki/NGC_4993",
            text: "(również NGC 4994 lub PGC 45657) – galaktyka eliptyczna (E/SB0), znajdująca się w gwiazdozbiorze Hydry. Odkrył ją William Herschel 26 marca 1789 roku. 25 marca 1836 roku obserwował ją też John Herschel, jednak błędnie obliczył jej deklinację i w rezultacie skatalogował ją jako nowo odkryty obiekt. John Dreyer, zestawiając swój New General Catalogue, błędu tego nie wychwycił i skatalogował obie te obserwacje jako, odpowiednio, NGC 4993 i NGC 4994",
        },
        {
            id: 4,
            name: "Ziemia",
            type: "planet",
            link: "https://pl.wikipedia.org/wiki/Ziemia",
            text: "Ziemia (łac. Terra, Tellus; gr.: Γαῖα, trb.: Gaja) – trzecia, licząc od Słońca, oraz piąta pod względem wielkości planeta Układu Słonecznego. Pod względem średnicy, masy i gęstości jest to największa planeta skalista Układu Słonecznego. Ziemia jest zamieszkana przez miliony gatunków, w tym przez człowieka[9]. Jest jedynym znanym miejscem we Wszechświecie, w którym występuje życie[10]. Według danych zebranych metodą datowania izotopowego, planeta uformowała się ok. 4,54 ± 0,05 mld lat temu",
        },
        {
            id: 5,
            name: "Saturn",
            type: "planet",
            link: "https://pl.wikipedia.org/wiki/Saturn",
            text: "Saturn – gazowy olbrzym, szósta planeta Układu Słonecznego pod względem odległości od Słońca, druga po Jowiszu pod względem masy i wielkości. Charakterystyczną jego cechą są pierścienie, składające się głównie z lodu i w mniejszej ilości z odłamków skalnych; inne planety-olbrzymy także mają systemy pierścieni, ale żaden z nich nie jest tak rozległy ani tak jasny. Według danych z marca 2015 roku znane są 62 naturalne satelity Saturna",
        },
        {
            id: 6,
            name: "Sagittarius A*",
            type: "black hole",
            link: "https://pl.wikipedia.org/wiki/Sagittarius_A*",
            text: "Sagittarius A* (w skrócie Sgr A*) – obiekt astronomiczny, który jest jasnym i bardzo zwartym źródłem radiowym w centrum Drogi Mlecznej, częścią większej struktury astronomicznej (Sagittarius A). Odległość do źródła wynosi około 8 kpc (2,4×1017 km). Chociaż nie do końca jest to pewne, na podstawie badań gwiazdy S2, obiekt ten jest uważany przez astronomów za supermasywną czarną dziurę o masie około 4,31±0,06 milionów mas Słońca (masa Słońca w przybliżeniu wynosi 2×1030 kg). Według najnowszych obserwacji może ona sięgać nawet 3,7 miliona mas Słońca i mieć promień około pół minuty świetlnej (0,06 j.a.), a więc trzynastokrotnie większy od promienia Słońca. Badania wskazują również, że czarna dziura zwiększyła swoją masę 2 do 4 razy w ciągu ostatnich 5-10 miliardów lat poprzez pochłanianie pobliskich gwiazd.",
        },
    ]
}


class CosmosPage extends React.Component {


    state = {
        objects: data.objects,
        select: "all",
    }
    handleFilterList(option) {
        this.setState({
            select: option
        })
    }
    objectsList = () => {
        let objects = data.objects;

        switch (this.state.select) {
            case "all":
                return objects.map(object => <li key={object.id}><Link object={this.object} to={`/cosmobject/${object.name}`}>{object.name}</Link></li>)
            case "galaxy":
                objects = objects.filter(object => object.type === "galaxy")
                return objects.map(object => <li><Link to={`/cosmobject/${object.name}`}>{object.name}</Link></li>)
            case "planet":
                objects = objects.filter(object => object.type === "planet")
                return objects.map(object => <li><Link to={`/cosmobject/${object.name}`}>{object.name}</Link></li>)
            case "black hole":
                objects = objects.filter(object => object.type === "black hole")
                return objects.map(object => <li><Link to={`/cosmobject/${object.name}`}>{object.name}</Link></li>)
            default:
                return "coś się zepsuło"

        }
    }
    render() {
        return (
            <div className="spaceObjects">
                <button onClick={this.handleFilterList.bind(this, "galaxy")}>Galaktyki</button>
                <button onClick={this.handleFilterList.bind(this, "planet")}>Planety</button>
                <button onClick={this.handleFilterList.bind(this, "black hole")}>Czarne dziury</button>
                <ul>
                    {this.objectsList()}
                </ul>
            </div>
        )
    }
}


export default CosmosPage;